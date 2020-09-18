import React from "react";
import { Styled } from "./styles";
import { Container } from "react-grid-system";

export default function Section({ children, title, subtitle }) {
  return (
    <Container>
      <Styled.Section>
        <Styled.SectionTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>{title}</h2>
          <hr />
          <time>{subtitle}</time>
        </Styled.SectionTitle>
        {children}
      </Styled.Section>
    </Container>
  );
}
