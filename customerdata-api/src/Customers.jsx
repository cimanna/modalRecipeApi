import React from 'react';
import { useState, useEffect, inputRef } from 'react'
import {Link} from 'react-router-dom';
import Update from './Update';
//Display list of letters of customers' first letter  as Links
export default function Customers(props) {
  return (
    <div>
      <nav className="navContainer">
        <Link to="/info"><button onClick={handleClick}>{customer}</button></Link>
      </nav>
      <div>
        {display ? !usage ? <Products products={filteredProducts} /> : null : null}
      </div>
    </div>
  )
}