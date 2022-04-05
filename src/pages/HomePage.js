import { React, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
//import { getUserByName } from "../services/authentication";

const HomePage = () => {
   const dispatch = useDispatch();

   //const userData = useSelector((state) => state.userSlice);
   const userAccountId = useSelector((state) =>state.authenticationSlice.user)

  
//    useEffect(() => {
//     getUserByName(dispatch, userAccountId);
//    }, [dispatch, userAccountId]);

   return (
      <div style={{ width: "60%", margin: "auto" }}>
         <ToastContainer />
         <h4>New Expense</h4>
         <ExpenseForm />
         <hr style={{ border: "1px solid grey" }} />
         <h4>Your Expenses</h4>
         <ExpenseList />
      </div>
   );
};

export default HomePage;
