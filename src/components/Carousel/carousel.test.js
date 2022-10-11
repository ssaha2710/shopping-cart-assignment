import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./carousel";
import { BrowserRouter } from "react-router-dom";

describe("carousel", () => {
  const MockCarousel = () => {
    return (
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    render(<MockCarousel />);
  });
  describe("rendering blocks", () => {
    it("should render all carousel properly", async () => {
      const sliderElement = await screen.findByTestId("slider-0");
      expect(sliderElement).toBeInTheDocument();
    });
    it("render the container dots properly", async () => {
      const containerDotElement = await screen.findByTestId("container-dot-0");
      expect(containerDotElement).toBeInTheDocument();
    });
    it("render the exact number of categories properly", async () => {
      const sliderElements = await screen.findAllByTestId(/slider-/i);
      expect(sliderElements.length).toBe(5);
    });
    it("render the exact number of products properly", async () => {
      const containerDotElements = await screen.findAllByTestId(
        /container-dot/i
      );
      expect(containerDotElements.length).toBe(5);
    });
  });

  describe("functionality", () => {
    it.todo("prev /next button works fine ");
    it.todo("prev / next containerer dots works fine");
  });
});
