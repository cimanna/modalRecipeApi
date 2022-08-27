import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import './App.css';
import Add from './Add';
import Customers from './Customers';

export default function App() {
  const [filtered, setFiltered] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [cards, setCards] = useState([]);
  const inputRef = useRef(null);
  const [infoData, setInfoData] = useState({
    data: {},
    isVisible: false
  })
  const [usage, setUsage] = useState({
    const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch('https://customerdataapi.herokuapp.com/customers')
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setFiltered(data);
      })
  })
  const handleClick = (e) => {
    e.preventDefault();
    setUsage(false)
    const name = e.target.innerText.toLowerCase();

    const filtered = customers.filter((customer) =>
      customer.name === name
    )
    setFiltered(filtered);
    setDisplay(true)
  }

  let handleCustSubmit = (e) => {
    e.preventDefault();
    let searchTerm = inputRef.current.value;

      fetch('https://customerdataapi.herokuapp.com/customers?name=${searchTerm}')
      .then((response) => response.json())
      .then((data) => {
        // setCustomers(data)
        console.log(data)
    });
  }

  
  let handleCardSubmit = (e) => { 
    e.preventDefault();
    fetch('https://customerdataapi.herokuapp.com/cards?Card_Number=${searchTerm}')
      .then((response) => response.json())
      .then((data) => {
        // setCards(data)
        console.log(data)
    });
  }
  
  return (
    <div className="App">
      <header>Company Customer Data</header>
      <Customers>
      {customers.map((customer, i) => {
          let data = {
            name: customer.Name,
            email: customer.Email,
            amtSpent: customer.AmountSpent,
            cardNumber: customer.Cards
          }
          return <Info key={i} data={data} />;

        })}
      <Customers/>
      <form onSubmit={handleCardSubmit}></form>
      <input ref={inputRef} type="text" placeholder="Search by card number" />
        <input type='submit' />
        
      <form onSubmit={handleCustSubmit}></form>
      <input ref={inputRef} type="text" placeholder="Search by customer name" />
      <input type='submit' />
      
      <div className='customer-data'>
      {infoData.isVisible ? (
        <Info data={infoData.data} setModalData={setInfoData} />
      ) : (
        ""
      )}
    </div>
    </div>
        )
}

