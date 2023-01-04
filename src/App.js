import React, { useRef } from "react";
import { Container, Stage } from "@pixi/react-pixi";
import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
import EnemyCar from "./EnemyCar";
import RightSide from "./modules/RightSide";
import LeftSide from "./modules/LeftSide";
import Explosion from "./Explosion";

function App() {
  const playerCarRef = useRef(null);

  return (
    <div>
      <Stage width={1120} height={649}>
        <Container sortableChildren>
          <Sky />
          <MountainFade />
          <Road />
          <PlayerCar ref={playerCarRef} />
          <EnemyCar playerCarRef={playerCarRef} />
          <RightSide />
          <LeftSide />

          {/* <Explosion /> */}
        </Container>
      </Stage>
    </div>
  );
}

export default App;
