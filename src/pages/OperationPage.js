import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Deposit from '../components/DepositForm';
import ExpenseForm from '../components/ExpenseForm';

const OperationPage = () => {
  return (
    <div style={{ display: 'block', padding: 30 }}>
      <h4>React-Bootstrap Tab Component</h4>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Dashboard">
          <Deposit/>
        </Tab>
        <Tab eventKey="second" title="Setting">
          <ExpenseForm/>
        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>
  )
}

export default OperationPage