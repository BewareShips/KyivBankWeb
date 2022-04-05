import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import {  Row, Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses);

    useEffect(() => {
        GetExpenses(dispatch);
    }, [dispatch]);

    return expenses.map(e =>
        <div key={e.id} style={{ marginBottom: '1rem' }}>
            <ListRow expense={e} />
        </div>
    );
}

const ListRow = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing
        ? <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
        : <div>
            <Row>
                <Col><h6>{expense.dateCreated}</h6></Col>
                <Col><h6>{expense.description}</h6> </Col>
                <Col><h6>${expense.amount}</h6> </Col>
                {/* <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button> */}
            </Row>
            <hr />
        </div>
}

export default ExpenseList;