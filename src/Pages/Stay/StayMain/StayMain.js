import React from 'react';
import styled from 'styled-components';

import StayMainDiscount from './Components/StayMainDiscount';
import StayMainRecommend from './Components/StayMainRecommend';
import StayMainSearchCategory from './Components/StayMainSearchCategory';
import SearchContainer from './Components/SearchContainer';

const StayMain = () => {
  return (
    <StayMainContainer>
      <StaySection>
        <SearchSection>
          <Title>어떤 숙소 찾으세요?</Title>
          <SearchDiv>
            <StayMainSearchCategory />
            <SearchContainer />
          </SearchDiv>
        </SearchSection>
        <StayMainDiscount />
        <StayMainRecommend />
      </StaySection>
    </StayMainContainer>
  );
};

export default StayMain;

const StayMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 130px;
`;

const StaySection = styled.div`
  width: 1060px;
  height: 100%;
  margin: 0 auto;
  padding-top: 40px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 210px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  color: #ffffff;
`;

const SearchDiv = styled.div`
  width: 100%;
  height: 145px;
  margin-top: 70px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;

  z-index: 1;
`;
