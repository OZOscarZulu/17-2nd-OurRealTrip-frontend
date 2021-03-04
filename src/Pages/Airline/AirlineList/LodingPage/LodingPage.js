import React, { Component } from 'react';
import LodingPageMain from './LodingPageMain';
import video from './plane.mp4';
import styled, { keyframes } from 'styled-components';

class LodingPage extends Component {
  render() {
    return (
      <LoadPage>
        <SplashScreen autoPlay muted loop id="video">
          <source src={video} type="video/mp4" />
        </SplashScreen>
        <LodingPageMain />
      </LoadPage>
    );
  }
}

export default LodingPage;

const LoadPage = styled.div`
  position: relative;
  width: 100%;
  max-height: 1080px;
  margin-top: -102px;
  animation: hideSplashScreen 0.4s ease-in-out forwards;
  animation-delay: 0.1s;
  transition: all 6s ease-in-out 0.1s;

  @keyframes hideSplashScreen {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const SplashScreen = styled.video`
  position: fixed;
  width: 100%;
  max-height: 5000vh;
  margin: 0;
  padding: 0;
  top: 0;
`;
