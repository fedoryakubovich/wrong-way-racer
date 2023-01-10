import React, { useCallback, useEffect, useState } from "react";
import { APP_ACTIONS, useAppState } from "../../../store";
import { socket, SOCKET_EVENTS } from "../../../utils";
import Players from "../components/Players";

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);
  const { dispatch } = useAppState();

  const handleClickOpen = useCallback(() => {
    dispatch({ type: APP_ACTIONS.openModal });
  });

  useEffect(() => {
    socket.on(SOCKET_EVENTS.players, (data) => {
      setPlayers(data);
    });
  }, []);

  return <Players players={players} handleClickOpen={handleClickOpen} />;
};

export default PlayersContainer;
