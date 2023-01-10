import React, { useCallback } from "react";
import { MARKS } from "../constants";
import Slider from "../components/Slider";

const SliderContainer = () => {
  const [value, setValue] = React.useState(3);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  });

  return (
    <Slider
      min={1}
      max={6}
      marks={MARKS}
      handleChange={handleChange}
      value={value}
    />
  );
};

export default SliderContainer;
