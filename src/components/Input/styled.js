import MuiOutlinedInput from "@mui/material/OutlinedInput";
import styled from "@mui/material/styles/styled";

export const StyledInput = styled(MuiOutlinedInput)(() => ({
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

export const StyledInputWrapper = styled("section")(() => ({
  background:
    "linear-gradient(Canvas, Canvas) padding-box, linear-gradient(#1d1257, #e2d7fc) border-box",
  backgroundClip: "padding-box, border-box",
  backgroundOrigin: "border-box",
  border: "2px solid transparent",
  borderRadius: 6,
  width: "100%",
}));
