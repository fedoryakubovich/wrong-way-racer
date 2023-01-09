import * as React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "../../assets/icons/Close.svg";

const ModalTitle = (props) => {
  const { children, onClose } = props;

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
};

export default ModalTitle;
