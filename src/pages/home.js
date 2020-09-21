import React from "react";

// Layout
import { Row, Col, Hidden, Visible } from "react-grid-system";

// Components
import { Header, Alert, Section, StoryCard } from "../components";

// Data
import data from "../assets/data.json";

export default function Home() {
  return (
    <>
      <Header />

      {/* Warning on small screens */}
      <Visible xs sm md>
        <Alert>This website is not optimized for small screens</Alert>
      </Visible>

      {/* Main section */}
      <Section title="Featured stories" subtitle="2019 - 2020">
        <Row>
          <Col sm={12} md={6} lg={4} style={{ marginBottom: 39 }}>
            <StoryCard story={data["india-jaipur"]} />
          </Col>
          {/* Hide centre column on small screens */}
          <Hidden xs sm>
            <Col sm={12} md={6} lg={4} style={{ marginBottom: 39 }}>
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
          </Hidden>
          {/* Show the centre column as full width columns on small screens */}
          <Visible xs sm>
            <Col sm={12} md={6} lg={4} style={{ marginBottom: 39 }}>
              <StoryCard story={data["newzealand-ragian"]} />
            </Col>
            <Col sm={12} style={{ marginBottom: 39 }}>
              <StoryCard story={data["spain-barcelona"]} />
            </Col>
          </Visible>
          <Col sm={12} md={6} lg={4}>
            <StoryCard story={data["usa-pennsylvania"]} />
          </Col>
        </Row>
      </Section>
    </>
  );
}
