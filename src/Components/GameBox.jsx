import React, { useState } from "react";
import { motion } from "framer-motion";
import Squre from "./Squre";
import { useGlobalContext } from "./Hooks/GlobalContext";

function GameBox() {
  const { data } = useGlobalContext();

  return (
    <>
      <h1>
        Turn of:{" "}
        {data?.Turn && data?.Turn === "x" ? (
          <span style={{ color: "#0d63f8" }}>{data?.Turn}</span>
        ) : (
          <span style={{ color: "#ff0088" }}>{data?.Turn}</span>
        )}
      </h1>
      <div className="p-5">
        {data?.values?.map((row, key1) => (
          <div key={key1} className="d-flex justify-content-center">
            {row?.map((col, key2) => (
              // <div className="border d-flex justify-content-center align-items-center bg-info" style={{width:'100px', height:"100px"}}>{key}</div>
              <Squre key={key2} row={key1} col={key2} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default GameBox;
