import React, { useState } from "react";
import { Styled } from "./styles";
import { motion } from "framer-motion";

// Hooks
import { useTransition } from "../../hooks";
import { useHistory } from "react-router-dom";

// Components
import { FancyImg } from "../";

const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

export default function StoryCard({
  size = "regular",
  story,
  imageSrc,
  ...restProps
}) {
  const { setBox, handoverId, setHandoverId } = useTransition();
  const history = useHistory();
  const [willHandover, setWillHandover] = useState(false);

  const handleClick = (event) => {
    setWillHandover(true);
    setHandoverId(story.id);
    setBox(event.currentTarget);
    history.push(`/story/${story.id}`);
  };

  const image = require(`../../${story.image_src}`);

  return (
    <Styled.StoryCard {...restProps}>
      <FancyImg
        aspectRatio={size === "regular" && 4 / 6}
        whileHover={{
          scale: willHandover ? 1 : 1.03,
          transition: {
            ...transition,
            duration: 0.6,
          },
        }}
        whileTap={{ scale: 1 }}
        src={image}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        role="button"
        initial={handoverId === story.id ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: willHandover ? 1 : 0,
        }}
        transition={transition}
      />
      <motion.h5 exit={{ opacity: 0, transition: { ...transition } }}>
        {story.location} <span className="country">{story.country}</span>
      </motion.h5>
    </Styled.StoryCard>
  );
}
