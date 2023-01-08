import MuiAccordion from "@mui/material/Accordion";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

export const StyledRecordsContainer = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    background: "rgba(16, 12, 74, 0.2)",
    boxShadow: "inset 0px 4px 63px rgba(255, 255, 255, 0.25)",
    borderRadius: 12,
    overflow: "hidden",
    height: 285,
  },
}));

export const StyledRecordsAccordion = styled(MuiAccordion)(() => ({
  "&.MuiAccordion-root": {
    background: "transparent",
    overflow: "hidden",
    boxShadow: "none",
    borderBottom: "1px solid #191650",
    width: "100%",
    borderRadius: 0,

    "&.Mui-expanded": {
      margin: 0,

      "& .MuiAccordionSummary-root": {
        minHeight: 0,

        background: "rgba(151, 71, 255, 0.1)",
        borderBottom: "1px solid rgba(130, 75, 244, 0.08)",
      },

      "& .MuiAccordionSummary-content": {
        margin: 0,

        "& .MuiTypography-root.username": {
          color: "#fffefe",
          textShadow: "0px 0px 14px #ffffff",
        },
      },
    },
  },
  "& .MuiAccordionSummary-root": {
    paddingRight: 0,
    minHeight: 38,
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    paddingRight: 0,
  },
  "& .MuiAccordionDetails-root": {
    padding: "10.5px 16px",
  },
}));

export const StyledRecordsUsername = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: "19px",
    color: "#FFFEFE",
  },
}));

export const StyledStatsPrimaryText = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#fffbfb",
    fontWeight: 800,
    fontSize: 20,
    lineHeight: "20px",
    mt: "2px",
  },
}));

export const StyledStatsTitle = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "rgba(255, 251, 251, 0.7)",
    fontWeight: 400,
    fontSize: 9,
    lineHeight: "9px",
  },
}));

export const StyledRecordsHeader = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    height: 90,
    background:
      "radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(255, 255, 255, 0.19) 0%, rgba(24, 20, 53, 0.26) 71.87%), #9747FF",
    boxShadow: "inset 0px 4px 12px #FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "11.5px 16px 11.5px 24px",
  },
}));

export const StyledHeaderBestRecord = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 900,
    fontSize: 40,
    lineHeight: "36px",
  },
}));

export const StyledHeaderBestRecordTitle = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "12px",
    marginTop: "4px",
  },
}));

export const StyledHeaderRecordPosition = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 900,
    fontSize: 14,
    lineHeight: "22px",
  },
}));

export const StyledHeaderRecordPositionFrom = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 9,
    lineHeight: "9px",
    marginTop: "2px",
  },
}));

export const StyledRecordsDetailsItem = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    fontWeight: 600,
    fontSize: 10,
    lineHeight: "16px",
    color: "#fffefe99",

    "& .marked": {
      color: "#fffefe",
    },
  },
}));
