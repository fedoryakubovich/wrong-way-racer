import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const StyledModal = styled(Dialog)(() => ({
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
  },
}));

export default StyledModal;
