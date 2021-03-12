import React, { Component } from 'react';
import TowhereBox from './TowhereBox';
import LodingAnimation from './LodingAnimation';
import styled from 'styled-components';

class LodingPageMain extends Component {
  render() {
    return (
      <MainInLoading>
        <Introduction>
          <div>
            <span>김포</span>에서 <span>제주</span>까지
          </div>
          <div>왕복 항공권을 찾고 있습니다.</div>
        </Introduction>
        <TowhereCenter>
          <TowhereBox travel={kimpo} />
          <IconBox>
            <i className="fas fa-plane" />
          </IconBox>
          <TowhereBox travel={jeju} />
        </TowhereCenter>
        <Advertised>
          <div>마이리얼트립에서 호텔 예약하고</div>
          <div>
            <span>72,000원</span> 받아가세요.
          </div>
        </Advertised>
        <LodingAnimation className="Loading" />
      </MainInLoading>
    );
  }
}

export default LodingPageMain;

const kimpo = {
  englishId: 'GMP',
  koreanId: '김포',
  day: '2021년 03월 10일',
};

const jeju = {
  englishId: 'CJU',
  koreanId: '제주',
  day: '2021년 04월 08일',
};

const MainInLoading = styled.p`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 0;
  margin: 100px auto 0 auto;
  z-index: 1;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  div {
    margin-bottom: 5px;

    span {
      font-size: 20px;
    }
  }
`;

const TowhereCenter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  .fa-plane {
    font-size: 35px;
    color: white;
  }
`;

const Advertised = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;

  div {
    margin-top: 5px;
    font-size: 14px;

    span {
      font-size: 20px;
    }
  }
`;
