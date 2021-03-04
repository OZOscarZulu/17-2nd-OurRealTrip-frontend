import React, { useState } from 'react';
import styled from 'styled-components';

import StayDetailSlider from './Component/StayDetailSlider';
import StayDetailSideBar from './Component/StayDetailSideBar';

const StayDetail = () => {
  return (
    <StayDetailContainer>
      <StayDetailSlider />
      <StayDetailContent>
        <StayDetailLeft>
          <LeftDetailTitle>
            <div className="titleName">
              <h2>토토 게스트하우스</h2>
              <div>
                <i className="far fa-map" />
                <span>위치보기</span>
              </div>
            </div>
            <div className="titleInfo">
              <span className="titleInfoTop">
                파도를 감상하며 명상하기 좋은 게스트하우스
              </span>
              <span className="titleInfoBottom">
                제주특별자치도 제주시 한림읍 귀덕리 1836-3
              </span>
              <DetailPointStar>
                {Array(Math.floor(Number(3.5)) + 1).join('★')}
                {Array(5 - Math.floor(Number(3.5)) + 1).join('☆')}
              </DetailPointStar>
            </div>
          </LeftDetailTitle>
          <LeftDetailBody>
            <img src="./images/sliderPhoto1.jpg" alt="stayMainPhoto" />
            <LeftDetailBodyTitle>
              <span>객실 선택</span>
              <TitleFilter>
                <FilterCalender>
                  <div>
                    <i className="fas fa-calendar" />
                    <p>3월 17일 (수) - 3월 24일 (수), 7박</p>
                  </div>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </FilterCalender>
                <FilterUser>
                  <div>
                    <i className="fas fa-user" />
                    <p>성인 2명</p>
                  </div>
                  <div>
                    <i className="fas fa-chevron-down" />
                  </div>
                </FilterUser>
              </TitleFilter>
            </LeftDetailBodyTitle>
            <LeftDetailBodyList>
              <DetailCard>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <h2>이짝방</h2>
                    <div>
                      <p>
                        기준 4명 최대 6명 더블 침대 2개 최소 예약: 1박 이상 전용
                        화장실 등등등 ㅋㅋㅋㅋ
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </DetailCard>
              <DetailCard></DetailCard>
              <DetailCard></DetailCard>
            </LeftDetailBodyList>
          </LeftDetailBody>
        </StayDetailLeft>
        <StayDetailSideBar />
      </StayDetailContent>
    </StayDetailContainer>
  );
};

export default StayDetail;

const StayDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const StayDetailContent = styled.div`
  position: relative;
  width: 1060px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  margin-top: 60px;
`;

const StayDetailLeft = styled.div`
  position: relative;
  width: 760px;
  height: 1000vh;
  /* background-color: tomato; */
`;

const LeftDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 150px; */
  /* border: 1px solid black; */

  .titleName {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #343a40;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      /* text-align: center; */
      margin-right: 20px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      background-color: white;

      i {
        color: #2b96ed;
        margin-right: 5px;
      }

      span {
        font-weight: bold;
      }
    }
  }

  .titleInfo {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #666d75;

    .titleInfoTop {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .titleInfoBottom {
      font-size: 12px;
    }
  }
`;

const DetailPointStar = styled.div`
  margin-top: 10px;
  color: #2b96ed;
`;

const LeftDetailBody = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    height: 580px;
  }
`;

const LeftDetailBodyTitle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 22px;
    font-weight: bold;
    margin-top: 48px;
    margin-bottom: 16px;
  }
`;

const TitleFilter = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-between;
`;

const FilterCalender = styled.div`
  width: 500px;
  /* height: 48px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(245, 246, 247);
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(52, 58, 64);

    i {
      margin-right: 10px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const FilterUser = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(245, 246, 247);
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    text-align: center;
    color: rgb(52, 58, 64);
    p {
      font-size: 16px;
    }

    i {
      margin-right: 10px;
      font-size: 16px;
    }
  }
`;

const LeftDetailBodyList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  height: 1000vh;
  background-color: tomato;
`;

const DetailCard = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  background-color: yellow;
  border: 1px solid rgb(233, 236, 239);
  box-shadow: rgb(102 109 117 / 32%) 0px 2px 8px;
  padding: 14px;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;
