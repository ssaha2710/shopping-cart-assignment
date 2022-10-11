import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Category from "./category";
import { BrowserRouter } from "react-router-dom";

describe("category page", () => {
  const MockCategory = () => {
    return (
      <BrowserRouter>
        <Category />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    render(<MockCategory />);
  });
  describe("rendering DOM elements properly", () => {
    it("should render all categoryElement properly", async () => {
      const categoryElement = await screen.findByTestId("category-item-0");
      expect(categoryElement).toBeInTheDocument();
    });
    it("render the exact number of categories properly", async () => {
      const categoryElements = await screen.findAllByTestId(/category-item-/i);
      expect(categoryElements.length).toBe(5);
    });
  });

  describe("functionality", () => {
    it.todo("each item should navigate to product listing page");
  });
});
