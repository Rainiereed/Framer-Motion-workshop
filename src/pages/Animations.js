import React from "react";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Dropdown from "../components/Dropdown";
import Notification from "../components/Notification";
import Progress from "../components/Progress";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #373737;
  padding: 2rem;
  overflow: hidden;
`;

export default function Animations() {
  return (
    <div>
      <Container>
        <p>Loader</p>
        <Loader />
      </Container>
      <Container>
        <p>Logo</p>
        <Logo />
      </Container>
      <Container>
        <p>Menu</p>
        <Menu />
      </Container>
      <Container>
        <p>Dropdown</p>
        <Dropdown />
      </Container>
      <Container>
        <p>Notification</p>
        <Notification />
      </Container>
      <Container>
        <p>Progress</p>
        <Progress />
      </Container>
    </div>
  );
}
