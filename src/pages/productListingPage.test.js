import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductListingPage from "./productListingPage";
import { BrowserRouter } from "react-router-dom";

describe("Product Listing Page", () => {
  const MockProductListingPage = () => {
    return (
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    render(<MockProductListingPage />);
  });
  describe("rendering blocks", () => {
    it("should render all categories properly", async () => {
      const categoryElement = await screen.findByTestId("categories-0");
      expect(categoryElement).toBeInTheDocument();
    });
    it("render the products properly", async () => {
      const productElement = await screen.findByTestId("products-0");
      expect(productElement).toBeInTheDocument();
    });
    it("render the exact number of categories properly", async () => {
      const categoryElements = await screen.findAllByTestId(/categories/i);
      expect(categoryElements.length).toBe(5);
    });
    it("render the exact number of products properly", async () => {
      const productElements = await screen.findAllByTestId(/products/i);
      expect(productElements.length).toBe(25);
    });
  });

  describe("functionality", () => {
    it.todo("filter products properly");
    it.todo("add products to cart properly");
  });
});
