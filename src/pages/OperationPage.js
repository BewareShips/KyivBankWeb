import React from 'react'
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import Deposit from '../components/DepositForm';
// import ExpenseForm from '../components/ExpenseForm';



// import ExpenseForm from '../components/ExpenseForm';
import { ToastContainer } from 'react-toastify';
import TransferForm from '../components/TransferForm';
import TransferList from '../components/TransferList';


const OperationPage = () => {
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
        <ToastContainer />
        <h4>Banking operations</h4>
        <TransferForm />
        <hr style={{ border: '1px solid grey' }} />
        <h4>Banking history</h4>
        {/* <ExpenseList /> */}
        <TransferList/>
    </div>
  )
}

export default OperationPage