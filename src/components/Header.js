import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const AppHeader = styled.header`
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #373737;
  border: 1px solid #373737;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavContainer = styled.div`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-left: 1px solid #373737;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-right: 1px solid #373737;
`;

const ItemsNumber = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto auto;
  top: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div`
  position: fixed;
  right: 2px;
  top: 50px;
  max-width: 120px;
  width: 120px;
`;

const variants = {
  initial: { x: 0 },
  animate: { rotate: [10, -10, 10, -10, 0] },
};

export default function Header({ itemsInCart }) {
  return (
    <AppHeader>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <Navigation>
        <NavContainer>
          <Link to="/cart">
            {itemsInCart > 0 ? <ItemsNumber>{itemsInCart}</ItemsNumber> : null}
            <motion.svg
              width="42"
              height="42"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={variants}
              animate={itemsInCart > 0 ? "animate" : "initial"}
            >
              <mask id="path-1-inside-1" fill="white">
                <rect y="7" width="28" height="21" rx="1" />
              </mask>
              <rect
                y="7"
                width="28"
                height="21"
                rx="1"
                fill={itemsInCart > 0 ? "#E7BB7A" : "#F3F0ED"}
                stroke="#373737"
                stroke-width="4"
                mask="url(#path-1-inside-1)"
              />
              <path
                d="M20 9V2C20 1.44772 19.5523 1 19 1H9C8.44772 1 8 1.44772 8 2V9"
                stroke="#373737"
                stroke-width="2"
              />
            </motion.svg>
          </Link>
        </NavContainer>
        <NavContainer>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </NavContainer>
      </Navigation>
    </AppHeader>
  );
}
