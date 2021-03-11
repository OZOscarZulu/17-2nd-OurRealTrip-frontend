import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StayCardList from './Components/StayCardList';
import StayPagination from './Components/StayPagination';
import StayListHeader from './Components/StayListHeader';
import theme from '../../../Styles/theme';

import { houseThemeArr, titleFilterArr } from './Components/StayListFilterData';

const checkDataArr = [
  {
    id: 1,
    type: '주차장',
    isChecked: false,
  },
  {
    id: 2,
    type: '바베큐시설',
    isChecked: false,
  },
  {
    id: 3,
    type: '헤어드라이어기',
    isChecked: false,
  },
  {
    id: 4,
    type: 'TV',
    isChecked: false,
  },
  {
    id: 5,
    type: 'Wi-Fi',
    isChecked: false,
  },
  {
    id: 6,
    type: '수건',
    isChecked: false,
  },
  {
    id: 7,
    type: '린스',
    isChecked: false,
  },
  {
    id: 8,
    type: '바디워시',
    isChecked: false,
  },
  {
    id: 9,
    type: '수영장',
    isChecked: false,
  },
  {
    id: 10,
    type: '에어컨',
    isChecked: false,
  },
];

const StayList = () => {
  const [stayArr, setStayArr] = useState([]);
  const [checkArr, setCheckArr] = useState(checkDataArr);
  const [titleFilter, setTitleFilter] = useState('favored');
  const [theme, setTheme] = useState(0);
  const [pointRange, setPointRange] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [staysPerPage] = useState(7);

  const location = useLocation();
  useEffect(() => {
    getStayData();
  }, []);

  const getStayData = () => {
    fetch(
      `http://18.217.180.2:8000/accommodation${location.state}&order=${titleFilter}&rate=${pointRange}`
    )
      .then(res => res.json())
      .then(res => {
        setStayArr(res.data);
      });
  };

  useEffect(() => {
    fetch(
      `http://18.217.180.2:8000/accommodation/category/${theme}${location.state}&order=${titleFilter}&rate=${pointRange}`
    )
      .then(res => res.json())
      .then(res => {
        setStayArr(res.data);
      });
  }, [titleFilter]);

  useEffect(() => {
    fetch(
      `http://18.217.180.2:8000/accommodation/category/${theme}${location.state}&order=${titleFilter}&rate=${pointRange}`
    )
      .then(res => res.json())
      .then(res => {
        setStayArr(res.data);
      });
  }, [theme]);

  useEffect(() => {
    fetch(
      `http://18.217.180.2:8000/accommodation/category/${theme}${location.state}&order=${titleFilter}&rate=${pointRange}`
    )
      .then(res => res.json())
      .then(res => {
        setStayArr(res.data);
      });
  }, [pointRange]);

  const getFilterCheck = selectId => {
    let result = '';

    const updatedChecked = checkArr.map(item =>
      item.id === selectId ? { ...item, isChecked: !item.isChecked } : item
    );
    setCheckArr(updatedChecked);

    for (let item of updatedChecked) {
      if (item.isChecked) {
        result = result + `&roomOption=${item.type}`;
      }
    }

    if (result) {
      fetch(
        `http://18.217.180.2:8000/accommodation/category/${theme}${location.state}&order=${titleFilter}&rate=${pointRange}${result}`
      )
        .then(res => res.json())
        .then(res => {
          setStayArr(res.data);
        });
    } else {
      fetch(
        `http://18.217.180.2:8000/accommodation/category/${theme}${location.state}&order=${titleFilter}&rate=${pointRange}${result}`
      )
        .then(res => res.json())
        .then(res => {
          setStayArr(res.data);
        });
    }
    return result;
  };

  const indexOfLastStay = currentPage * staysPerPage;
  const indexOfFirstStay = indexOfLastStay - staysPerPage;
  const currentStays = stayArr.slice(indexOfFirstStay, indexOfLastStay);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <StayListContainer>
      <StayListHeader />
      <StayListContent>
        <StayListAside>
          <div>
            <ThemeTitle>숙소 유형</ThemeTitle>
            <ThemeList>
              {houseThemeArr.map(data => {
                return (
                  <li
                    key={data.id}
                    id={data.id}
                    onClick={() => setTheme(data.id)}
                  >
                    <span>#</span>
                    {data.type}
                  </li>
                );
              })}
            </ThemeList>
          </div>
          <div>
            <PointTitle>평점</PointTitle>
            <PointSubTitle>
              {pointRange ? (
                <span>{pointRange}점 이상</span>
              ) : (
                <span>0점 - 5점</span>
              )}
            </PointSubTitle>
            <PointRange
              min="0"
              max="5.0"
              step="0.5"
              onChange={e => setPointRange(Number(e.target.value))}
            />
          </div>
          <div>
            <AmenitiesTitle>무료 서비스</AmenitiesTitle>
            <AmenitiesList>
              {checkDataArr.map(data => {
                return (
                  <div className="checkFilter" key={data.id}>
                    <AmenitiesCheck
                      id={data.id}
                      value={data.type}
                      onChange={() => getFilterCheck(data.id)}
                    />
                    {data.type}
                  </div>
                );
              })}
            </AmenitiesList>
          </div>
        </StayListAside>
        <StayListArticle>
          <header className="articleHeader">
            <span className="articleTitle">검색된 숙소 {stayArr.length}개</span>
            <ul className="articleListContainer">
              {titleFilterArr.map(data => {
                return (
                  <li key={data.id} onClick={() => setTitleFilter(data.name)}>
                    {data.type}
                  </li>
                );
              })}
            </ul>
          </header>
          <StayCardList currentStays={currentStays} id={stayArr.stayCardId} />
          <StayPagination
            staysPerPage={staysPerPage}
            totalStays={stayArr.length}
            paginate={paginate}
          />
        </StayListArticle>
      </StayListContent>
    </StayListContainer>
  );
};

