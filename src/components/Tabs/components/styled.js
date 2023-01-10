import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import styled from "@mui/material/styles/styled";

export const StyledMuiTabs = styled(MuiTabs)(() => ({
  "&.MuiTabs-root": {
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "20px",

    "& .MuiTabs-indicator": {
      height: 4,
      background: "#ffffff",
      borderRadius: 4,
    },
  },
}));

export const StyledMuiTab = styled(MuiTab)(() => ({
  "&.MuiTab-root": {
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "20px",

    "&.Mui-selected": {
      color: "#ffffff",
      fontWeight: 900,
      fontSize: 16,
      lineHeight: "20px",
      textShadow:
        "0px 0px 10px rgb(255 255 255 / 25%), 0px 2px 0px rgb(0 0 0 / 25%), -1px 0px 0px #000000, 1px 0px 0px #000000, 0px -1px 0px #000000, 0px 1px 0px #000000",
    },
  },
}));
