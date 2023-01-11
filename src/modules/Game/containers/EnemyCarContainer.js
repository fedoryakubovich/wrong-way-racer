import React, { createRef, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import EnemyCar from "../components/EnemyCar";
import { socket, SOCKET_EVENTS } from "../../../utils";

const EnemyCarContainer = ({ playerCarRef }) => {
  const [enemys, setEnemys] = useState({});

  useEffect(() => {
    socket.on(SOCKET_EVENTS.newEnemy, addNewEnemy);

    return () => {
      socket.off(SOCKET_EVENTS.newEnemy);
    };
  }, []);

  const addNewEnemy = (data) => {
    const newId = uuidv4();

    setEnemys((currentState) => ({
      ...currentState,
      [newId]: { pos: data, id: newId, ref: createRef() },
    }));
  };

  const removeEnemy = useCallback((id) => {
    setEnemys((currentState) => {
      delete currentState[id];

      return currentState;
    });
  }, []);

  return (
    <>
      {Object.keys(enemys).map((key) => {
        const { pos, id, ref } = enemys[key];

        return (
          <EnemyCar
            ref={ref}
            key={id}
            playerCarRef={playerCarRef}
            pos={pos}
            id={id}
            removeEnemy={removeEnemy}
          />
        );
      })}
    </>
  );
};

export default EnemyCarContainer;
