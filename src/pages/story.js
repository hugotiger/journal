import React from "react";
import { motion } from "framer-motion";
import { useTransition } from "../hooks";
import { useParams } from "react-router-dom";
import { FancyImg } from "../components/fancy-image";
import data from "../assets/data.json";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Story() {
  const { box } = useTransition();

  const { storyId } = useParams();

  if (!(storyId in data)) {
    return <p>Could not find story</p>;
  }

  const image = require(`../assets/${storyId}.jpg`);

  return (
    <>
      <FancyImg
        src={image}
        style={{ position: "fixed" }}
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
            duration: 2,
            ...transition,
          },
        }}
        exit={{
          width: box.width,
          height: box.height,
          left: box.x,
          top: box.y,
          transition: {
            duration: 2,
            ...transition,
          },
        }}
        alt="hadå"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          marginLeft: "33%",
          padding: 128,
          width: "60ch",
        }}
      >
        <h1>Hello</h1>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </motion.div>
    </>
  );
}
