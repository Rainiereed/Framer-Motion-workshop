import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLoader = styled(motion.div)`
  width: 10px;
  height: 10px;
  margin: 40px auto;
  background: #373737;
`;

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        easing: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <StyledLoader
        variants={loaderVariants}
        animate="animationOne"
      ></StyledLoader>
    </>
  );
};

export default Loader;
