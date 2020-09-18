import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { Styled } from "./styles";

export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <Styled.Header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="logo">
              <div className="stripe" />
              <div className="stripe" />
            </div>
            Journal
          </Styled.Header>
        </Col>
      </Row>
    </Container>
  );
}
