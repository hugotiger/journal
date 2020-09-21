import React from "react";
import { Styled } from "./styles";

export default function FancyImg({
  width,
  height,
  aspectRatio,
  src,
  onClick,
  ...restProps
}) {
  return (
    <div style={{ overflow: "hidden", flex: "1 1 auto" }} onClick={onClick}>
      <Styled.FancyImage
        width={width}
        height={height}
        aspectRatio={aspectRatio}
        src={src}
        {...restProps}
      />
    </div>
  );
}
