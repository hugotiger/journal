import React from "react";
import { motion } from "framer-motion";
import { useTransition } from "../hooks";
import { useParams } from "react-router-dom";
import { FancyImg } from "../components/fancy-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Story() {
  const { box } = useTransition();

  const { storyId } = useParams();
  const imageSrc = require(`../assets/${storyId}.jpg`);

  return (
    <>
      <FancyImg
        src={imageSrc}
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
      >
        {/* <h1>HEllo</h1> */}
      </motion.div>
    </>
  );
}
