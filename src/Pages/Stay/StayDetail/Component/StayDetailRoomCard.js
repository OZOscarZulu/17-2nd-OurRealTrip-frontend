import React from 'react';
import styled from 'styled-components';

const StayDetailRoomCard = ({ data }) => {
  return (
    <>
      {data.room &&
        data.room.map((room, index) => {
          return (
            <DetailCard key={index}>
              <DetailCardLeft>
                <div className="cardLeftImg">
                  <img src={room.image} alt="RoomPhoto" />
                </div>
                <div className="cardLeftInfo">
                  <h2>{room.name}</h2>
                  <div className="cardLeftInfoContent">
                    <span>
                      <i className="far fa-user" />
                      기준 {room.basic_capacity}명 최대 {room.max_capacity}명
                    </span>
                    <span>
                      <i className="fas fa-bed" />
                      더블 침대 2개
                    </span>
                    <span>
                      <i className="far fa-check-circle" />
                      최소 예약 : 1박 이상
                    </span>
                    <span>
                      <i className="fas fa-bath" />
                      전용 화장실, 전용 욕실, 난방, 에어컨, 행거, 테이블
                    </span>
                    <div className="cardLeftInfoMore">
                      <span>객실 정보 더 보기</span>
                    </div>
                  </div>
                </div>
              </DetailCardLeft>
              <DetailCardRight>
                <div className="cardRightPrice">
                  <span className="priceInfo">1박 최저</span>
                  <span className="price">
                    {Number(room.price).toLocaleString()}원
                  </span>
                </div>
                <button className="cardRightBtn">선택</button>
              </DetailCardRight>
            </DetailCard>
          );
        })}
      {/* {data.room.map((room, index) => {
        return (
          <DetailCard key={index}>
            <DetailCardLeft>
              <div className="cardLeftImg">
                <img src={room.image} alt="RoomPhoto" />
              </div>
              <div className="cardLeftInfo">
                <h2>{room.name}</h2>
                <div className="cardLeftInfoContent">
                  <span>
                    <i className="far fa-user" />
                    기준 {room.basic_capacity}명 최대 {room.max_capacity}명
                  </span>
                  <span>
                    <i className="fas fa-bed" />
                    더블 침대 2개
                  </span>
                  <span>
                    <i className="far fa-check-circle" />
                    최소 예약 : 1박 이상
                  </span>
                  <span>
                    <i className="fas fa-bath" />
                    전용 화장실, 전용 욕실, 난방, 에어컨, 행거, 테이블
                  </span>
                  <div className="cardLeftInfoMore">
                    <span>객실 정보 더 보기</span>
                  </div>
                </div>
              </div>
            </DetailCardLeft>
            <DetailCardRight>
              <div className="cardRightPrice">
                <span className="priceInfo">1박 최저</span>
                <span className="price">
                  {Number(room.price).toLocaleString()}원
                </span>
              </div>
              <button className="cardRightBtn">선택</button>
            </DetailCardRight>
          </DetailCard>
          
        );
      })} */}
    </>
  );
};

export default StayDetailRoomCard;

const DetailCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  /* background-color: yellow; */
  border: 1px solid rgb(233, 236, 239);
  box-shadow: rgb(102 109 117 / 32%) 0px 2px 8px;
  padding: 14px;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const DetailCardLeft = styled.div`
  display: flex;

  .cardLeftImg {
    width: 120px;
    height: 140px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  .cardLeftInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 270px;
    margin-left: 20px;

    h2 {
      font-size: 16px;
      font-weight: 600;
      color: rgb(52, 58, 64);
    }

    .cardLeftInfoContent {
      display: flex;
      flex-direction: column;
      margin-top: 10px;

      span {
        font-size: 12px;
        color: rgb(132, 140, 148);
        margin-bottom: 5px;
      }

      .cardLeftInfoMore {
        margin-top: 15px;
        cursor: pointer;

        span {
          font-weight: bold;
          color: rgb(43, 150, 237);
          font-size: 14px;
        }
      }
    }
  }
`;

const DetailCardRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .cardRightPrice {
    .priceInfo {
      font-size: 11px;
      color: rgb(173, 181, 189);
      margin-right: 5px;
    }
    .price {
      font-size: 20px;
      font-weight: bold;
      color: rgb(52, 58, 64);
    }
  }

  .cardRightBtn {
    border: 0px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    outline-style: none;
    height: 40px;
    padding: 0px 16px;
    font-size: 14px;
    color: rgb(43, 150, 237);
    background-color: rgb(231, 244, 253);
    margin-left: 15px;
  }
`;
