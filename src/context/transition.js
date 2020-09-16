import React, { useState, createContext } from "react";

export const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [values, setValues] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

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
    <TransitionContext.Provider value={{ box: values, setBox }}>
      {children}
    </TransitionContext.Provider>
  );
}
