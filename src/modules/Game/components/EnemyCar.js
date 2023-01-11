import React, { forwardRef, useRef } from "react";
import { Sprite, useApp, useTick } from "@pixi/react-pixi";

import { APP_ACTIONS, useAppState } from "../../../store";
import { ICON_BY_POS } from "../constants";

const EnemyCar = forwardRef(
  ({ playerCarRef, pos, id, removeEnemy, positionRef }, enemyRef) => {
    const { state, dispatch } = useAppState();
    const { speed: gameSpeed } = state.settings;
    const app = useApp();
    const speedDiff = gameSpeed / 500;
    const speed = useRef(gameSpeed / 500);

    const image = ICON_BY_POS[pos];

    const destroy = () => {
      const enemyBounds = enemyRef.current.getBounds();

      if (enemyBounds.y > app.renderer.screen.height) {
        removeEnemy(id);
      }
    };

    useTick(() => {
      enemyRef.current.y += speed.current;

      if (pos === "left") {
        enemyRef.current.x -= (500 / 300) * speed.current;
      } else if (pos === "right") {
        enemyRef.current.x += (500 / 300) * speed.current;
      }

      if (enemyRef.current.scale.x <= 1 && enemyRef.current.scale.y <= 1) {
        enemyRef.current.scale.x += (1 / 300) * speed.current;
        enemyRef.current.scale.y += (1 / 300) * speed.current;
      }

      speed.current = Math.min(speed.current + speedDiff, gameSpeed);
      if (!state.game.isEnd) {
        checkEndGame();
      }
      destroy();
    });

    const handleCrash = () => {
      dispatch({ type: APP_ACTIONS.crashGame });
    };

    const checkEndGame = () => {
      const enemyBounds = enemyRef.current.getBounds();
      const playerBounds = playerCarRef.current.getBounds();

      if (
        enemyBounds.x < playerBounds.x + playerBounds.width &&
        enemyBounds.x + enemyBounds.width > playerBounds.x &&
        enemyBounds.y < playerBounds.y + playerBounds.height &&
        enemyBounds.y + enemyBounds.height > playerBounds.y &&
        positionRef.current === pos
      ) {
        handleCrash();
      }
    };

    return (
      <Sprite
        ref={enemyRef}
        image={image}
        anchor={{ x: 0.5, y: 0 }}
        scale={0.4 / 300}
        x={app.renderer.screen.width * 0.5 - 25}
        y={349}
        zIndex={10}
      />
    );
  }
);

export default React.memo(EnemyCar);
