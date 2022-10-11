import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "./register";
import { BrowserRouter } from "react-router-dom";

describe("register page", () => {
  const MockRegister = () => {
    return (
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  };
  describe("renders all fields properly", () => {
    it("has First Name Placeholder Text in the Register form", () => {
      render(<Register />);
      const linkElement = screen.getByPlaceholderText(/First Name/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("has Last Name Placeholder Text in the Register form", () => {
      render(<Register />);
      const linkElement = screen.getByPlaceholderText(/Last Name/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("has Email Placeholder Text in the Register form", () => {
      render(<Register />);
      const linkElement = screen.getByPlaceholderText(/Email/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("has Password Placeholder Text in the Register form", () => {
      render(<Register />);
      const linkElement = screen.getByPlaceholderText("Password");
      expect(linkElement).toBeInTheDocument();
    });
    it("has Confirm Password Placeholder Text in the Register form", () => {
      render(<Register />);
      const linkElement = screen.getByPlaceholderText("Confirm Password");
      expect(linkElement).toBeInTheDocument();
    });
    it("has render the heading in the document ", () => {
      render(<Register />);
      const linkElement = screen.getByRole("heading");
      expect(linkElement).toBeInTheDocument();
    });
    it("has render the header description in the document ", () => {
      render(<Register />);
      const linkElement = screen.getByText(
        "We do not share your personal details with anyone"
      );
      expect(linkElement).toBeInTheDocument();
    });
    it("has render the button in the document ", () => {
      render(<Register />);
      const linkElement = screen.getByRole("button", { name: /Signup/i });
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("form field error and submission", () => {
    beforeEach(() => {
      render(<MockRegister />);
    });
    it("should have error message as all fields mandatory when one or more fields are empty", () => {
      fireEvent.change(screen.getByPlaceholderText("First Name"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByPlaceholderText("Last Name"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
        target: { value: "" },
      });
      const registerButton = screen.getByRole("button", { name: "Signup" });
      fireEvent.click(registerButton);
      expect(screen.getByTestId("alert"));
    });
    it("should have not have error message as all fields are filled", () => {
      fireEvent.change(screen.getByPlaceholderText("First Name"), {
        target: { value: "Saha" },
      });
      fireEvent.change(screen.getByPlaceholderText("Last Name"), {
        target: { value: "Sourav" },
      });
      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "abc@gmail.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "Need123" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
        target: { value: "Need123" },
      });
      const registerButton = screen.getByRole("button", { name: "Signup" });
      fireEvent.click(registerButton);
      expect(screen.getByTestId("slider"));
    });
  });
});
