import React, { useState } from "react";
import ComponentWithClass from "./components/ComponentWithClass";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <ComponentWithClass />
    </div>
  );
}

// import { useDispatch, useSelector } from "react-redux";

// const dispatch = useDispatch();
// const cash = useSelector((state) => state.cash);

// const addCash = (cash) => {
//   dispatch({type:"ADD_CASH", payload: cash})
// }

// const getCash = (cash) => {
//   dispatch({type:"GET_CASH", payload: cash})
// }

// return (
//   <div>
//     <div style={{ fontSize: "3rem" }}>{cash}</div>
//     <div style={{ display: "flex" }}>
//       <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
//       <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
//     </div>
//   </div>
// );

// {/* <BilateralBinding/> */}
// {/* <IncrDecr/> */}
// {/* <ClassCounter/> */}

// import IncrDecr from "./components/IncrDecr";
// import BilateralBinding from "./components/BilateralBinding";
// import ClassCounter from "./components/ClassCounter";
