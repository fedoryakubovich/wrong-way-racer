import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import { generateRandomSeconds } from "../../utils";

const LeftSideContainer = () => {
  const [leftSide, setLeftSide] = useState(null);

  const destroy = () => {
    setLeftSide(null);

    setTimeout(() => {
      setLeftSide(<LeftSide destroy={destroy} />);
    }, generateRandomSeconds());
  };

  useEffect(() => {
    setLeftSide(<LeftSide destroy={destroy} />);
  }, []);

  return leftSide;
};

export default LeftSideContainer;
