import React, { useMemo } from "react";

import Records from "../components/Records";
import { usePlayers } from "../../../utils";

const RecordsContainer = () => {
  const players = usePlayers();

  const sortedPlayers = useMemo(() => {
    return players.sort((a, b) => a.rank - b.rank);
  }, [players]);

  return <Records players={sortedPlayers} />;
};

export default RecordsContainer;
