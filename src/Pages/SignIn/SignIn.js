import React, { Component } from 'react';
import styled from 'styled-components';

export class SignIn extends Component {
  render() {
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
              <button>
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
  }
}

export default SignIn;

const SigninMainPage = styled.section`
  display: flex;
  width: 1060px;
  margin: 138px auto;
`;

const SigninContainer = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  width: 430px;
  height: 429px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const SigninMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;

  img {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 50%;
    margin-top: 40px;
  }

  .boxContent {
    margin-top: 38px;
    color: rgb(52, 58, 64);
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

// javascript key: 8cdcf4554f1aab9352ec23b7c0d70cee
