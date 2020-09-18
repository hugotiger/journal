import React from "react";

// Layout
import { Container, Row, Col } from "react-grid-system";

// Components
import { StoryCard } from "../components/story-card";

// Data
import data from "../assets/data.json";
import Header from "../components/header";
import Section from "../components/section";

export default function Home() {
  return (
    <>
      <Header />
      <Section title="Featured storys" subtitle="2019 - 2020">
        <Row>
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
      </Section>
    </>
  );
}
