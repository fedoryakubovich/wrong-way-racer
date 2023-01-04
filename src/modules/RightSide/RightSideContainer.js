import React, { useEffect, useState } from "react";
import RightSide from "./RightSide";
import { generateRandomSeconds } from "../../utils";

const RightSideContainer = () => {
  const [rightSide, setRightSide] = useState(null);

  const destroy = () => {
    setRightSide(null);

    setTimeout(() => {
      setRightSide(<RightSide destroy={destroy} />);
    }, generateRandomSeconds());
  };

  useEffect(() => {
    setRightSide(<RightSide destroy={destroy} />);
  }, []);

  return rightSide;
};

export default RightSideContainer;
