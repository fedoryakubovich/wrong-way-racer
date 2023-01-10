import React, { useState } from "react";
import { Container, AnimatedSprite } from "@pixi/react-pixi";
import { Texture, BaseTexture } from "pixi.js";

import ExplosionSpritesheet from "../../../assets/images/explosion_spritesheet.avif";
import { EXPLOSION_SPRITESHEETS } from "../constants";
import { useAppState } from "../../../store";

const Explosion = ({ playerCarRef }) => {
  const { state } = useAppState();
  const baseTexture = new BaseTexture(ExplosionSpritesheet);
  const playerCar = playerCarRef?.current;
  const playerBounds = playerCar?.getBounds();
  const [isComplete, setIsComplete] = useState(false);

  const textures = EXPLOSION_SPRITESHEETS.map((spritesheet) => {
    return new Texture(
      baseTexture,
      spritesheet.frame,
      spritesheet.orig,
      spritesheet.trim
    );
  });

  return (
    !isComplete &&
    state.game.isEnd && (
      <Container
        x={playerBounds.x}
        y={playerBounds.y - playerBounds.height - 50}
        zIndex={30}
      >
        <AnimatedSprite
          animationSpeed={0.7}
          textures={textures}
          loop={false}
          gotoAndStop={() => {}}
          anchor={{ x: 0.5, y: 1 }}
          onComplete={() => {
            setIsComplete(true);
          }}
        />
      </Container>
    )
  );
};

export default Explosion;
