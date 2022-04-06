import {
    //setExpenses, 
    newExpense,
    setExpensesError,  newExpenseError, depositExpenseError, withdrawExpenseError, transferExpenseError, setExpenses, 
} from '../app/expensesSlice';
import * as axios from 'axios';

const axiosInstance = axios.create({    
    baseURL: `${process.env.REACT_APP_BASE_URL}/expenses`,
})

axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        console.log(data,'dataaaa')
        dispatch(setExpenses(data));
    } catch {
        dispatch(setExpensesError());
    }
}

export const WidthrawOperation = async (dispatch, expense) => {
    try {
        // api call
       
        const { data } = await axiosInstance.post('/widthraw', expense);
        dispatch(newExpense(data));
    } catch {
        dispatch(withdrawExpenseError());
    }
}

export const DepositOperation = async (dispatch, expense) => {
    try {
        // api call
        
        const { data } = await axiosInstance.post('/deposit', expense);
        dispatch(newExpense(data));
    } catch {
        dispatch(depositExpenseError());
    }
}

export const TransferOperation = async (dispatch, expense) => {
    try {
        // api call
        console.log(expense,"TransferOperation")
        const { data } = await axiosInstance.post('/transfer', expense);
        dispatch(newExpense(data));
    } catch {
        dispatch(transferExpenseError());
    }
}

export const NewExpense = async (dispatch, expense) => {
  try {
      // api call
      console.log(expense,"www")
      const { data } = await axiosInstance.post('', expense);
      dispatch(newExpense(data));
  } catch {
      dispatch(newExpenseError());
  }
}


// export const EditExpense = async (dispatch, expense) => {
//     try {
//         // api call
//         await axiosInstance.put('', expense);
//         dispatch(editExpense(expense));
//     } catch {
//         dispatch(editExpenseError());
//     }
// }

// export const DeleteExpense = async (dispatch, expense) => {
//     try {
//         // api call
//         await axiosInstance.delete('', { data: { ...expense } });
//         dispatch(deleteExpense(expense));
//     } catch {
//         dispatch(deleteExpenseError());
//     }
// }

