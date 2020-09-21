import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  appearance: none;
  background: transparent;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;

  margin-bottom: 40px;
  display: flex;
  align-items: center;

  > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 999px;
    margin-right: 1rem;
    transition: background-color 0.4s;
    will-change: background-color;
  }

  &:hover {
    .icon {
      background: black;
    }

    .icon svg {
      stroke: white;
      background: none;
    }
  }
  svg {
    background: none;
  }

  &:focus {
    outline: none;
  }
`;

export const Styled = { Button };
