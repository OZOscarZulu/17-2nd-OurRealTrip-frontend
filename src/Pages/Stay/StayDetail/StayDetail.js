import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import StayDetailSlider from './Component/StayDetailSlider';
import StayDetailSideBar from './Component/StayDetailSideBar';
import StayDetailRoomCard from './Component/StayDetailRoomCard';

const StayDetail = ({ match }) => {
  const [stayData, setStayData] = useState([]);

  useEffect(() => {
    fetch(`http://18.217.180.2:8000/accommodation/${match.params.id}`)
      .then(res => res.json())
      .then(res => {
        console.log('데이터 왔나? >>>>', res.data);
        setStayData(res.data);
      });
  }, []);

  return (
    <StayDetailContainer>
      <StayDetailSlider data={stayData} />
      <StayDetailContent>
        <StayDetailLeft>
          <LeftDetailTitle>
            <div className="titleName">
              <h2>{stayData.name}</h2>
              <div>
                <i className="far fa-map" />
                <span>위치보기</span>
              </div>
            </div>
            <div className="titleInfo">
              <span className="titleInfoTop">{stayData.description}</span>
              <span className="titleInfoBottom">{stayData.address}</span>
              <DetailPointStar>
                {stayData.total_rate &&
                  Array(Math.floor(Number(stayData.total_rate)) + 1).join('★')}
                {stayData.total_rate &&
                  Array(5 - Math.floor(Number(stayData.total_rate)) + 1).join(
                    '☆'
                  )}
                {stayData.total_rate && (
                  <span>{Number(stayData.total_rate)}</span>
                )}
              </DetailPointStar>
            </div>
          </LeftDetailTitle>
          <LeftDetailBody>
            <img src={stayData.main_image} alt="stayMainPhoto" />
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
              <StayDetailRoomCard data={stayData} />
            </LeftDetailBodyList>
          </LeftDetailBody>
        </StayDetailLeft>
        <StayDetailSideBar data={stayData} />
      </StayDetailContent>
    </StayDetailContainer>
  );
};

export default withRouter(StayDetail);

const StayDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
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
  margin-bottom: 100px;
`;

const StayDetailLeft = styled.div`
  position: relative;
  width: 760px;
  /* height: 1000vh; */
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
        cursor: pointer;
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

  span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(52, 58, 64);
  }
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
  /* height: 1000vh; */
  /* background-color: tomato; */
`;
