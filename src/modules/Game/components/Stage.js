import React from "react";
import { Stage as PixiStage, Container } from "@pixi/react-pixi";

import Game from "../containers/GameContainer";
import ContextBridge from "../context/ContextBridge";
import { AppContext } from "../../../store";

const Stage = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={AppContext}
      render={(children) => (
        <PixiStage
          width={1120}
          height={649}
          options={{ autoDensity: true }}
          {...props}
        >
          {children}
        </PixiStage>
      )}
    >
      <Container sortableChildren>
        <Game>{children}</Game>
      </Container>
    </ContextBridge>
  );
};

export default Stage;
