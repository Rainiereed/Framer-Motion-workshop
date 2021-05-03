import React, { useState } from "react";
import { getStoredNotebooks } from "../utils/StorageUtils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Delete from "../images/Delete.svg";
import styled from "styled-components";
import Book from "../components/Book";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-content: center;
  padding: 2rem;
`;

const CartItem = styled(motion.div)`
  border-bottom: 1px solid #373737;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DeleteButton = styled(motion.div)`
  cursor: pointer;
  padding: 0.3rem;
  justify-content: center;
  display: flex;
`;

const itemVariant = {
  hidden: { x: -100, opacity: 0, delay: 2, type: "spring" },
  visible: { x: 0, opacity: 1 },
};

export default function Cart({ removeFromCart, clearCart }) {
  const [notebooks, setNotebooks] = useState(getStoredNotebooks());

  if (notebooks.length === 0) {
    return (
      <CartContainer>
        <p>Your cart is empty</p>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 2 }}>
        <AnimatePresence>
          {notebooks.map((notebook, id) => {
            return (
              <CartItem
                key={notebook.id}
                initial="visible"
                variants={itemVariant}
                exit="hidden"
              >
                <Book color={notebook?.color?.value} height={42} />
                <StyledTextContainer>
                  <h4>Classic Notebook </h4>
                  <span>{`Color: ${notebook?.color?.name} | Paper: ${notebook?.paper?.name}`}</span>
                </StyledTextContainer>

                <DeleteButton
                  onClick={() => {
                    removeFromCart(notebook);
                    setNotebooks(getStoredNotebooks());
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#E7BB7A" }}
                >
                  <img data-trigger="delete" src={Delete} alt={Delete} />
                </DeleteButton>
              </CartItem>
            );
          })}
        </AnimatePresence>
      </motion.div>
      <div>
        <Link to="/confirm">
          <motion.button
            onClick={() => {
              clearCart();
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#E7BB7A" }}
            whileTap={{ scale: 0.9 }}
          >
            Confirm Purchase
          </motion.button>
        </Link>
      </div>
    </CartContainer>
  );
}
