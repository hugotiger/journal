import React from "react";
import { GlobalStyle } from "../global-style";
import { setConfiguration } from "react-grid-system";
import { TransitionProvider } from "./transition";

// Setting the config for react-grid-system
//
// TODO: Improvement is to replace this with my own media queries
//        That way I can change e.g. the gutter width on smaller devices
setConfiguration({
  gutterWidth: 80,
  //                                      👇 only changed this one
  containerWidths: [540, 740, 960, 1140, 1350],
});

export default function AppProviders({ children }) {
  return (
    <>
      <GlobalStyle />
      <TransitionProvider>{children}</TransitionProvider>
    </>
  );
}
