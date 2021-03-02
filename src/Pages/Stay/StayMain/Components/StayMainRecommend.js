import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';

const StayMainRecommend = () => {
  const [recommendArr, setRecommendArr] = useState([]);

  useEffect(() => {
    fetch('/data/StayMainData.json')
      .then(res => res.json())
      .then(data => {
        setRecommendArr(data.Recommend);
      });
  }, []);

  return (
    <Recommend>
      <RecommendTitle>에디터 추천</RecommendTitle>
      <RecommendCardList>
        {recommendArr.map(data => {
          return (
            <RecommendCard
              src={data.RecommendImg}
              alt="RecommendCard"
              key={data.id}
            />
          );
        })}
      </RecommendCardList>
    </Recommend>
  );
};

export default StayMainRecommend;

const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 290px;
  margin-top: 60px;
`;

const RecommendTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.Color.gray['dark']};
  margin-bottom: 20px;
`;

const RecommendCardList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const RecommendCard = styled.img`
  width: 340px;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;
