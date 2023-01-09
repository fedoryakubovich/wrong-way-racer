import React, { useEffect, useRef } from "react";
import { Container, Stage } from "@pixi/react-pixi";
import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
import EnemyCar from "./EnemyCar";
import RightSide from "./modules/RightSide";
import LeftSide from "./modules/LeftSide";
import Modal from "./components/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomInput from "./components/CustomInput";
import { AppProvider } from "./store";
import Players from "./modules/Players";
import MainLayout from "./MainLayout";
import Tabs from "./components/Tabs/Tabs";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Records from "./modules/Records";
import Chat from "./modules/Chat";

function App() {
  const playerCarRef = useRef(null);
  const gameRef = useRef(null);

  return (
    <AppProvider>
      <CssBaseline />
      <MainLayout gameRef={gameRef}>
        <Stage ref={gameRef} width={1120} height={649}>
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

        <Grid container spacing={2}>
          <Grid xs={3.5}>
            {/* <Tabs /> */}

            <Records />
          </Grid>

          <Grid xs={5}>
            {/* <CustomInput placeholder="..." /> */}

            <Chat />
          </Grid>

          <Grid xs={3.5}>
            <Players />
          </Grid>
        </Grid>
        <Modal />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
