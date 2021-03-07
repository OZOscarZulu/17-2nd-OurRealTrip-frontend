import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <FooterMainContainer>
        <WrapperContainer>
          <Wrapper>
            <h5>고객센터</h5>
            <p>
              <span>평일 : </span> 09:00-18:00 (12시~13시 제외)
            </p>
            <p>
              <span>주말/공휴일 : </span> 채팅 상담만 가능
            </p>
            <p>
              <span>* 항공권 환불/변경 : </span> 09:00-17:00까지 접수 가능
            </p>
            <h4>상담 : 1670-8208</h4>
            <button>1:1 채팅상담</button>
          </Wrapper>
          <WrapperRight>
            <div className="SiteMapInfo">
              {CompanyInfo.map((itemList, index) => {
                return (
                  <ul key={index}>
                    {itemList.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          </WrapperRight>
        </WrapperContainer>
        <WrapperFooterContainer>
          <WrapperFooter>
            <div className="FooterPolicy">
              <p>이용 약관</p>
              <p>개인정보 처리방침</p>
              <p>취소 및 환불정책</p>
            </div>
            <div className="FooterIcon">
              <ul>
                <li>
                  <i className="fab fa-facebook-square" />
                </li>
                <li>
                  <i className="fab fa-instagram" />
                </li>
                <li>
                  <i className="fab fa-youtube" />
                </li>
                |
                <li>
                  <i className="fab fa-apple" />
                </li>
                <li>
                  <i className="fab fa-google-play" />
                </li>
                <button>한국어</button>
              </ul>
            </div>
          </WrapperFooter>
          <WrapperFooterBottom>
            <div className="FooterInfo">
              <p>
                상호명 (주)아워리얼트립 | 대표 이정민,허민지 |
                개인정보보호책임자 강승연,곽진석,박경토,안재이,정희영 |
                사업자등록번호 209-11-12345 사업자정보확인 | 통신판매업신고번호
                2019-서울서초-0000
              </p>
              <p>
                주소 서울특별시 강남구 테헤란로 427 위워크 타워 10층 | 이메일
                help@ourrealtrip.com | 마케팅/제휴 문의
                marketing@ourrealtrip.com
              </p>
              <p>
                자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
                아워리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
                따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
              </p>
            </div>
          </WrapperFooterBottom>
        </WrapperFooterContainer>
      </FooterMainContainer>
    );
  }
}

export default Footer;

const CompanyInfo = [
  ['소개', '회사소개', '채용', '공고'],
  [
    '파트너',
    '파트너 등록하기',
    'Affiliate 프로그램',
    '리얼가이드',
    '가이드 블로그',
  ],
  ['지원', '자주 묻는 질문', '최저가 보장제'],
];

const FooterMainContainer = styled.footer`
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const WrapperContainer = styled.section`
  display: flex;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  h5 {
    margin-top: 30px;
    margin-bottom: 20px;
    color: #616161;
    font-weight: 550;
    font-size: large;
  }

  h4 {
    margin-top: 5px;
    margin-bottom: 10px;
    color: #616161;
    font-weight: 600;
    font-size: small;
  }

  p {
    margin-top: 5px;
    color: #a6a6a4;
    font-weight: 400;
    font-size: small;
  }

  span {
    color: #616161;
    font-weight: 400;
    font-size: small;
  }

  button {
    width: 120px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 35px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    font-weight: 600;
    font-size: small;
    outline: none;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const WrapperRight = styled.section`
  margin-top: 20px;

  .SiteMapInfo {
    display: flex;
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: 30px;
    color: #616161;
    font-size: small;
    font-weight: 500;

    li {
      margin-top: 15px;

      &:hover {
        cursor: pointer;
        color: rgb(81, 171, 243);
      }
    }
  }
`;

const WrapperFooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 1060px;
  margin: 0 auto;
  margin-top: 30px;
`;

const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;

  .FooterPolicy {
    display: flex;
    p {
      margin-top: 10px;
      margin-left: 7px;
      margin-right: 20px;
      color: #616161;
      font-size: small;
      font-weight: 450;

      &:hover {
        cursor: pointer;
        color: rgb(81, 171, 243);
      }
    }
  }

  .FooterIcon {
    ul {
      display: flex;
      align-items: center;
      margin-left: 300px;
      color: #a6a6a4;

      li {
        margin-left: 10px;
        margin-right: 15px;
        color: #a6a6a4;
        font-size: larger;

        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }

      button {
        width: 120px;
        height: 40px;
        margin-left: 15px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: white;
        color: #a6a6a4;
        font-weight: 400;
        font-size: medium;
        outline: none;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
const WrapperFooterBottom = styled.section`
  .FooterInfo {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    color: #a6a6a4;
    font-size: small;

    p {
      margin-bottom: 5px;
    }

    p:last-child {
      margin-top: 20px;
    }
  }
`;
