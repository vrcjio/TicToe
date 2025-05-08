import React from "react";
import { motion } from "framer-motion";

function Circle({ draw, shape, ...props }) {
  return (
    <motion.circle
      variants={draw}
      cx="50"
      cy="50"
      r="40"
      stroke="#ff0088"
      custom={1}
      style={shape}
      {...props}
    ></motion.circle>
  );
}

export default Circle;
