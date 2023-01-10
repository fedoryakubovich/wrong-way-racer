import React, { useCallback } from "react";

import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Unstable_Grid2";
import Switch from "../Switch";
import Slider from "../Slider";
import CustomInput from "../Input";
import ModalTitle from "./ModalTitle";
import StyledModal from "./Modal.styled";
import { APP_ACTIONS, useAppState } from "../../store";

const Modal = () => {
  const { state, dispatch } = useAppState();

  const handleClose = useCallback(() => {
    dispatch({ type: APP_ACTIONS.closeModal });
  });

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
            <Slider />
          </Grid>

          <Grid xs={5}>
            <span>Your ID SHow public</span>
          </Grid>
          <Grid xs={7}>
            <Switch />
          </Grid>
        </Grid>
      </DialogContent>
    </StyledModal>
  );
};

export default Modal;
