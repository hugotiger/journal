import React, { useState, useEffect, createContext } from "react";

export const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [values, setValues] = useState(null);
  const [handoverId, setHandoverId] = useState(null);

  useEffect(() => {
    const box = localStorage.getItem("box");
    box && setValues(JSON.parse(box));
  }, []);

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
    localStorage.setItem("box", JSON.stringify(boundingBox));
  }

  return (
    <TransitionContext.Provider
      value={{ box: values, setBox, handoverId, setHandoverId }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
