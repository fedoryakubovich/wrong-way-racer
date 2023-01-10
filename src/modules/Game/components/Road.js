import { Sprite, useApp } from "@pixi/react-pixi";
import React from "react";
import RoadIcon from "../../../assets/images/road.png";

const Road = () => {
  const app = useApp();

  return (
    <Sprite
      image={RoadIcon}
      anchor={{ x: 0, y: 1 }}
      x={-(app.renderer.screen.width * 0.2)}
      y={app.renderer.screen.height + 5}
      width={app.renderer.screen.width * 1.4}
      height={300}
    />
  );
};

export default Road;
