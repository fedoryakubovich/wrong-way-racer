import React from "react";
import { useTheme } from "@mui/material/styles";
import Modal from "./components/Modal";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AppProvider } from "./store";
import Players from "./modules/Players";
import MainLayout from "./components/MainLayout";
import Tabs from "./components/Tabs";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Records from "./modules/Records";
import Chat from "./modules/Chat";
import Game from "./modules/Game";
import { TABS_LIST } from "./constants";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppProvider>
      <CssBaseline />

      <MainLayout>
        <Game />

        {!matches ? (
          <Tabs tabsList={TABS_LIST} />
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
