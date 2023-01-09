import React from "react";
import { Sprite, useApp } from "@pixi/react-pixi";
import MountainFadeIcon from "../../../assets/mountain_fade.png";

import { useAppState } from "../../../store";

const MountainFade = () => {
  const app = useApp();
  const { state } = useAppState();
  const { x: Kx, y: Ky } = state.settings.K;

  return (
    <Sprite
      image={MountainFadeIcon}
      anchor={{ x: 0, y: 0.5 }}
      width={app.renderer.screen.width * Kx}
      height={150}
      y={app.renderer.screen.height * 0.5 * Ky}
    />
  );
};

export default MountainFade;
