import { io } from "socket.io-client";

export const SOCKET_EVENTS = {
  newEnemy: "newEnemy",
};

export const socket = io("wss://wrongway-racer-api.spls.ae");
