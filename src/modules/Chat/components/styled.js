import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledJoinedMessage = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ff3eec",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: "21px",
    marginBottom: 4,
  },
}));

export const StyledUsername = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: "21px",
  },
}));

export const StyledMessage = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "18px",
    marginBottom: 4,
  },
}));

export const StyledChatBody = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    background: "#180C3C",
    height: 215,
    overflowY: "scroll",
    padding: 16,
  },
}));

export const StyledChatBodyBorder = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    background:
      "linear-gradient(Canvas, Canvas) padding-box, linear-gradient(#1d1257, #e2d7fc) border-box",
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "border-box",
    border: "2px solid transparent",
    borderRadius: "16px",
    overflow: "hidden",
  },
}));

export const StyledSendButton = styled(MuiButton)((theme) => ({
  "&.MuiButton-root": {
    background:
      "radial-gradient(47.48% 60% at 50.3% 100%, rgba(255, 255, 255, 0.65) 0%, rgba(178, 89, 248, 0.77) 40.62%, rgba(137, 89, 248, 0.01) 100%), linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)",
    padding: "10px 56px",
    textShadow:
      "0px 0px 1px rgba(0, 0, 0, 0.25), 0px -2px 35px rgba(0, 0, 0, 0.45)",
    color: "#fffafa",
    fontSize: 18,
    fontWeight: 800,
    lineHeight: "20px",
    borderRadius: 4,
    height: 40,
    maxWidth: 155,
    textTransform: "capitalize",

    "@media (max-width: 900px)": {
      minWidth: 32,
      height: 30,
      padding: 0,
      position: "absolute",
      transform: "translateX(-100%)",
      right: 10,
    },
  },
}));
