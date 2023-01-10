import styled from "@mui/material/styles/styled";
import MuiDialog from "@mui/material/Dialog";
import MuiTypography from "@mui/material/Typography";

export const StyledModal = styled(MuiDialog)(() => ({
  "& .MuiDialog-paper": {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 37px #573DC6, inset 0px 4px 30px rgba(255, 255, 255, 0.25)",
    background: "#9377DF",
    borderRadius: 24,
    maxWidth: 513,
    paddingBottom: 54,
  },
  "& .MuiDialogContent-root": {
    padding: "0 20px",
    marginTop: 66,
    overflow: "hidden",
  },
}));

export const StyledItemTitle = styled(MuiTypography)(() => ({
  "&.MuiTypography-root": {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: "21px",
    color: "#ffffff",
  },
}));

export default StyledModal;
