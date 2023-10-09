import React from "react";
import ReactDOM from "react-dom"; // позволяет вмонтировать наш компонент в приложение
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById("root") // вторым параметром указываем куда на странице это монтировать
);

// <Provider store={store}>
// </Provider>,

// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";

// const defaultState = {
//   cash: 50,
// };

// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "ADD_CASH":
//       return { ...state, cash: state.cash + action.payload };
//     case "GET_CASH":
//       return { ...state, cash: state.cash - action.payload };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
