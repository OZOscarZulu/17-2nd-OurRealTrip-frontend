import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navafter extends Component {
  render() {
    return (
      <NavBar>
        <NavBarCenter>
          <NavBarMain>
            <Logo>
              <Link
                to="/"
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                <img alt="mainlogo" src="./images/ourrealtrip.png" />
              </Link>
            </Logo>
            <SerchBar>
              <i class="fas fa-search"></i>
              <input type="text" placeholder="도시나 상품을 검색해주세요" />
            </SerchBar>
            <ListBar>
              <li>위시리스트</li>
              <li>예약내역</li>
              <li>메시지</li>
              <li>
                <Profile
                  className="profileThum"
                  alt="profile"
                  src="./images/그럼뭐노.png"
                />
              </li>
            </ListBar>
          </NavBarMain>
          <NavBarSubMain>
            <NavBarSubCategory>
              {/* <NavCategoryItem> */}
              <ul>
                <Link
                  to="/"
                  onClick={() => {
                    window.location.href = '/';
                  }}
                >
                  <li>항공권</li>
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    window.location.href = '/staymain';
                  }}
                >
                  <li>숙소</li>
                </Link>
                <li>렌터카·교통</li>
                <li>투어·티켓</li>
                <li>랜선투어</li>
                <li>할인혜택</li>
              </ul>
              {/* </NavCategoryItem> */}
            </NavBarSubCategory>
          </NavBarSubMain>
        </NavBarCenter>
      </NavBar>
    );
  }
}

export default Navafter;

// 텍스트 색상 : #999999
//rgb(59, 59, 59) input hover color

const NavBar = styled.section`
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid hsla(0, 0%, 100%, 0.3); */
  border-bottom: 1px solid black;
  z-index: 3;
  background-color: black;
`;

const NavBarCenter = styled.section`
  display: flex;
  flex-direction: column;
  width: 1060px;
  margin: 0 auto;
`;

const NavBarMain = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 40px;
  }
`;

const SerchBar = styled.div`
  position: relative;
  width: 340px;
  height: 48px;
  margin-top: 10px;
  margin-left: 20px;

  i {
    position: absolute;
    margin-top: 16px;
    margin-left: 15px;
    color: white;
  }

  input {
    width: 95%;
    height: 100%;
    padding-left: 42px;
    border-radius: 8px;
    border: 0;
    background-color: rgba(245, 246, 247, 0.15);
    font-size: 15px;
    font-weight: 500;
    outline: none;

    &:hover {
      background-color: #a6a6a4;
    }

    &::placeholder {
      color: white;
    }
  }
`;

const ListBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 560px;
  height: 72px;

  li {
    color: white;
    margin-right: 40px;

    &:hover {
      cursor: pointer;
      color: #a6a6a4;
    }
  }
`;

const NavBarSubMain = styled.section`
  display: flex;
  flex-direction: row;
`;

const NavBarSubCategory = styled.div`
  display: flex;
  flex-direction: row;
  width: 1060px;
  margin: 0 auto;
  align-items: center;

  ul {
    display: flex;
    margin-top: 11px;
    margin-bottom: 20px;
  }

  li {
    margin-right: 30px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
