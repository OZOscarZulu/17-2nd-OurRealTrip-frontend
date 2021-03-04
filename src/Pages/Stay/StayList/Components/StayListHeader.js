import React from 'react';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';

const StayListHeader = () => {
  return (
    <StayListHeaderContainer>
      <StayListSearch>
        <div className="stayListLeft">
          <i className="fas fa-map-marker-alt" />
          제주도
        </div>
        <div className="stayListCenter">
          <i className="far fa-calendar" />
          <span>2021-03-17</span>
          <span className="hyphen">-</span>
          <span>2021-03-24</span>
        </div>
        <div className="stayListRight">
          <div>
            <i className="far fa-user" />
            <span>총 2명</span>
          </div>
          <i className="fas fa-chevron-down chevron" />
        </div>
        <button className="stayListBtn">검색</button>
      </StayListSearch>
    </StayListHeaderContainer>
  );
};

export default StayListHeader;

const StayListHeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${theme.Color.blue['light']};
`;

const StayListSearch = styled.div`
  width: 1060px;
  height: 75px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;

  .stayListLeft {
    display: flex;
    align-items: center;
    width: 320px;
    height: 50px;
    background-color: #fff;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    color: ${theme.Color.gray['dark']};
    i {
      margin: 0px 10px 0px 12px;
      color: ${theme.Color.blue['light']};
    }
  }

  .stayListCenter {
    display: flex;
    align-items: center;
    width: 340px;
    height: 50px;
    background-color: #fff;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    color: ${theme.Color.gray['dark']};
    i {
      margin: 0px 10px 0px 12px;
      color: ${theme.Color.blue['light']};
    }

    .hyphen {
      margin: 0px 8px 0px 8px;
    }
  }

  .stayListRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    height: 50px;
    background-color: #fff;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    color: ${theme.Color.gray['dark']};
    i {
      margin: 0px 10px 0px 12px;
      color: ${theme.Color.blue['light']};
    }

    .chevron {
      color: ${theme.Color.gray['dark']};
    }
  }

  .stayListBtn {
    width: 80px;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    border: 0;
    outline: none;
    background-color: #e7f4fd;
    color: #2b96ed;
    cursor: pointer;

    &:hover {
      background-color: #cbe7fd;
      box-shadow: 0 1px 3px 0 rgb(43 150 237 / 20%);
    }
  }
`;
