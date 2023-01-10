import React from "react";
import { Container } from "@pixi/react-pixi";

import Stage from "./Stage";
import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
import EnemyCar from "./EnemyCar";
import Explosion from "./Explosion";

import RightSide from "../containers/RightSideContainer";
import LeftSide from "../containers/LeftSideContainer";

const Game = ({ playerCarRef }) => {
  return (
    <Stage width={1120} height={649} options={{ autoDensity: true }}>
      <Container sortableChildren>
        <Sky />
        <MountainFade />
        <Road />
        <PlayerCar ref={playerCarRef} />
        <EnemyCar playerCarRef={playerCarRef} />
        <RightSide />
        <LeftSide />

        <Explosion />
      </Container>
    </Stage>
  );
};

export default Game;
