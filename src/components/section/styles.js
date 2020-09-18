import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section``;

const SectionTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
  h2 {
    text-transform: uppercase;
  }
  hr {
    flex: 1;
    margin: 0 2rem;
    border: none;
    border-top: 1px solid #e5ebef;
  }
`;

export const Styled = {
  Section,
  SectionTitle,
};
