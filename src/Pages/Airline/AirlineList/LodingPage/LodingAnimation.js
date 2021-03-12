import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class LodingAnimation extends Component {
  render() {
    return (
      <Animation>
        <div className="loading"></div>
      </Animation>
    );
  }
}

export default LodingAnimation;

const Animation = styled.div`
  position: relative;
  margin-top: 230px;
  padding: 0;
  z-index: 1;
  background-color: #2f2f2f;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: 100px;
    margin-left: 5px;
    border: 4px solid #fff;
    border-bottom: 4px solid transparent;
    border-radius: 50%;
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
