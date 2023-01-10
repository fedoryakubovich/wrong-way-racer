import React from "react";
import { Sprite, useApp } from "@pixi/react-pixi";
import MountainFadeIcon from "../../../assets/images/mountain_fade.png";

const MountainFade = () => {
  const app = useApp();

  return (
    <Sprite
      image={MountainFadeIcon}
      anchor={{ x: 0, y: 0.5 }}
      width={app.renderer.screen.width}
      height={150}
      y={app.renderer.screen.height * 0.5}
    />
  );
};

export default MountainFade;
