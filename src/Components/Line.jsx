import React from "react";
import { motion } from "framer-motion";

function Line({ draw, shape, ...props }) {
  return (
    <>
    <motion.line
      x1="90"
      y1="10"
      x2="10"
      y2="90"
      stroke="#0d63f8"
      variants={draw}
      custom={2}
      style={shape}
    />
    <motion.line
      x1="10"
      y1="10"
      x2="90"
      y2="90"
      stroke="#0d63f8"
      variants={draw}
      custom={2}
      style={shape}
    />
    </>
  );
}

export default Line;
