import React from "react";
import { styled } from "@mui/material/styles";

import Switch from "@mui/material/Switch";

const StyledSwitch = styled(Switch)(() => ({
  "&.MuiSwitch-root": {
    width: 81,
    height: 30,
    padding: 0,
    boxSizing: "border-box",
    border: "1px solid #160842",
    borderRadius: 6,
  },
  ".MuiSwitch-switchBase": {
    padding: 0,
    height: "100%",

    "&.Mui-checked": {
      transform: "translateX(40px)",

      "& + .MuiSwitch-track": {
        color: "#000000",
        background:
          "linear-gradient(180deg, #FEBE00 -7.69%, #FF6E01 81.99%, #FF0F00 127.88%)",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        borderLeft: "1px solid #160842",
        borderRight: "none",

        borderRadius: "0 5px 5px 0",
        border: "1px solid #b087f5",
        borderLeftColor: "#160842",
      },
    },
  },
  "& .MuiSwitch-track": {
    display: "flex",
    alignItems: "center",
    borderRadius: 0,
    background:
      "radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(255, 255, 255, 0.19) 0%, rgba(24, 20, 53, 0.26) 71.87%), #160B2F",
    opacity: 1,
    color: "#ffffff",
    textShadow:
      "0px 0px 1px rgba(0, 0, 0, 0.25), 0px -2px 35px rgba(0, 0, 0, 0.45)",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: 20,

    "&:before, &:after": {
      position: "absolute",
    },
    "&:before": {
      content: '"on"',
      left: 11,
    },
    "&:after": {
      content: '"off"',
      right: 11,
    },
  },
  "& .MuiSwitch-thumb": {
    width: 37,
    height: 26,
    background: `linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 1) 127.88%) `,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px 0 0 5px",
    border: "1px solid #b087f5",
    borderRightColor: "#160842",

    "&:before": {
      width: 12,
      height: 14,
      content: '" "',
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      background:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjAuNSIgeTE9IjIuMTg1NTdlLTA4IiB4Mj0iMC40OTk5OTkiIHkyPSIxNCIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iMS41IiB5MT0iMi4xODU1N2UtMDgiIHgyPSIxLjUiIHkyPSIxNCIgc3Ryb2tlPSIjQzJBNkZGIi8+CjxsaW5lIHgxPSI1LjUiIHkxPSIyLjE4NTU3ZS0wOCIgeDI9IjUuNSIgeTI9IjE0IiBzdHJva2U9ImJsYWNrIi8+CjxsaW5lIHgxPSI2LjUiIHkxPSIyLjE4NTU3ZS0wOCIgeDI9IjYuNSIgeTI9IjE0IiBzdHJva2U9IiNDMkE2RkYiLz4KPGxpbmUgeDE9IjEwLjUiIHkxPSIyLjE4NTU3ZS0wOCIgeDI9IjEwLjUiIHkyPSIxNCIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iMTEuNSIgeTE9IjIuMTg1NTdlLTA4IiB4Mj0iMTEuNSIgeTI9IjE0IiBzdHJva2U9IiNDMkE2RkYiLz4KPC9zdmc+Cg==) no-repeat",
    },
  },
}));

const CustomSwitch = () => {
  return <StyledSwitch />;
};

export default CustomSwitch;
