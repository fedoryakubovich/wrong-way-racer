import { styled } from "@mui/material/styles";

const VerticalNotch = styled("section")(({ height = 10 }) => ({
  width: 0,
  height,
  borderLeft: "1px solid rgba(0, 0, 0, 0.5)",
  borderRight: "1px solid rgba(255, 255, 255, 0.5)",
}));

export default VerticalNotch;
