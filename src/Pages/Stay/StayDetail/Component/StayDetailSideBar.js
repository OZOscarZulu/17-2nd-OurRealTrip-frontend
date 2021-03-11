import React from 'react';
import styled from 'styled-components';

const StayDetailSideBar = ({ data }) => {
  return (
    <StayDetailRight>
      <InfoTop>
        <InfoProfile>
          <div className="infomationTop">
            <span>123,000원~</span>
            <i className="far fa-share-square" />
          </div>
          <div className="infomationBottom">
            <span>세금 포함 1박 평균 123,000원</span>
          </div>
          <button className="reservation">최저가 객실 예약</button>
        </InfoProfile>
        <InfoRoom>
          <span className="title">호스트</span>
          <div className="infoPeople">
            <div className="infoPeopleLeft">
              {data.host && <img src={data.host.image_url} alt="hostFace" />}
              <div className="infoPeopleContact">
                {data.host && <span>이름 : {data.host.name}</span>}
                <span>연락처 : 010-1004-1004</span>
              </div>
            </div>
            <div className="infoPeopleRight">
              <i className="far fa-envelope" />
              문의하기
            </div>
          </div>
        </InfoRoom>
      </InfoTop>
      <InfoBottom>
        <h2>추가 할인 받는 방법</h2>
        <img src="https://www.myrealtrip.com/webpack/7792a6258bd7e71261ce6dc842f6e375.png" />
        <img src="https://www.myrealtrip.com/webpack/f52f30ce3d746fd32f0448b978b92f9c.png" />
        <img src="https://www.myrealtrip.com/webpack/5a184eddea051997ba44206deb53443b.png" />
      </InfoBottom>
    </StayDetailRight>
  );
};

export default StayDetailSideBar;

const StayDetailRight = styled.div`
  width: 300px;
  /* height: 300px; */
  /* background-color: blue; */
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  margin-left: 20px;
`;

const InfoTop = styled.div`
  width: 100%;
  height: 260px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const InfoProfile = styled.div`
  width: 100%;
  /* height: 200px; */
  /* background-color: purple; */
  display: flex;
  flex-direction: column;

  .infomationTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
      margin-bottom: 4px;
      font-size: 26px;
      font-weight: 700;
      color: #343a40;
    }

    i {
      width: 24px;
      height: 24px;
      color: #2b96ed;
      cursor: pointer;
    }
  }

  .infomationBottom {
    font-size: 11px;
    color: #848c94;
    margin-bottom: 10px;
  }

  .reservation {
    border: 1px solid #2b96ed;
    background-color: #2b96ed;
    color: #fff;
    width: 250px;
    height: 40px;
    font-size: 16px;
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const InfoRoom = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 10px;
    color: #848c94;
    font-size: 14px;
  }

  .infoPeople {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .infoPeopleLeft {
      display: flex;
      align-items: center;

      img {
        border: none;
        outline: none;
      }

      .infoPeopleContact {
        display: flex;
        flex-direction: column;
        color: #848c94;
        font-size: 12px;
      }
    }

    .infoPeopleRight {
      color: #848c94;
      font-size: 12px;
      cursor: pointer;
      i {
        margin-right: 5px;
        color: #2b96ed;
      }
    }
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const InfoBottom = styled.div`
  width: 100%;
  height: 270px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  img {
    width: 100%;
    margin-top: 20px;
    cursor: pointer;
  }
`;
