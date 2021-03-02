import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';
import StayCalendar from '../Calendar/StayCalendar';

const MAX_ADULT_NUM = 9;
const MAX_ROOM_NUM = 9;

const SearchContainer = () => {
  const [place] = useState('제주');
  const [adult, setAdult] = useState(1);
  const [room, setRoom] = useState(1);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [isUserBoxToggle, setIsUserBoxToggle] = useState(false);

  const history = useHistory();

  const handleAdultAdd = () => {
    adult === MAX_ADULT_NUM
      ? alert('최대 정원 9명까지만 가능합니다.')
      : setAdult(adult + 1);
  };

  const handleAdultMinus = () => {
    adult > 1 && setAdult(adult - 1);
  };

  const handleRoomAdd = () => {
    room === MAX_ROOM_NUM
      ? alert('최대 9 객실까지 가능합니다.')
      : setRoom(room + 1);
  };

  const handRoomMinus = () => {
    room > 1 && setRoom(room - 1);
  };
  const handleUserBoxToggle = () => {
    setIsUserBoxToggle(!isUserBoxToggle);
  };
  const handleUserBoxClose = () => {
    setIsUserBoxToggle(false);
  };

  const handleSearchResult = () => {
    const newObj = {
      city: place,
      startDate: start,
      endDate: end,
      guest: adult,
    };

    return (
      '?' +
      Object.entries(newObj)
        .map(e => e.join('='))
        .join('&')
    );
  };

  const formatDate = type => {
    let defaultDate = new Date();
    let year = defaultDate.getFullYear();
    let month = 1 + defaultDate.getMonth();
    month = month >= 10 ? month : '0' + month;
    if (type === 'startDate') {
      let day = defaultDate.getDate();
      day = day >= 10 ? day : '0' + day;
      return year + '-' + month + '-' + day;
    } else if (type === 'endDate') {
      let day = 1 + defaultDate.getDate();
      day = day >= 10 ? day : '0' + day;
      return year + '-' + month + '-' + day;
    }
  };

  useEffect(() => {
    setStart(formatDate('startDate'));
    setEnd(formatDate('endDate'));
  }, []);

  const goToList = () => {
    console.log('보내주는값 > > ', handleSearchResult());
    history.push('./staylist', handleSearchResult());
  };
  return (
    <>
      <SearchMain>
        <div className="searchPlace">
          <i className="fas fa-map-marker-alt" />
          <span>제주도</span>
        </div>
        <div className="searchDate">
          <i className="fas fa-calendar" />
          <StayCalendar setStart={setStart} setEnd={setEnd} />
          <i className="fas fa-chevron-down rightDown" />
        </div>
        <div className="searchUser">
          <div onClick={handleUserBoxToggle}>
            <i className="fas fa-user" />
            <span>
              성인 {adult}명 / 객실 {room}개
            </span>
            <i className="fas fa-chevron-down rightDown" />
          </div>
          <StaySelectUser display={isUserBoxToggle}>
            <div className="selectUserBoxTitle">인원선택</div>
            <div className="selectUserBoxInner">
              <span className="innerTitle">성인</span>
              <div className="innerBtn">
                <button onClick={handleAdultMinus}>-</button>
                {adult}
                <button onClick={handleAdultAdd}>+</button>
              </div>
            </div>
            <div className="selectUserBoxInner">
              <span className="innerTitle">객실</span>
              <div className="innerBtn">
                <button onClick={handRoomMinus}>-</button>
                {room}
                <button onClick={handleRoomAdd}>+</button>
              </div>
            </div>
            <button className="selectUserBoxBtn" onClick={handleUserBoxClose}>
              적용하기
            </button>
          </StaySelectUser>
        </div>
        <button className="searchBtn" onClick={goToList}>
          검색
        </button>
      </SearchMain>
    </>
  );
};

export default withRouter(SearchContainer);

const SearchMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .searchPlace {
    display: flex;
    align-items: center;
    width: 270px;
    height: 50px;
    background-color: rgb(245, 246, 247);
    border-radius: 5px;
    font-size: 16px;
    padding-left: 15px;
    cursor: pointer;
    i {
      margin-right: 10px;
      color: ${theme.Color.gray['dark']};
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

  .searchDate {
    display: flex;
    align-items: center;
    width: 340px;
    height: 50px;
    background-color: rgb(245, 246, 247);
    border-radius: 5px;
    font-size: 16px;
    padding-left: 15px;
    cursor: pointer;
    i {
      margin-right: 10px;
      color: ${theme.Color.gray['dark']};
    }

    p {
      margin-right: 80px;
      color: ${theme.Color.gray['dark']};
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
  .searchUser {
    position: relative;
    display: flex;
    align-items: center;
    width: 270px;
    height: 50px;
    background-color: rgb(245, 246, 247);
    border-radius: 5px;
    font-size: 16px;
    padding-left: 15px;
    cursor: pointer;
    i {
      margin-right: 10px;
      color: ${theme.Color.gray['dark']};
    }

    span {
      margin-right: 80px;
      color: ${theme.Color.gray['dark']};
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

  .searchBtn {
    width: 95px;
    height: 50px;
    background-color: ${theme.Color.blue['light']};
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: rgb(43, 150, 237);
    }
  }
`;

const StaySelectUser = styled.div`
  position: absolute;
  display: ${props => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  width: 300px;
  height: 240px;
  top: 55px;
  right: -30px;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .selectUserBoxTitle {
    margin: 0px 0px 30px;
    font-size: 18px;
    font-weight: bold;
    color: ${theme.Color.gray['dark']};
  }

  .selectUserBoxInner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;

    .innerTitle {
      font-size: 18px;
      font-weight: 600;
      color: ${theme.Color.gray['dark']};
    }

    .innerBtn {
      display: flex;
      flex-direction: row;
      align-items: center;
      button {
        background: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        outline: none;
        border: 1px solid ${theme.Color.blue['light']};
        color: ${theme.Color.blue['light']};
        font-size: 20px;
        font-weight: 500;
        margin: 0px 8px;
        cursor: pointer;

        &:hover {
          background-color: rgb(245, 251, 255);
        }
      }
    }
  }
  .selectUserBoxBtn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: ${theme.Color.blue['light']};
    width: 75px;
    height: 30px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: rgb(43, 150, 237);
    }
  }
`;
