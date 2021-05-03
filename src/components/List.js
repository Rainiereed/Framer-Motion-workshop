import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import React from "react";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLi = styled(motion.li)`
  display: block;
  width: 28px;
  height: 28px;
  margin: 20px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`;

const Outline = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 6px solid white;
`;

export default function List({ addColor, notebook, colors }) {
  return (
    <div>
      <AnimateSharedLayout>
        <StyledUl>
          {colors.map((color) => (
            <Item
              key={color.value}
              color={color.value}
              isSelected={notebook?.color?.value === color.value}
              onClick={() => {
                addColor(color);
              }}
            />
          ))}
        </StyledUl>
      </AnimateSharedLayout>
    </div>
  );
}

function Item({ color, isSelected, onClick }) {
  return (
    <StyledLi
      onClick={onClick}
      style={{ backgroundColor: color }}
      whileHover={{ scale: 1.2 }}
    >
      {isSelected && (
        <Outline
          layoutId="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={{ spring }}
        />
      )}
    </StyledLi>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
