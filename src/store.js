import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  modal: { isOpen: false },
  settings: { name: null, speed: 1 },
  game: { isEnd: false, isCrash: false },
};
const AppContext = createContext(initialState);

export const APP_ACTIONS = {
  openModal: "OPEN_MODAL",
  closeModal: "CLOSE_MODAL",

  setName: "SET_NAME",
  setSpeed: "SET_SPEED",

  endGame: "END_GAME",
  crashGame: "CRASH_GAME",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
      case APP_ACTIONS.openModal:
        newState.modal.isOpen = true;
        return newState;

      case APP_ACTIONS.closeModal:
        newState.modal.isOpen = false;
        return newState;

      case APP_ACTIONS.setName:
        newState.settings.name = false;
        return newState;

      case APP_ACTIONS.endGame:
        newState.game.isEnd = true;
        return newState;

      case APP_ACTIONS.crashGame:
        newState.game.isCrash = true;
        return newState;

      default:
        throw new Error();
    }
  }, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppState = () => useContext(AppContext);

export { AppProvider, useAppState, AppContext };
