import React, { useEffect, useRef } from "react";
import { Container } from "@pixi/react-pixi";
import Sky from "./modules/Game/components/Sky";
import Road from "./modules/Game/components/Road";
import MountainFade from "./modules/Game/components/MountainFade";
import PlayerCar from "./modules/Game/components/PlayerCar";
import EnemyCar from "./EnemyCar";
import RightSide from "./modules/RightSide";
import LeftSide from "./modules/LeftSide";
import { useTheme } from "@mui/material/styles";
import Modal from "./components/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AppProvider } from "./store";
import Players from "./modules/Players";
import MainLayout from "./MainLayout";
import Tabs from "./components/Tabs/Tabs";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Records from "./modules/Records";
import Chat from "./modules/Chat";

import Stage from "./modules/Game/components/Stage";

function App() {
  const playerCarRef = useRef(null);
  const gameRef = useRef(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesGame = useMediaQuery("(min-width:1120px)");

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
            {/* <EnemyCar playerCarRef={playerCarRef} />
            <RightSide />
            <LeftSide /> */}

            {/* <Explosion /> */}
          </Container>
        </Stage>

        {!matches ? (
          <Tabs />
        ) : (
          <Grid container spacing={2}>
            <Grid xs={3.5}>
              <Records />
            </Grid>

            <Grid xs={5}>
              <Chat />
            </Grid>

            <Grid xs={3.5}>
              <Players />
            </Grid>
          </Grid>
        )}

        <Modal />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
