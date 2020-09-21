import styled from "styled-components";
import { motion } from "framer-motion";

const FancyImage = styled(motion.div)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding-top: ${(props) => props.aspectRatio && `${100 / props.aspectRatio}%`};
  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-position: 50% 50%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Styled = { FancyImage };
