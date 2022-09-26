import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context/context";
import ModalContext from "./Context/modalContext";
import CartCountContext from "./Context/cartCountContext";

ReactDOM.render(
  <CartCountContext>
    <Context>
      <ModalContext>
        <App />
      </ModalContext>
    </Context>
  </CartCountContext>,
  document.querySelector("#root")
);
