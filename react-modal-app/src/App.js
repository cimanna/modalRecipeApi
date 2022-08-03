import React, { useState, useEffect, useRef } from "react";
import Item from "./components/Item.jsx";
import Modal from "./components/Modal.jsx";
import "./App.css";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const inputRef = useRef(null);
  const [modalData, setModalData] = useState({
    data: {},
    isVisible: false,
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    let query = inputRef.current.value;

    let search = `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=da6b5bfd&app_key=94031ae7cc4322e3ef2c5e273907f2fc&type=public&random=true`;
    fetch(search)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.hits);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter food name" />
        <input type="submit" />
      </form>
      <div className="App-image-container">
        {modalData.isVisible ? (
          <Modal data={modalData.data} setModalData={setModalData} />
        ) : (
          ""
        )}
        {apiData.map((item, i) => {
          let data = {
            name: item.recipe.label,
            src: item.recipe.images.THUMBNAIL.url,
            link: item.recipe.url,
            calories: item.recipe.totalNutrients.ENERC_KCAL.quantity,
            calUnit: item.recipe.totalNutrients.ENERC_KCAL.unit,
            servings: item.recipe.yield,
            fat: item.recipe.totalNutrients.FAT.quantity,
            fatUnit: item.recipe.totalNutrients.FAT.unit,
            satFat: item.recipe.totalNutrients.FASAT.quantity,
            satFatUnit: item.recipe.totalNutrients.FASAT.unit,
            carbs: item.recipe.totalNutrients.CHOCDF.quantity,
            carbUnit: item.recipe.totalNutrients.CHOCDF.unit,
            protein: item.recipe.totalNutrients.PROCNT.quantity,
            proteinUnit: item.recipe.totalNutrients.PROCNT.unit,
            sugar: item.recipe.totalNutrients.SUGAR.quantity,
            sugarUnit: item.recipe.totalNutrients.SUGAR.unit,
            fiber: item.recipe.totalNutrients.FIBTG.quantity,
            fiberUnit: item.recipe.totalNutrients.FIBTG.unit,
          };
          return <Item key={i} setModalData={setModalData} data={data} />;
        })}
      </div>
    </div>
  );
}
