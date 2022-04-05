import { React, useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
   WidthrawOperation,
   DepositOperation,
   TransferOperation,
} from "../services/expenses";
import { useDispatch } from "react-redux";

const ExpenseForm = ({ expense }) => {
   const descriptions = ["Withdraw", "Deposit", "Transfer"];
   const [amount, setAmount] = useState(0);
   const [accountNumber, setAccountNumber] = useState("");
   const [description, setDescription] = useState(descriptions[0]);
   const dispatch = useDispatch();

   useEffect(() => {
      if (expense !== undefined) {
         setAmount(expense.amount);
      }
   }, [expense]);


   const SubmitOperation = (event) =>{
    event.preventDefault();
    if (descriptions[0] === description) {
      
       WidthrawOperation(dispatch, {
          description,
          amount: Number(amount),
       });
    } else if (descriptions[1] === description) {
       DepositOperation(dispatch, {
          description,
          amount: Number(amount),
       });
    } else if (descriptions[2] === description){
console.log({
    description,
    amount: Number(amount),
    toAccount: accountNumber
 }, "elseeeee")
       TransferOperation(dispatch, {
          description,
          amount: Number(amount),
          toAccount: accountNumber
       });
    }
   }

   return (
      <Form
         onSubmit= {SubmitOperation}
      >
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as='select'
                    onChange={event => setDescription(event.target.value)}>
                    {descriptions.map((d, idx) => <option key={idx}>{d}</option>)}
                </Form.Control>
            </Col>

            {description === descriptions[2] && 
            (<Col>
                <Form.Label>Designated account number</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={accountNumber}
                    onChange={event => setAccountNumber(event.target.value)} />
            </Col>)}

            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={amount}
                    onChange={event => setAmount(event.target.value)} />
            </Col>
            <div style={{ marginTop: 'auto' }}>
                <Button style={{ marginRight: '2px'}} variant='success' type='submit'>Save</Button>
            </div>
        </Row>
    </Form>
      
   );
};

export default ExpenseForm;
