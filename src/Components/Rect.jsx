import React from "react";
import { motion } from "framer-motion";

function Rect({ draw, shape, ...props }) {
  return (
    <motion.rect
      width="100"
      height="100"
      rx="10"
      stroke="gray"
      custom={4}
      variants={draw}
      style={shape}
      {...props}
    ></motion.rect>
  );
}

export default Rect;
