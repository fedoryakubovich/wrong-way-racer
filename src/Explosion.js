import React, { useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import { AnimatedSprite, useApp } from "@pixi/react-pixi";

import ExplosionSpritesheet from "./assets/explosion_spritesheet.avif";

const atlasData = {
  frames: {
    enemy1: {
      frame: { x: 0, y: 0, w: 32, h: 32 },
      sourceSize: { w: 32, h: 32 },
      spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 },
    },
    enemy2: {
      frame: { x: 32, y: 0, w: 32, h: 32 },
      sourceSize: { w: 32, h: 32 },
      spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 },
    },
  },
  meta: {
    image: "images/spritesheet.png",
    format: "RGBA8888",
    size: { w: 128, h: 32 },
    scale: 1,
  },
  animations: {
    enemy: ["enemy1", "enemy2"], //array of frames by name
  },
};

const Explosion = () => {
  const app = useApp();
  const baseTexture = new PIXI.BaseTexture(ExplosionSpritesheet);
  const frame = new PIXI.Texture(
    baseTexture,
    {
      x: 0,
      y: 0,
      width: 6720,
      height: 3245,
    },
    { width: 6720, height: 3245 },
    { x: 0, y: 0 },
    1
  );
  const frame1 = new PIXI.Texture(baseTexture);

  // 6720 × 3245

  return (
    <AnimatedSprite
      textures={[frame, frame1]}
      // images={[ExplosionSpritesheet, ExplosionSpritesheet]}
      isPlaying={true}
      initialFrame={0}
      // onComplete={() => console.log("@!#!@##!@")}
    />
  );
};

export default Explosion;
