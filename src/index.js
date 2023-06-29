import React from "react";
import ReactDOM from "react-dom"; // позволяет вмонтировать наш компонент в приложение
import App from "./App";

ReactDOM.render(
  <App />,
  document.getElementById("root") // вторым параметром указываем куда на странице это монтировать
);
