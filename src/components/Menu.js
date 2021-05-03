import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Burger = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
`;

const Line = styled(motion.div)`
  width: 42px;
  height: 2px;
  background-color: #373737;
`;

const Navbar = styled(motion.ul)`
  flex-direction: column;
  padding: 33px 0 0 0;
  margin-top: 16px;
`;

const NavbarItem = styled(motion.li)`
  padding: 1rem;
  border: 1px solid #373737;
  cursor: pointer;
  list-style: none;
  width: 121px;
`;

function Hamburger({ toggle, children, isOpen }) {
  return (
    <>
      <Burger
        layout
        onClick={toggle}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <Line variants={{ open: { y: 10 }, closed: { y: 0 } }} />
        <div className="line" />
        <Line variants={{ open: { y: -10 }, closed: { y: 0 } }} />
      </Burger>
      <AnimatePresence>{isOpen && children}</AnimatePresence>
    </>
  );
}

const itemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
const listVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.14, staggerDirection: -1 },
  },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  return (
    <motion.div
      //style={{ minHeight: 300, justifyContent: "initial" }}
      animate={isOpen ? "open" : "closed"}
    >
      <Hamburger toggle={() => setIsOpen()} isOpen={isOpen}>
        <motion.div
          layout
          style={{ overflow: "hidden" }}
          initial={{ height: 0 }}
          animate={{ height: "auto", transition: { duration: 0.3 } }}
          exit={{ height: 0, transition: { duration: 0.3 } }}
        >
          <Navbar
            variants={listVariant}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {["Shop", "Cart", "Play"].map((item, i) => (
              <NavbarItem
                key={item}
                variants={itemVariants}
                whileHover={{ backgroundColor: "#E7BB7A" }}
              >
                <a href={item}>{item}</a>
              </NavbarItem>
            ))}
          </Navbar>
        </motion.div>
      </Hamburger>
    </motion.div>
  );
}
