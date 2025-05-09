import React, { useState } from "react";
import { motion } from "framer-motion";
import Rect from "./Rect";
import Circle from "./Circle";
import Line from "./Line";
import { useGlobalContext } from "./Hooks/GlobalContext";

const image = {
  width:"100%",
  maxWidth: "120px",
  aspectRatio:"1 / 1",
  margin:"5px",
  backgroundColor:"#EEEEEE"
};

const shape = {
  strokeWidth: 5,
  strokeLinecap: "squre",
  fill: "transparent",
  cursor: "pointer",
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: 0.5, duration: 0.01 },
    },
  },
};

function Squre({row, col, ...props }) {

  const { Turn, values, handleSetValue } = useGlobalContext()?.data;

  const showShap = () => {
      handleSetValue(row, col, Turn);
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0,0,100,100"
      initial="hidden"
      animate="visible"
      style={image}
    >
      {/* <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="10"
        fill="transparent"
        stroke="gray"
        strokeWidth="2"
        onClick={showShap}
      /> */}

      <Rect onClick={showShap} shape={shape} draw={draw} />

      {values[row][col] === "o" && <Circle onClick={showShap} shape={shape} draw={draw} />}
      {values[row][col] === "x" && <Line onClick={showShap} shape={shape} draw={draw} />}
    </motion.svg>
  );
}

export default Squre;
