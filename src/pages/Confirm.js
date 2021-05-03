import { useState, useEffect } from "react";
import styled from "styled-components";
import React from "react";
import Loader from "../components/Loader";
import ConfettiCanvas from "react-confetti-canvas";

const ConfirmContainer = styled.div`
  height: calc(100vh - 225px);
  width: 100vw;
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const LoaderContainer = styled.div`
  height: calc(100vh - 225px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div``;

export default function Confirm() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Container>
      {loading === false ? (
        <ConfirmContainer>
          <ConfettiCanvas
            colors={[
              ["#373737", "#BFAEA9"],
              ["#E7BB7A", "#C2D1CE"],
            ]}
            duration={0.02}
            paperCount={120}
            ribbonCount={0}
          />
          <Title>Purchase Confirmed!</Title>
        </ConfirmContainer>
      ) : (
        <LoaderContainer>
          <Loader />
          <p>Processing order</p>
        </LoaderContainer>
      )}
    </Container>
  );
}
