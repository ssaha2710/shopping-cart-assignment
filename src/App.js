import React from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from  "./components/header";
import ProductListingPage from "./pages/productListingPage";
import Register from "./pages/register";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <div className="App">
          <Route exact path="/" >
            {/* <Register /> */}
            <Home/>
          </Route>
          <Route exact path="/products">
            <ProductListingPage />
          </Route>
        </div>
    </BrowserRouter>
  );
};

export default App;