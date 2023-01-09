import React from "react";

import { Sprite, useApp } from "@pixi/react-pixi";
import RoadIcon from "../../../assets/road.png";
import { useAppState } from "../../../store";

const Road = () => {
  const app = useApp();
  const { state } = useAppState();
  const { x: Kx, y: Ky } = state.settings.K;

  return (
    <Sprite
      image={RoadIcon}
      anchor={{ x: 0, y: 1 }}
      x={-(app.renderer.screen.width * 0.2) * Kx}
      y={(app.renderer.screen.height + 5) * Ky}
      width={app.renderer.screen.width * 1.4 * Kx}
      height={300 * Ky}
    />
  );
};

export default Road;
