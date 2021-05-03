import React, { useState } from "react";
import styled from "styled-components";
import Blank from "../images/Blank.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { colors } from "./Shop";
import Book from "../components/Book";

const HomeContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 4rem 0;
`;

const IntroText = styled.div`
  position: absolute;
  left: 32px;
  top: 23px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 200px;
`;

const ImageContainer = styled.div`
  display: flex;
  position: absolute;
  right: -60px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Arrows = styled(motion.div)`
  cursor: pointer;
  font-size: 18px;
`;

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: 10,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  const [bookColorIndex, setBookColorIndex] = useState(0);
  const setNextColor = (change) => {
    let newIndex = bookColorIndex + change;
    if (newIndex < 0) {
      setBookColorIndex(colors.length - 1);
    } else if (newIndex > colors.length - 1) {
      setBookColorIndex(0);
    } else {
      setBookColorIndex(newIndex);
    }
  };

  return (
    <HomeContainer
      variants={containerVariants}
      initail="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={Blank} alt={Blank} />
      <IntroText>
        <h2>Notebooks</h2>
        <p>Discover your new favorite notebook in four different styles</p>
        <div>
          <Link to="/shop">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              Order now!
            </motion.button>
          </Link>
        </div>
      </IntroText>

      <ImageContainer>
        <Arrows
          onClick={() => setNextColor(-1)}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          ◀
        </Arrows>
        <Book height={300} color={colors[bookColorIndex]?.value} />
        <Arrows
          onClick={() => setNextColor(1)}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
        >
          ▶
        </Arrows>
      </ImageContainer>
    </HomeContainer>
  );
}
