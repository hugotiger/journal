import React, { useState, createContext } from "react";

export const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [values, setValues] = useState({
    width: 300,
    height: 300,
    x: "50%",
    y: "20%",
  });
  const [handoverId, setHandoverId] = useState(null);

  function setBox(el) {
    let boundingBox;

    if (!!el) {
      const clientRect = el.getBoundingClientRect();
      boundingBox = {
        width: clientRect.width,
        height: clientRect.height,
        x: clientRect.x,
        y: clientRect.y,
      };
    }
    setValues(boundingBox);
  }

  return (
    <TransitionContext.Provider
      value={{ box: values, setBox, handoverId, setHandoverId }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
