import React, { useCallback, useEffect, useRef, useState } from "react";
import { Sprite, useApp, useTick } from "@pixi/react-pixi";
import { v4 as uuidv4 } from "uuid";

import { socket, SOCKET_EVENTS } from "../../../utils";
import { useAppState } from "../../../store";
import { ICON_BY_POS } from "../constants";

const EnemyCar = React.memo(({ playerCarRef, pos, id, removeEnemy }) => {
  const { state } = useAppState();
  const { speed: gameSpeed } = state.settings;
  const enemyRef = useRef(null);
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
    checkEndGame();
    destroy();
  });

  const checkEndGame = () => {
    const enemyBounds = enemyRef.current.getBounds();
    const playerBounds = playerCarRef.current.getBounds();

    if (
      enemyBounds.x < playerBounds.x + playerBounds.width &&
      enemyBounds.x + enemyBounds.width > playerBounds.x &&
      enemyBounds.y < playerBounds.y + playerBounds.height &&
      enemyBounds.y + enemyBounds.height > playerBounds.y
    ) {
      console.log("lost");
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
});

const EnemyCarContainer = ({ playerCarRef }) => {
  const [enemys, setEnemys] = useState({});

  useEffect(() => {
    socket.on(SOCKET_EVENTS.newEnemy, (data) => {
      const newId = uuidv4();
      setEnemys((currentState) => ({
        ...currentState,
        [newId]: { pos: data, id: newId },
      }));
    });

    return () => {
      socket.off(SOCKET_EVENTS.newEnemy);
    };
  }, []);

  const removeEnemy = useCallback((id) => {
    setEnemys((currentState) => {
      delete currentState[id];

      return currentState;
    });
  }, []);

  return (
    <>
      {Object.keys(enemys).map((key) => {
        const { pos, id } = enemys[key];

        return (
          <EnemyCar
            key={id}
            playerCarRef={playerCarRef}
            pos={pos}
            id={id}
            removeEnemy={removeEnemy}
          />
        );
      })}
    </>
  );
};

export default EnemyCarContainer;
