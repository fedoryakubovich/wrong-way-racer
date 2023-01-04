import React, { useRef } from "react";
import { Container, Sprite, useApp, useTick } from "@pixi/react-pixi";

import MountainRight from "../../assets/mountain_right.png";
import SideroadRight from "../../assets/sideroad_right.png";

const gameSpeed = 1;
const INITIAL_SCALE = 0.01;
const MAX_SCALE = 0.3;
const CONTAINER_HEIGHT = 300;

const RightSide = ({ destroy }) => {
  const app = useApp();
  const speedDiff = gameSpeed / CONTAINER_HEIGHT;
  const speed = useRef(speedDiff);

  const mountainRightRef = useRef(null);
  const sideroadRightRef = useRef(null);

  useTick(() => {
    if (
      mountainRightRef.current.x > app.renderer.screen.width &&
      mountainRightRef.current.y > app.renderer.screen.height
    ) {
      destroy();
      return;
    }

    mountainRightRef.current.x += (8 / 3) * speed.current;
    mountainRightRef.current.y += speed.current;

    mountainRightRef.current.scale.x +=
      (MAX_SCALE - INITIAL_SCALE) * speed.current * 0.01;
    mountainRightRef.current.scale.y +=
      (MAX_SCALE - INITIAL_SCALE) * speed.current * 0.01;

    speed.current += speedDiff;

    sideroadRightRef.current.x += (20 / 3) * speed.current;
    sideroadRightRef.current.y += speed.current;
    sideroadRightRef.current.scale.x +=
      (1 - INITIAL_SCALE) * speed.current * 0.01;
    sideroadRightRef.current.scale.y +=
      (1 - INITIAL_SCALE) * speed.current * 0.01;
  });

  return (
    <Container>
      <Sprite
        ref={mountainRightRef}
        image={MountainRight}
        anchor={{ x: 0, y: 1 }}
        scale={INITIAL_SCALE}
        y={360}
        x={app.renderer.screen.width * 0.5 + 5}
      />

      <Sprite
        ref={sideroadRightRef}
        image={SideroadRight}
        anchor={{ x: 0, y: 0 }}
        scale={INITIAL_SCALE}
        y={355}
        x={app.renderer.screen.width * 0.5}
      />
    </Container>
  );
};

export default RightSide;
