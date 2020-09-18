import React from "react";
import { motion } from "framer-motion";
import { useTransition } from "../hooks";
import { useParams, useHistory } from "react-router-dom";
import { FancyImg } from "../components/fancy-image";

// Assets
import data from "../assets/data.json";
import BackButton from "../components/back-button";

const transition = { duration: 0.8, ease: [0.4, 0.07, 0.2, 0.93] };

export default function Story() {
  const { box } = useTransition();

  const { storyId } = useParams();
  const history = useHistory();

  if (!(storyId in data)) {
    return <p>Could not find story</p>;
  }

  //TODO: Gör box till null om inga värden finns elr dylikt
  //      Fadea bara opacity ifall dessa är null
  //      Samma sak kanske går att göra på homepagen

  const story = data[storyId];

  const image = require(`../assets/${storyId}.jpg`);

  return (
    <>
      <FancyImg
        src={image}
        style={{ position: "fixed", zIndex: 50 }}
        initial={{
          width: box.width,
          height: box.height,
          left: box.x,
          top: box.y,
        }}
        animate={{
          width: "33.33%",
          height: "100%",
          left: 0,
          top: 0,
          transition: {
            ...transition,
          },
        }}
        exit={{
          width: box.width,
          height: box.height,
          left: box.x,
          top: box.y,
          transition: {
            ...transition,
          },
        }}
        alt="hadå"
      />
      <motion.div
        style={{
          marginLeft: "33%",
          paddingLeft: 128,
          paddingTop: 40,
          width: "60ch",
          zIndex: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...transition, delay: 0.6 },
        }}
        exit={{
          opacity: 0,
          x: "-33%",
          scale: 0.8,
          transition: {
            ...transition,
            duration: 0.3,
          },
        }}
      >
        <BackButton onClick={() => history.goBack()} />
        <h1>{story.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: story.text }}></p>
      </motion.div>
    </>
  );
}
