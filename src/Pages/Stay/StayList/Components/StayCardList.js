import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';

const StayCardList = ({ currentStays }) => {
  const history = useHistory();
  const goToDetailPage = id => {
    history.push(`/staydetail/${id}`);
  };

  return (
    <ArticleSectionList>
      {currentStays.map(data => {
        return (
          <ArticleSectionCard
            key={data.id}
            onClick={() => goToDetailPage(data.id)}
          >
            <CardImage>
              <img src={data.url} alt="stayimg"></img>
            </CardImage>
            <CardInfoContainer>
              <CardInfoTop>
                <CardInfoTitle>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                </CardInfoTitle>
              </CardInfoTop>
              <CardInfoBottom>
                <CardInfoLeftContent>
                  <StayPoint>
                    <StayPointStar>
                      {Array(Math.floor(Number(data.rate)) + 1).join('★')}
                      {Array(5 - Math.floor(Number(data.rate)) + 1).join('☆')}
                    </StayPointStar>
                    <StayPointNum>{Number(data.rate)}</StayPointNum>
                  </StayPoint>
                  <StayReview>
                    <span className="stayReviewNum">
                      {data.review}개의 이용 후기
                    </span>
                  </StayReview>
                </CardInfoLeftContent>
                <CardInfoRightContent>
                  <StayPriceInfo>1박최저</StayPriceInfo>
                  <StayPriceNum>
                    {Number(data.price).toLocaleString()}원
                  </StayPriceNum>
                </CardInfoRightContent>
              </CardInfoBottom>
            </CardInfoContainer>
          </ArticleSectionCard>
        );
      })}
    </ArticleSectionList>
  );
};

export default withRouter(StayCardList);

const ArticleSectionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ArticleSectionCard = styled.div`
  display: flex;
  width: 780px;
  height: 200px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  cursor: pointer;
`;

const CardImage = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 580px;
  padding: 20px 24px 22px;
`;

const CardInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardInfoTitle = styled.div`
  h2 {
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.Color.gray['dark']};
  }
  p {
    height: 14px;
    line-height: 14px;
    font-size: 13px;
    color: #848c94;
  }
`;

const CardInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardInfoLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StayPoint = styled.div`
  display: flex;
`;

const StayPointStar = styled.span`
  color: ${theme.Color.blue['light']};
  margin-right: 5px;
`;

const StayPointNum = styled.span`
  font-weight: 600;
  color: black;
  font-size: 16px;
`;

const StayReview = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #848c94;
`;

const CardInfoRightContent = styled.div`
  display: flex;
  margin-top: 15px;
`;

const StayPriceInfo = styled.span`
  font-size: 13px;
  margin-top: 8px;
  margin-right: 10px;
  color: #848c94;
`;

const StayPriceNum = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
