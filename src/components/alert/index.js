import React from "react";
import { Styled } from "./styles";
import { ReactComponent as AlertIcon } from "../../assets/alert.svg";

export default function Alert({ children }) {
  return (
    <Styled.Alert>
      <AlertIcon />
      <span>{children}</span>
    </Styled.Alert>
  );
}
