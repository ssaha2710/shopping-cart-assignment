import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from "./Context/context";
import ModalContext from "./Context/modalContext";
import CartCountContext from "./Context/cartCountContext";

ReactDOM.render(
  <React.StrictMode>
    <CartCountContext>
      <Context>
        <ModalContext>
          <App />
        </ModalContext>
      </Context>
    </CartCountContext>
  </React.StrictMode>,
  document.querySelector("#root")
);
