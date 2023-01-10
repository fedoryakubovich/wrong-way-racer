import React from "react";
import { StyledSlider } from "./styled";

const Slider = ({ handleChange, min, max, marks, value }) => {
  return (
    <StyledSlider
      aria-label="Speed"
      value={value}
      onChange={handleChange}
      marks={marks}
      min={min}
      max={max}
      getAriaValueText={(value) => `${value}`}
    />
  );
};

export default Slider;
