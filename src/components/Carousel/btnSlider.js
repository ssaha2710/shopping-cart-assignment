import React from "react";
import "./slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? "NEXT" : "PREV"}
    </button>
  );
}
