import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const DropContainer = styled(motion.div)`
width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #373737;
  margin: 0;
  padding: 0;
`;

const DropContent = styled(motion.div)`
  padding: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const DropHeader = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export default function Dropdown() {
  return (
    <div>
      <AnimateSharedLayout>
        <DropContainer layout>
          <Info />
        </DropContainer>
      </AnimateSharedLayout>
    </div>
  );
}

function Info() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <DropContent layout onClick={toggleOpen}>
      <DropHeader layout>
        <p>More Info</p>
        <motion.p
          whileHover={{
            y: [0, -4, 4, -4, 4, -4, 0],
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
          }}
        >
          ▼
        </motion.p>
      </DropHeader>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Our soft covered classic notebook holds 200 pages of quality paper. They are bound with a stich binding single size of A5.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </DropContent>
  );
}
