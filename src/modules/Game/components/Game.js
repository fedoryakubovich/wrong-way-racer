import React from "react";

import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
import Explosion from "./Explosion";

import EnemyCar from "../containers/EnemyCarContainer";
import RightSide from "../containers/RightSideContainer";
import LeftSide from "../containers/LeftSideContainer";

const Game = ({ playerCarRef, destroyCars }) => {
  return (
    <>
      <Sky />
      <MountainFade />
      <Road />
      {!destroyCars && (
        <>
          <PlayerCar ref={playerCarRef} />
          <EnemyCar playerCarRef={playerCarRef} />
        </>
      )}
      <RightSide />
      <LeftSide />

      <Explosion playerCarRef={playerCarRef} />
    </>
  );
};

export default Game;
