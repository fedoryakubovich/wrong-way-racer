import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SOCKET_EVENTS = {
  newEnemy: "newEnemy",
  players: "players",
  newChatJoin: "newChatJoin",
  newChat: "newChat",
};

export const socket = io("wss://wrongway-racer-api.spls.ae");

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.players, (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off(SOCKET_EVENTS.players);
    };
  }, []);

  return players;
};
