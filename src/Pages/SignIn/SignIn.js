import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../Styles/theme';
import { config } from '../../config';
const SignIn = () => {
  const handleLogin = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        fetch(`${config.api}/user/sign`, {
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.access_token) {
              localStorage.setItem('access_token', res.access_token);
              alert('로그인 되었습니다!');
              window.location.href = '/';
            } else {
              alert('로그인에 실패하였습니다!');
            }
          });
      },
      fail: function (err) {
        alert(err);
      },
    });
  };
  return (
    <SigninMainPage>
      <SigninContainer>
        <SigninMain>
          <img
            className="Logo"
            alt="companylogo"
            src="./images/ourrealtrip.png"
          />
          <p className="boxContent">Welcome!</p>
          <p className="boxCenterContent">여행의 모든 것, 아워리얼트립</p>
          <div className="signinSnsLogin">
            <button onClick={handleLogin}>
              <i class="fas fa-comment"></i> 카카오로 계속하기
            </button>
          </div>
          <div className="signinSnsIcon">
            <ul>
              <li className="snsIconFace">
                <i class="fab fa-facebook-square"></i> 페이스북
              </li>
              |
              <li className="snsIconGoo">
                <i class="fab fa-google"></i> 구글
              </li>
              |
              <li className="snsIconMail">
                <i class="fas fa-envelope-square"></i> 이메일
              </li>
            </ul>
          </div>
          <div className="footerContainer">
            <span>아직 회원이 아니신가요?</span>
            <a href="https://www.myrealtrip.com/">회원가입</a>
          </div>
        </SigninMain>
      </SigninContainer>
    </SigninMainPage>
  );
};
export default SignIn;
const SigninMainPage = styled.section`
  display: flex;
  width: 1060px;
  margin: 0 auto;
`;
const SigninContainer = styled.section`
  margin: 0 auto;
  margin-top: 65px;
  margin-bottom: 240px;
  width: 430px;
  height: 429px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
const SigninMain = styled.section`
  ${theme.Flexcenter};
  flex-direction: column;
  width: 100%;
  img {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 50%;
    margin-top: 40px;
  }
  .boxContent {
    margin-top: 38px;
    color: ${theme.Color.gray['dark']};
    font-weight: 700;
    font-size: x-large;
  }
  .boxCenterContent {
    margin-top: 10px;
    margin-bottom: 27px;
    color: #666d75;
    font-weight: 410;
    font-size: medium;
  }
  button {
    width: 330px;
    height: 50px;
    border-radius: 4px;
    background-color: #f7e318;
    border: #f7e318;
    font-weight: 400;
    font-size: medium;
    outline: none;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    }
  }
  .signinSnsIcon {
    ul {
      display: flex;
      margin-top: 30px;
      color: #666d75;
      i {
        margin-right: 5px;
        margin-left: 15px;
      }
      .snsIconFace {
        margin-right: 15px;
        font-size: 15px;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          color: black;
        }
        i:hover {
          cursor: pointer;
          color: #4867aa;
        }
      }
      .snsIconGoo {
        margin-right: 12px;
        font-size: 15px;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          color: black;
        }
        i:hover {
          cursor: pointer;
          color: #ea4335;
        }
      }
      .snsIconMail {
        margin-right: 12px;
        font-size: 15px;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          color: rgb(52, 58, 64);
        }
        i:hover {
          cursor: pointer;
        }
      }
    }
  }
  .footerContainer {
    margin-top: 40px;
    span {
      font-weight: 400;
      font-size: small;
      color: #848c94;
    }
    a {
      margin-left: 10px;
      font-weight: 600;
      font-size: small;
      color: #666d75;
    }
  }
`;
