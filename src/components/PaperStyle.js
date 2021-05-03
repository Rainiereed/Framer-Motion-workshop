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

const PaperIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export default function PaperStyle({ addPaper, notebook, papers }) {
  return (
    <div>
      <AnimateSharedLayout>
        <StyledUl>
          {papers.map(({ value, name }) => (
            <Item
              key={value}
              paper={value}
              isSelected={notebook?.paper?.value === value}
              onClick={() => {
                addPaper({ value, name });
              }}
            />
          ))}
        </StyledUl>
      </AnimateSharedLayout>
    </div>
  );
}

function Item({ paper, isSelected, onClick }) {
  return (
    <StyledLi onClick={onClick} whileHover={{ scale: 1.2 }}>
      <PaperIcon src={paper} />
      {isSelected && (
        <Outline
          layoutId="outline"
          initial={false}
          animate={{ borderColor: "#373737" }}
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
