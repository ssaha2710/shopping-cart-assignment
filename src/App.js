import React, { useContext } from "react";
import Header from "./components/Header/header";
import ProductListingPage from "./pages/productListingPage";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { cartContext } from "./Context/context";
import { modalContext } from "./Context/modalContext";
import Modal from "./components/Modal/Modal";
import { cartCountContext } from "./Context/cartCountContext";
import Home from "./pages/home";

const App = () => {
  const { cart } = useContext(cartContext);
  const { openModal, setOpenModal } = useContext(modalContext);
  const { cartCount } = useContext(cartCountContext);

  return (
    <div className="App">
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          itemCount={cartCount}
          productDetails={cart}
        />
      )}
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {/* <Route exact path="/" element={<Register />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/products" element={<ProductListingPage />} />
          </Routes>
        </main>
        <footer>
          Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
