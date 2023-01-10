import React, { useRef } from "react";
import { Container, Sprite, useApp, useTick } from "@pixi/react-pixi";

import MountainLeft from "../../../assets/images/mountain_left.png";
import SideroadLeft from "../../../assets/images/sideroad_left.png";
import { useAppState } from "../../../store";

const INITIAL_SCALE = 0.01;
const MAX_SCALE = 0.2;
const CONTAINER_HEIGHT = 300;

const RightSide = ({ destroy }) => {
  const { state } = useAppState();
  const { speed: gameSpeed } = state.settings;
  const app = useApp();
  const speedDiff = gameSpeed / CONTAINER_HEIGHT;
  const speed = useRef(speedDiff);

  const mountainLeftRef = useRef(null);
  const sideroadLeftRef = useRef(null);

  useTick(() => {
    if (
      mountainLeftRef.current.x < 0 &&
      mountainLeftRef.current.y > app.renderer.screen.height
    ) {
      destroy();
      return;
    }

    mountainLeftRef.current.x -= (20 / 3) * speed.current;
    mountainLeftRef.current.y += speed.current;

    mountainLeftRef.current.scale.x +=
      (MAX_SCALE - INITIAL_SCALE) * speed.current * 0.01;
    mountainLeftRef.current.scale.y +=
      (MAX_SCALE - INITIAL_SCALE) * speed.current * 0.01;

    speed.current += speedDiff;

    sideroadLeftRef.current.x -= (100 / 3) * speed.current;
    sideroadLeftRef.current.y += speed.current;
    sideroadLeftRef.current.scale.x +=
      (1 - INITIAL_SCALE) * speed.current * 0.01;
    sideroadLeftRef.current.scale.y +=
      (1 - INITIAL_SCALE) * speed.current * 0.01;
  });

  return (
    <Container>
      <Sprite
        ref={mountainLeftRef}
        image={MountainLeft}
        anchor={{ x: 0, y: 1 }}
        scale={INITIAL_SCALE}
        y={360}
        x={app.renderer.screen.width * 0.4}
      />

      <Sprite
        ref={sideroadLeftRef}
        image={SideroadLeft}
        anchor={{ x: 0, y: 0 }}
        scale={INITIAL_SCALE}
        y={355}
        x={app.renderer.screen.width * 0.4}
      />
    </Container>
  );
};

export default RightSide;
