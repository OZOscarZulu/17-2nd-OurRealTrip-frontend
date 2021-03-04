import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = () => {
  const history = useHistory();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    history.push('/');
  };

  const type =
    location.pathname === '/' || location.pathname === '/staymain'
      ? 'main'
      : 'after';
  return (
    <NavBar type={type}>
      {type === 'main' && (
        <img
          className="navImg"
          src={
            location.pathname === '/staymain'
              ? './images/staymain1.jpg'
              : './images/airline1.jpg'
          }
          alt="StayMainImg"
        />
      )}
      <NavBarCenter>
        <NavBarMain>
          <Logo>
            <Link
              to="/"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              {type === 'main' ? (
                <img alt="mainlogo" src="./images/ourrealtrip1.png" />
              ) : (
                <img alt="mainlogo" src="./images/ourrealtrip.png" />
              )}
            </Link>
          </Logo>
          <SerchBar type={type}>
            <i className="fas fa-search" type={type} />
            <input type={type} placeholder="도시나 상품을 검색해주세요" />
          </SerchBar>
          <ListBar type={type}>
            <a
              type={type}
              className="itemPatnerBtn"
              href="https://www.myrealtrip.com/about/becomepartner"
            >
              파트너 등록하기
            </a>
            {!localStorage.getItem('access_token') ? (
              <Link
                type={type}
                to="/signin"
                // onClick={() => {
                //   window.location.href = '/signin';
                // }}
              >
                로그인
              </Link>
            ) : (
              <button type={type} onClick={handleLogOut}>
                로그아웃
              </button>
            )}
          </ListBar>
        </NavBarMain>
        <NavBarSubMain>
          <NavBarSubCategory type={type}>
            <ul type={type}>
              <Link
                to="/"
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                <li type={type}>항공권</li>
              </Link>
              <Link
                to="/"
                onClick={() => {
                  window.location.href = '/staymain';
                }}
              >
                <li type={type}>숙소</li>
              </Link>
              <li type={type}>렌터카·교통</li>
              <li type={type}>투어·티켓</li>
              <li type={type}>랜선투어</li>
              <li type={type}>할인혜택</li>
            </ul>
          </NavBarSubCategory>
        </NavBarSubMain>
      </NavBarCenter>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.section`
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.5); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${props => props.type === 'after' && 'background-color: white'}
  z-index: 3;

  .navImg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
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
    ${props =>
      props.type === 'after' &&
      css`
        color: #666d75;
      `}
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
    &::placeholder {
      ${props =>
        props.type === 'after'
          ? css`
              color: #666d75;
            `
          : css`
              color: white;
            `}
    }
  }
`;

const ListBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 560px;
  height: 72px;
  a {
    ${props =>
      props.type === 'after'
        ? css`
            color: #666d75;
          `
        : css`
            color: white;
          `}
    font-size: 15px;
    font-weight: 600;
    margin-right: 40px;
    &:hover {
      color: #a6a6a4;
    }
  }
  Link {
    &:hover {
      color: #a6a6a4;
    }
  }
  button {
    height: 40px;
    width: 120px;
    border-radius: 3px;
    border: 1px solid #a6a6a4;
    background-color: transparent;
    ${props =>
      props.type === 'after'
        ? css`
            color: #2b96ed;
          `
        : css`
            color: white;
          `}
    outline: none;
    &:hover {
      cursor: pointer;
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
    display: inline-block;
    padding: 6px 12px 6px 0;
    margin-right: 0;
    ${props =>
      props.type === 'after'
        ? css`
            color: #666d75;
          `
        : css`
            color: white;
          `}
    font-size: 15px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: #a6a6a4;
    }
  }
`;
