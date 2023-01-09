import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import CloseIcon from "../assets/icons/Close.svg";
import CustomSwitch from "./CustomSwitch";
import CustomSlider from "./CustomSlider";
import CustomInput from "./CustomInput";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 37px #573DC6, inset 0px 4px 30px rgba(255, 255, 255, 0.25)",
    background: "#9377DF",
    borderRadius: 24,
    maxWidth: 513,
    paddingBottom: 54,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    padding: "0 20px",
    marginTop: 66,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ p: 0 }}>
      {children}

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ position: "absolute", right: 10, top: 10 }}
      >
        <img src={CloseIcon} alt="close icon" />
      </IconButton>
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle onClose={handleClose} />

        <DialogContent>
          <Grid container alignItems="center" rowSpacing={3}>
            <Grid xs={5}>
              <span>Enter Your Name</span>
            </Grid>
            <Grid xs={7}>
              <CustomInput />
            </Grid>

            <Grid xs={5}>
              <span>Speed Of the Game</span>
            </Grid>
            <Grid xs={7}>
              <CustomSlider />
            </Grid>

            <Grid xs={5}>
              <span>Your ID SHow public</span>
            </Grid>
            <Grid xs={7}>
              <CustomSwitch />
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
