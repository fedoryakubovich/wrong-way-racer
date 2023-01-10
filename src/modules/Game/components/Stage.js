import React from "react";
import { Stage as PixiStage } from "@pixi/react-pixi";
import { AppContext } from "../../../store";
import ContextBridge from "../context/ContextBridge";

const Stage = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={AppContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};

export default Stage;
