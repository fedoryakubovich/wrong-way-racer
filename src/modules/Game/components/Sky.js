import React from "react";
import { Sprite, useApp } from "@pixi/react-pixi";
import SkyIcon from "../../../assets/sky.png";
import { useAppState } from "../../../store";

const Sky = () => {
  const app = useApp();
  const { state } = useAppState();
  const { x: Kx, y: Ky } = state.settings.K;

  return (
    <Sprite
      image={SkyIcon}
      x={0 * Kx}
      y={-80 * Ky}
      width={app.renderer.screen.width * Kx}
      height={app.renderer.screen.height * Ky}
    />
  );
};

export default Sky;
