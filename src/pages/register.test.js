import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "./register";

it("renders register", () => {
  render(<Register />);
  const linkElement = screen.getByPlaceholderText(/FirstName/i);
});
