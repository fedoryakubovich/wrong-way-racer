import React, { useRef } from "react";

import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
import Explosion from "./Explosion";
import EnemyCar from "../containers/EnemyCarContainer";
import RightSide from "../containers/RightSideContainer";
import LeftSide from "../containers/LeftSideContainer";
import { CAR_POSITIONS } from "../../../constants";

const Game = ({ playerCarRef, destroyCars }) => {
  const positionRef = useRef(CAR_POSITIONS.center);

  return (
    <>
      <Sky />
      <MountainFade />
      <Road />
      {!destroyCars && (
        <>
          <PlayerCar ref={playerCarRef} positionRef={positionRef} />
          <EnemyCar playerCarRef={playerCarRef} positionRef={positionRef} />
        </>
      )}
      <RightSide />
      <LeftSide />

      <Explosion playerCarRef={playerCarRef} />
    </>
  );
};

export default Game;
