import { styled } from "@mui/material/styles";

export const StyledMainLayout = styled("section")(() => ({
  background:
    "linear-gradient(234.36deg, rgba(12, 12, 76, 0.5) 2.69%, rgba(6, 6, 6, 0) 43.67%), radial-gradient(168.67% 168.67% at 48.89% 54.41%, rgba(78, 32, 130, 0.5) 0%, rgba(12, 12, 76, 0.5) 71.88%), #080817",
}));

export const StyledContent = styled("section")(() => ({
  maxWidth: 1120,
  margin: "0 auto",
  paddingTop: 42,
  paddingLeft: 12,
  paddingRight: 12,
}));
