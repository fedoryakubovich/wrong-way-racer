import React, { useEffect, useRef } from "react";
import { useApp } from "@pixi/react-pixi";

import Game from "../components/Game";
import { useAppState } from "../../../store";

const GameContainer = () => {
  const app = useApp();
  const { state } = useAppState();
  const playerCarRef = useRef(null);

  useEffect(() => {
    if (state.modal.isOpen) {
      app.ticker.stop();
    } else {
      app.ticker.start();
    }
  }, [state]);

  return <Game playerCarRef={playerCarRef} />;
};

export default GameContainer;