export default withRouter(StayList);

const StayListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StayListContent = styled.div`
  display: flex;
  width: 1060px;
  margin: 0px auto;
`;

const StayListAside = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 32px 30px 0px 0px;
`;

const ThemeTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.Color.gray['dark']};
  line-height: 24px;
`;

const ThemeList = styled.ul`
  padding: 16px 0 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 8px;
    padding: 0px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #666d75;
    border: 1px solid #dee2e6;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f8f9fa;
    }

    span {
      margin-left: 4px;
      margin-right: 10px;
    }
  }
`;

const PointTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  line-height: 24px;
`;

const PointSubTitle = styled.div`
  font-size: 13px;
  margin-top: 8px;
  color: #848c94;
  width: 100%;

  span {
    margin-right: 10px;
  }
`;

const PointRange = styled.input.attrs({
  type: 'range',
  min: '0',
  max: '5.0',
  step: '0.5',
})`
  width: 100%;

  padding: 16px 0 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const AmenitiesTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.Color.gray['dark']};
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 40px;
    height: 100%;
    padding: 5px;
    background-color: #51abf3;
    color: white;
    font-size: 13px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AmenitiesList = styled.ul`
  padding: 16px 0 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .checkFilter {
    display: flex;
    align-items: center;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.Color.gray['dark']};
    margin-bottom: 10px;
  }
`;

const AmenitiesCheck = styled.input.attrs({
  type: 'checkbox',
})`
  width: 18px;
  height: 18px;
`;

const StayListArticle = styled.div`
  width: 780px;
  background-color: #fff;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  .articleHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .articleTitle {
      font-size: 16px;
      font-weight: 600;
      color: ${theme.Color.gray['dark']};
    }

    .articleListContainer {
      display: flex;
      align-items: center;

      li {
        font-weight: 500;
        color: ${theme.Color.gray['dark']};
        margin-left: 10px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
`;
