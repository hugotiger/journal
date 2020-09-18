import React from "react";
import { Styled } from "./styles";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

export default function BackButton({ onClick }) {
  return (
    <Styled.Button onClick={onClick} whileTap={{ scale: 0.95 }} tabIndex="0">
      <div className="icon">
        <ArrowLeft />
      </div>
      Go back
    </Styled.Button>
  );
}
