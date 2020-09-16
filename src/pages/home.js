import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { motion } from "framer-motion";

// Components
import { StoryCard } from "../components/story-card";

// Data
import data from "../assets/data.json";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div>
      <Container>
        <Row>
          <motion.div style={{ background: "tomato", height: 100 }}>
            Hello
          </motion.div>
        </Row>
        <Row style={{ marginTop: 100 }}>
          <Col sm={4}>
            <StoryCard story={data["india-jaipur"]} />
          </Col>
          <Col sm={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <StoryCard
                story={data["newzealand-ragian"]}
                size="small"
                style={{ marginBottom: 46 }}
              />
              <StoryCard story={data["spain-barcelona"]} size="small" />
            </div>
          </Col>
          <Col sm={4}>
            <StoryCard story={data["usa-pennsylvania"]} />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
