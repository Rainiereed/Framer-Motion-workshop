import React, { useState } from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  height: 5px;
  position: relative;
  background: gainsboro;
`;

const ProgressLine = styled.span`
  height: 5px;
  top: 0;
  left: 0;
  position: absolute;
  background: #373737;
`;

export default function Progress({ width = 200, steps = 4 }) {
  const stepWidth = width / (steps - 1);
  const [currentStep, setStep] = useState(0);

  return (
    <div>
      <button onClick={() => setStep(Math.min(currentStep + 1, steps - 1))}>
        More
      </button>
      <button onClick={() => setStep(Math.max(0, currentStep - 1))}>
        Less
      </button>
      <ProgressBar style={{ width }}>
        <ProgressLine
          style={{
            width: Math.min(currentStep * stepWidth, width),
            transition: "width 250ms ease",
          }}
        />

        {[...new Array(steps)].map((bla, index) => {
          return (
            <span
              transition={{ left: "100ms ease" }}
              className={`progressBox ${currentStep >= index ? "filled" : ""}`}
              style={{
                left: stepWidth * index,
              }}
            />
          );
        })}
      </ProgressBar>
    </div>
  );
}
