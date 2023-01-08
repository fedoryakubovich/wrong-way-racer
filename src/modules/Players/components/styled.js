import MuiBox from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import MuiPopover from "@mui/material/Popover";
import MuiDivider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

export const StyledSettingsButtonWrapper = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    margin: "11px 24px 3px 24px",
    border: "2px solid #000000",
    borderRadius: "4px",
  },
}));

export const StyledSettingsButton = styled(MuiButton)(() => ({
  "&.MuiButton-root": {
    background:
      "linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)",
    borderRadius: 4,
    gap: 10,
    height: 36,
    width: "100%",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "22px",
    color: "#ffffff",
    textTransform: "capitalize",
    border: "3px solid #a27af7",
  },
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  "&.MuiListItemButton-root": {
    "&.Mui-focusVisible": {
      background:
        "linear-gradient(90deg, #FFFB02 -22.86%, #FFA900 52.56%, #FE6B00 126.43%)",
      boxShadow: "0px 4px 40px #FFB446",
      borderRadius: 2,
      marginLeft: 24,
      marginRight: 24,
      height: 52,
      padding: 8,

      "& .MuiTypography-root": {
        color: "#131444",
        fontWeight: 700,
      },

      "& .MuiAvatar-root": {
        width: 36,
        height: 36,
      },
    },
  },
}));

export const StyledPlayersWrapper = styled(MuiBox)(() => ({
  "&.MuiBox-root": {
    background: "rgba(16, 12, 74, 1)",
    boxShadow: "inset 3px 4px 63px rgba(255, 255, 255, 0.25)",
    borderRadius: 12,
    overflow: "hidden",
    height: 285,
  },
}));

export const StyledPopover = styled(MuiPopover)(() => ({
  "& .MuiPopover-paper": {
    background: "rgba(182, 178, 243, 0.2)",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 37px #834AF4",
    backdropFilter: "blur(22px)",
    borderRadius: 4,
    width: 328,
  },
}));

export const StyledMenuDivider = styled(MuiDivider)(() => ({
  "&.MuiDivider-root": {
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 48.44%, rgba(255, 255, 255, 0) 100%)",
    height: "1px",
    border: "none",
  },
}));
