import React from 'react'
import Modal from './Modal'
import { useState,useEffect } from 'react'

export default function Item(props) {
  const { data,setModalData } = props
  let handleClick = () => {
    setModalData({
      data: data,
      isVisible: true,
    })
  }
  return (
    <div onClick={handleClick} className='Item-container' >
      <img src={data.src} alt="Food" />
      <h1>{data.name}</h1>
    
    </div>
  )
}



