import { React, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getUserByName } from "../services/authentication";

const HomePage = () => {
   const dispatch = useDispatch();

   const userData = useSelector((state) => state.userSlice);
   const userName = useSelector((state) => state.authenticationSlice.user);



   useEffect(() => {
       console.log(sessionStorage.getItem("userName"))
      getUserByName(dispatch, localStorage.getItem("userName"));
   }, [dispatch, userName]);

   return (
      <div style={{ width: "60%", margin: "auto" }}>
         <div className="d-flex flex-row">
            <div className="card text-white bg-success mb-3 w-100 mr-3" >
               <div className="card-header">
                  <h5 className="card-title">User name</h5>
               </div>
               <div className="card-body">{userData.username}</div>
            </div>
            <div className="card text-white bg-danger mb-3 w-100 mr-3">
               <div className="card-header">
                  <h5 className="card-title">Email</h5>
               </div>
               <div className="card-body">{userData.email}</div>
            </div>
            <div className="card text-white bg-warning mb-3 w-100 mr-3">
               <div className="card-header">
                  <h5 className="card-title">Account</h5>
               </div>
               <div className="card-body">{userData.accountNumberGenerated}</div>
            </div>
            <div className="card text-white bg-info mb-3 w-100">
               <div className="card-header">
                  <h5 className="card-title">Balance</h5>
               </div>
               <div className="card-body">{userData.balance}</div>
            </div>
         </div>
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
