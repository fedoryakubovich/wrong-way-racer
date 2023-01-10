import React from "react";
import { Container, AnimatedSprite } from "@pixi/react-pixi";
import { Texture, BaseTexture } from "pixi.js";

import ExplosionSpritesheet from "../../../assets/images/explosion_spritesheet.avif";
import { EXPLOSION_SPRITESHEETS } from "../constants";

const Explosion = () => {
  const baseTexture = new BaseTexture(ExplosionSpritesheet);

  const textures = EXPLOSION_SPRITESHEETS.map((spritesheet) => {
    return new Texture(
      baseTexture,
      spritesheet.frame,
      spritesheet.orig,
      spritesheet.trim
    );
  });

  return (
    <Container>
      <AnimatedSprite
        animationSpeed={0.7}
        textures={textures}
        loop={false}
        gotoAndStop={() => {}}
        anchor={0.5}
        onComplete={() => {
          console.log("finish");
        }}
      />
    </Container>
  );
};

export default Explosion;
