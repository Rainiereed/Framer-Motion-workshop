import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const StyledNotification = styled(motion.div)`
  border: 1px solid #373737;
  box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 36%);
  padding: 16px;
  background-color: #e7bb7a;
  position: fixed;
  top: 100px;
  right: 20px;
`;

const Container = styled(motion.div)`
  position: relative;
`;

const Notification = ({ onClick }) => {
  return (
    <div>
      <AnimatePresence>
        <Popup onClick={onClick} />
      </AnimatePresence>
    </div>
  );
};

const Popup = ({ onClick }) => {
  const [isNotification, setNotification] = useState(false);
  const timeoutRef = useRef();

  const toggleNotification = () => {
    setNotification(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <Container>
      <motion.button
        onClick={() => {
          toggleNotification();
          onClick();
        }}
        whileHover={{ scale: 1.1, backgroundColor: "#E7BB7A" }}
        whileTap={{ scale: 0.9 }}
      >
        Add to cart
      </motion.button>
      <div>
        <AnimatePresence>
          {isNotification && (
            <StyledNotification
              positionTransition
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              exit={{ opacity: 0, x: 500 }}
            >
              <span style={{ marginRight: 5 }}>Item added to cart</span>
            </StyledNotification>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Notification;
