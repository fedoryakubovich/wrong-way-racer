import React, { useRef } from "react";
import { Container, Stage } from "@pixi/react-pixi";
import Sky from "./Sky";
import Road from "./Road";
import MountainFade from "./MountainFade";
import PlayerCar from "./PlayerCar";
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
import Explosion from "./Explosion";

function App() {
  const playerCarRef = useRef(null);
  const gameRef = useRef(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppProvider>
      <CssBaseline />
      <MainLayout gameRef={gameRef}>
        <Stage
          // ref={gameRef}
          width={1120}
          height={649}
          options={{ autoDensity: true }}
        >
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
