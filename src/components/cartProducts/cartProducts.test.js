import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserEvent from "@testing-library/user-event";
import cartProducts from "./cartProducts";
import { BrowserRouter } from "react-router-dom";
import cartProductsData from "./../../data/cartProducts";

describe("Cart Products Page", () => {
  const mockSetTotalPrice = jest.fn();
  const MockCartProducts = () => {
    return (
      <BrowserRouter>
        <cartProducts
          productDetails={cartProductsData}
          setTotalPrice={mockSetTotalPrice}
        />
      </BrowserRouter>
    );
  };

  let wrapper;
  beforeEach(() => {
    wrapper = render(<MockCartProducts />);
  });
  describe("renders all DOM elements in CartProducts Page", () => {
    it("should render img attribute", () => {
      expect(screen.queryAllByTestId("img"));
    });

    it("should render all items name", () => {
      expect(screen.queryAllByTestId("item-name"));
    });
    it("should render all increment buttons", () => {
      expect(screen.queryAllByTestId("increment-button"));
    });
    it("should render all decrement buttons", () => {
      expect(screen.queryAllByTestId("decrement-button"));
    });
    it("should render total Price", () => {
      expect(screen.queryAllByTestId("total-price"));
    });
    it("should render all quantity", () => {
      expect(screen.queryAllByTestId("item-quantity"));
    });
  });

  describe("functionality", () => {
    it("increment button should work fine", () => {
      UserEvent.click(screen.queryByTestId("increment-button-1"));
      // // const elements = screen.getByTestId("item-quantity-1");
      expect(screen.queryByTestId("item-quantity-1"));
    });
    it.todo("decrement button should work fine");
    it.todo("component should be removed when count becomes 0");
  });
});
