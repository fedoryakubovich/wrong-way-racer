import { useCallback, useEffect, useState } from "react";

export const KEYBOARD_CODES = {
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

export const useKeyboard = ({ root }) => {
  const [keys, setKeys] = useState({});

  useEffect(() => {
    root.addEventListener("keydown", handleKeydown);
    root.addEventListener("keyup", handleKeyup);

    return () => {
      root.removeEventListener("keydown", handleKeydown);
      root.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const handleKeydown = useCallback((event) => {
    setKeys((currentState) => {
      return { ...currentState, [event.code]: true };
    });
  });

  const handleKeyup = useCallback((event) => {
    setKeys((currentState) => {
      delete currentState[event.code];

      return currentState;
    });
  });

  const isKeyPress = (code) => {
    return keys[code];
  };

  const removeKey = (code) => {
    setKeys((currentState) => {
      delete currentState[code];

      return currentState;
    });
  };

  return { keys, isKeyPress, removeKey };
};
