import React from "react";
import Chat from "../modules/Chat";
import Players from "../modules/Players";
import Records from "../modules/Records";

export const TABS_LIST = [
  { label: "Records", component: <Records /> },
  { label: "Player List", component: <Players /> },
  { label: "Chat", component: <Chat /> },
];

export const CAR_POSITIONS = {
  center: "center",
  left: "left",
  right: "right",
};
