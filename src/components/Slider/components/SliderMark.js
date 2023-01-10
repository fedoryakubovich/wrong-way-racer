import React from "react";
import VerticalNotch from "../../VerticalNotch";

const SliderMark = ({ value }) => {
  return (
    <>
      <VerticalNotch />
      <div>{value}</div>
    </>
  );
};

export default SliderMark;
