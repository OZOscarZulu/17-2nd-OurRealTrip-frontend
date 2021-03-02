import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';

const StayMainDiscount = () => {
  const [disCountArr, setDisCountArr] = useState([]);

  useEffect(() => {
    fetch('/data/StayMainData.json')
      .then(res => res.json())
      .then(data => {
        setDisCountArr(data.Discount);
      });
  }, []);
  return (
    <Discount>
      <DiscountTitle>할인 혜택</DiscountTitle>
      <DiscountCardList>
        {disCountArr.map(data => {
          return (
            <DiscountCard
              src={data.DiscountImg}
              alt="DiscountCard"
              key={data.id}
            />
          );
        })}
      </DiscountCardList>
    </Discount>
  );
};

export default StayMainDiscount;

const Discount = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  margin-top: 40px;
`;

const DiscountTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.Color.gray['dark']};
  margin-bottom: 20px;
`;

const DiscountCardList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const DiscountCard = styled.img`
  width: 510px;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;
