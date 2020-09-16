import React from "react";
import AppProviders from "./context";
import Routing from "./routing";

export default function App() {
  return (
    <AppProviders>
      <Routing />
    </AppProviders>
  );
}
