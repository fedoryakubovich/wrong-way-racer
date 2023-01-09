import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Unstable_Grid2";

import CustomSwitch from "../CustomSwitch";
import CustomSlider from "../CustomSlider";
import CustomInput from "../CustomInput";
import ModalTitle from "./ModalTitle";
import StyledModal from "./Modal.styled";
import { APP_ACTIONS, useAppState } from "../../store";

const Modal = () => {
  const { state, dispatch } = useAppState();

  console.log({ state });

  const handleClose = () => {
    dispatch({ type: APP_ACTIONS.closeModal });
  };

  return (
    <StyledModal onClose={handleClose} open={state.modal.isOpen}>
      <ModalTitle onClose={handleClose} />

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
    </StyledModal>
  );
};

export default Modal;
