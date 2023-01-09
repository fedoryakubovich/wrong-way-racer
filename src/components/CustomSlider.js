import React from "react";

import Slider from "@mui/material/Slider";
import VerticalNotch from "./VerticalNotch";
import { styled } from "@mui/material/styles";

const SliderMark = ({ value }) => {
  return (
    <>
      <VerticalNotch />
      <div>{value}</div>
    </>
  );
};

const BootstrapSlider = styled(Slider)(() => ({
  "&.MuiSlider-root": {
    maxWidth: 286,
  },
  "& .MuiSlider-rail": {
    background:
      "radial-gradient(101.35% 101.35% at 50% 22.11%, #221531 0%, #161630 71.87%), #131444",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.28) 100%)",

    borderRadius: 33,
    height: 21.01,
    opacity: 1,
  },
  "& .MuiSlider-track": {
    background:
      "linear-gradient(180deg, #FEBE00 -7.69%, #FF6E01 81.99%, #FF0F00 127.88%)",
    borderRadius: 33,
    height: 20,
    border: "1px solid #160842",
  },
  "& .MuiSlider-thumb": {
    background:
      "linear-gradient(166.87deg, #995AFF -1.68%, #864CFE 42.32%, #6C3AFC 100.79%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: 24,
    width: 24,
    border: "1px solid #000000",
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
  "& .MuiSlider-markLabel": {
    top: 26,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    left: "calc(264px / 6)",
  },
}));

function valuetext(value) {
  return `${value}`;
}

const marks = [
  { value: 1, label: <SliderMark value={1} /> },
  { value: 2, label: <SliderMark value={2} /> },
  { value: 3, label: <SliderMark value={3} /> },
  { value: 4, label: <SliderMark value={4} /> },
  { value: 5, label: <SliderMark value={5} /> },
  { value: 6, label: <SliderMark value={6} /> },
];

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BootstrapSlider
      aria-label="Speed"
      value={value}
      onChange={handleChange}
      marks={marks}
      min={1}
      max={6}
      getAriaValueText={valuetext}
    >
      <div>ASDASD</div>
    </BootstrapSlider>
  );
}
