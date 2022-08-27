import React from 'react';
import { useState,useEffect, inputRef} from 'react'

export default function Info(props) {
  const { setInfoData, data } = props;

  let changeInfo = (e) => {
    setInfoData({ ...data, [e.target.name]: e.target.value });
    e.preventDefault();
    isVisible: true,
    setInfoData = inputRef.current.value;
  }
  return (
    <div className="info">
      <ul>
        <li onClick={changeInfo}>Name: {data.name}</li>
        <li onClick={changeInfo}>Email: {data.email}</li>
        <li onClick={changeInfo}>Amount Spent: {data.amtSpent}</li>
        <li onClick={changeInfo}>Card Number(s): {data.cardNumber}</li>
      </ul>
    </div>
  )
}