import React from "react";
import { Sprite, useApp } from "@pixi/react-pixi";

import SkyIcon from "../../../assets/images/sky.png";

const Sky = () => {
  const app = useApp();

  return (
    <Sprite
      image={SkyIcon}
      x={0}
      y={-80}
      width={app.renderer.screen.width}
      height={app.renderer.screen.height}
    />
  );
};

export default Sky;
