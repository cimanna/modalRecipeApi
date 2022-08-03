import React, { useState } from "react";

function Modal(props) {
  const { setModalData, data} = props
  let handleClick = () => {
    setModalData({
      data: {},
      isVisible: false,
  })
  }
  return (
    <div className="Modal">
      <div className="Modal-container">
        <h1>{data.name}</h1>
        <img src={data.src} alt="Food"></img>
        <ul>
          <a href={data.link} target="_blank" rel="noreferrer" >Click me</a>
          <li>Calories: {data.calories} {data.calUnit}</li>
          <li>Servings: {data.servings}</li>
          <li> Fat: {data.fat} {data.fatUnit}</li>
          <li>Saturated Fat: {data.satFat} {data.satFatUnit}</li>
          <li>Carbs: {data.carbs} {data.carbUnit}</li>
          <li>Protein: {data.protein} {data.proteinUnit}</li>
          <li>Sugar: {data.sugar} {data.sugarUnit}</li>
          <li>Fiber: {data.fiber} {data.fiberUnit}</li>
        </ul>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
}
export default Modal;