import React, { useContext } from "react";
import ContextPlayer, { playerContext } from "./ContextPlayer";

export const useGlobalContext = () => ({
  data: useContext(playerContext),
});

function GlobalContext({ children }) {
  return <ContextPlayer>{children}</ContextPlayer>;
}

export default GlobalContext;
