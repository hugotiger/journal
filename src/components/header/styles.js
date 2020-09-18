import styled from "styled-components";
import { motion } from "framer-motion";

const Header = styled(motion.header)`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #afbcc5;
  .logo {
    width: 0.5rem;
    height: 0.875rem;
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;

    .stripe {
      width: 35%;
      height: calc(0.875rem * 0.9);
      transform: skew(-15deg) translateY(1px);
      background: #afbcc5;

      &:last-of-type {
        width: 50%;
      }
    }
  }
`;

export const Styled = {
  Header,
};
