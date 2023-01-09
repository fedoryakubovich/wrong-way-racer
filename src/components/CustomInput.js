import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const StyledInput = styled(OutlinedInput)(() => ({
  "&.MuiOutlinedInput-root": {
    height: 40,
    backgroundColor: "#180C3C",
    padding: "0 16px",
    borderRadius: 4,
    width: "100%",
  },
  "& .MuiOutlinedInput-input": {
    color: "#ffffff",
    padding: 0,

    "&::placeholder": {
      color: "#ffffff",
      opacity: 1,
    },
  },
}));

const StyledInputWrapper = styled("section")(() => ({
  background:
    "linear-gradient(Canvas, Canvas) padding-box, linear-gradient(#1d1257, #e2d7fc) border-box",
  backgroundClip: "padding-box, border-box",
  backgroundOrigin: "border-box",
  border: "2px solid transparent",
  borderRadius: 6,
  width: "100%",
}));

const CustomInput = ({ placeholder = "your Name" }) => {
  return (
    <StyledInputWrapper>
      <StyledInput placeholder={placeholder} />
    </StyledInputWrapper>
  );
};

export default CustomInput;
