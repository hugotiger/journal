import React, { useState } from "react";
import { Styled } from "./styles";
import { FancyImg } from "../fancy-image";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

// Hooks
import { useTransition } from "../../hooks";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export function StoryCard({ size = "regular", story, imageSrc, ...restProps }) {
  const { setBox } = useTransition();
  const history = useHistory();
  const [willHandover, setWillHandover] = useState(false);

  const handleClick = (event) => {
    setWillHandover(true);
    setBox(event.currentTarget);
    history.push(`/story/${story.id}`);
  };

  const image = require(`../../${story.image_src}`);

  return (
    <Styled.StoryCard {...restProps}>
      <FancyImg
        aspectRatio={size === "regular" && 4 / 6}
        whileHover={{ scale: willHandover ? 1 : 1.03 }}
        whileTap={{ scale: 1 }}
        src={image}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        role="button"
        exit={{ opacity: willHandover ? 1 : 0 }}
      />
      <motion.h5 exit={{ opacity: 0, transition: { ...transition } }}>
        {story.location} <span className="country">{story.country}</span>
      </motion.h5>
    </Styled.StoryCard>
  );
}
