import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  border: 1px solid #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <motion.a
        href="https://github.com/iriselva/microinteractions"
        whileHover={{ textDecoration: "underline" }}
      >
        Git Repository
      </motion.a>
    </StyledFooter>
  );
}
