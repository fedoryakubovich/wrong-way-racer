import React, { useCallback } from "react";

import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Unstable_Grid2";
import Switch from "../Switch";
import Slider from "../Slider";
import CustomInput from "../Input";
import ModalTitle from "./ModalTitle";
import { StyledItemTitle, StyledModal } from "./styled";
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
        <Grid container alignItems="center" rowSpacing={{ xs: 1, md: 3 }}>
          <Grid md={5} xs={12}>
            <StyledItemTitle>Enter Your Name</StyledItemTitle>
          </Grid>
          <Grid md={7} xs={12}>
            <CustomInput />
          </Grid>

          <Grid md={5} xs={12}>
            <StyledItemTitle>Speed Of the Game</StyledItemTitle>
          </Grid>
          <Grid md={7} xs={12}>
            <Slider />
          </Grid>

          <Grid md={5} xs={7}>
            <StyledItemTitle>Your ID SHow public</StyledItemTitle>
          </Grid>
          <Grid
            md={7}
            xs={5}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "end",
              },
            })}
          >
            <Switch />
          </Grid>
        </Grid>
      </DialogContent>
    </StyledModal>
  );
};

export default Modal;
