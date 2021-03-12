import React, { Component } from 'react';
import LodingPage from './LodingPage/LodingPage';
import AirlineListSearchBox from './AirlineListSearchBox/AirlineListSearchBox';
import FilterCategoryInSideBar from './Components/FilterCategoryInSideBar';
import TicketInList from './TicketInList/TicketInList';
import ReservationBox from './ReservationBox/ReservationBox';
import SendFilter from './AirlineSelectedBox/SendFilter';
import styled, { isStyledComponent, keyframes } from 'styled-components';
// import AirlineTime from './AirlineSelectedBox/AirlineTime';

class AirlineList extends Component {
  state = {
    isClick: true,
    isReservationOn: false,
    AirLineData: [],
    isShowSelected: false,
    filteredData: [],
    ChosenQuantityDataInLastPage: this.props.location.state.total,
    rightFilter: 'price:asc',
    야간: 'timeOption=4&',
    오후: 'timeOption=3&',
    오전: 'timeOption=2&',
    새벽: 'timeOption=1&',
    default1: 'timeOption=1&',
    default2: 'timeOption=2&',
    default3: 'timeOption=3&',
    default4: 'timeOption=4&',
  };

  handleShowSelectedTicket = e => {
    const filtered = this.state.AirLineData.flights?.filter(
      data => data.id === Number(e.target.id)
    );
    const deletefiltered = this.state.filteredData?.filter(
      data => data.id !== Number(e.target.id)
    );
    e.target.innerText === '항공편 변경'
      ? this.setState({ filteredData: [...deletefiltered] })
      : this.setState({
          isShowSelected: true,
          filteredData: [...this.state.filteredData, ...filtered],
        });
  };

  test = e => {
    this.setState({ rightFilter: e.target.value });
  };

  handleChangeTimeFilter = e => {
    const { checked, name, id } = e.target;
    // const {
    //   새벽,
    //   오전,
    //   오후,
    //   야간,
    // default2,
    // default3,
    // default4,
    // default1,
    // } = this.state;
    // console.log(e.target.name);
    checked === true
      ? this.setState({ [name]: `timeOption=${Number(id) + 1}&` })
      : this.setState({ [name]: '' });
    // fetch(
    //   `http://18.217.180.2:8000/flight?departure=GMP&arrival=CJU&date=${localStorage.getItem(
    //     'startDate'
    //   )}&sort=price:asc&${새벽}${오전}${오후}${야간}passenger=${
    //     this.state.ChosenQuantityDataInLastPage
    //   }`,
    //   {
    //     method: 'GET',
    //   }
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       AirLineData: data,
    //     });
    //   });
  };

  componentDidMount() {
    const {
      새벽,
      오전,
      오후,
      야간,
      default2,
      default3,
      default4,
      default1,
    } = this.state;
    fetch(
      `http://18.217.180.2:8000/flight?departure=GMP&arrival=CJU&date=${localStorage.getItem(
        'startDate'
      )}&sort=price:asc&${default1}${default2}${default3}${default4}&passenger=${
        this.state.ChosenQuantityDataInLastPage
      }`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('AirLineData', JSON.stringify(data));
        console.log('컴디마');
        this.setState({
          AirLineData: data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { 새벽, 오전, 오후, 야간 } = this.state;
    if (
      새벽 !== prevState.새벽 ||
      오전 !== prevState.오전 ||
      오후 !== prevState.오후 ||
      야간 !== prevState.야간
    )
      fetch(
        `http://18.217.180.2:8000/flight?departure=GMP&arrival=CJU&date=${localStorage.getItem(
          'startDate'
        )}&sort=price:asc&${새벽}${오전}${오후}${야간}passenger=${
          this.state.ChosenQuantityDataInLastPage
        }`,
        {
          method: 'GET',
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log('컴디업2', 새벽);
          this.setState({
            AirLineData: data,
          });
        });

    // if (this.state.filteredData !== prevState.filteredData) {
    //   fetch(
    //     `http://18.217.180.2:8000/flight?departure=CJU&arrival=GMP&date=${localStorage.getItem(
    //       'endDate'
    //     )}&sort=${
    //       this.state.rightFilter
    //     }&timeOption=1&timeOption=2&timeOption=3&timeOption=4`,
    //     {
    //       method: 'GET',
    //     }
    //   )
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         AirLineData: data,
    //       });
    //     });
    // }

    if (this.state.rightFilter !== prevState.rightFilter) {
      fetch(
        `http://18.217.180.2:8000/flight?departure=GMP&arrival=CJU&date=${localStorage.getItem(
          'startDate'
        )}&sort=${
          this.state.rightFilter
        }&${새벽}${오전}${오후}${야간}&passenger=${
          this.state.ChosenQuantityDataInLastPage
        }`,
        {
          method: 'GET',
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log('컴디업');
          this.setState({
            AirLineData: data,
          });
        });
    }
  }

  render() {
    const {
      AirLineData,
      filteredData,
      ChosenQuantityDataInLastPage,
    } = this.state;
    console.log(JSON.parse(localStorage.getItem('AirLineData')));
    console.log('렌더', this.state);
    console.log(typeof this.state.새벽);
    return (
      <AirLine>
        <LodingPage />
        <AirlineListSearchBox
          AirLineData={AirLineData}
          ChosenQuantityDataInLastPage={ChosenQuantityDataInLastPage}
        />
        {this.state.filteredData && (
          <SendFilter
            AirLineData={AirLineData}
            filteredData={filteredData}
            handleShowSelectedTicket={this.handleShowSelectedTicket}
          />
        )}

        {this.state.filteredData.length === 2 && (
          <ReservationBox
            filteredData={filteredData}
            ChosenQuantityDataInLastPage={ChosenQuantityDataInLastPage}
          />
        )}
        {this.state.filteredData.length < 2 && (
          <AirLineListMain>
            <LeftSideBarInMain>
              <FilterCategoryInSideBar category={company} />
              <FilterCategoryInSideBar
                handleChangeTimeFilter={this.handleChangeTimeFilter}
                category={leavingTime}
              />
              <FilterCategoryInSideBar category={seatType} />
            </LeftSideBarInMain>
            <RightAirLineList>
              <SearchResult>
                <InformArea>
                  <span>검색결과 총 {AirLineData.flights?.length}개</span>
                  <span className="tax">
                    성인 1인기준 편도 요금입니다. (세금 수수료 포함)
                  </span>
                </InformArea>
                <Filter defaultValue="price:asc" onChange={this.test}>
                  <option value="price:asc">가격 낮은 순</option>
                  <option value="departureTime:asc">출발 시간 빠른 순 </option>
                  <option value="departureTime:desc">출발 시간 늦은 순</option>
                </Filter>
              </SearchResult>
              <SurmmayAirInfrom>
                <AirLineSchedule>항공편</AirLineSchedule>
                <ToWhere>
                  {AirLineData.departureAirportName}
                  <i className="fas fa-long-arrow-alt-right" />
                  {AirLineData.arrivalAirportName}
                </ToWhere>
                <Day>{AirLineData.date}</Day>
              </SurmmayAirInfrom>
              <TicketInList
                AirLineData={AirLineData}
                filteredData={filteredData}
                handleShowSelectedTicket={this.handleShowSelectedTicket}
              />
            </RightAirLineList>
          </AirLineListMain>
        )}
      </AirLine>
    );
  }
}

export default AirlineList;

const company = {
  id: '항공사',
  checked: '모두 선택',
  unchecked: '모두 해제',
  type: [
    '대한항공',
    '진에어',
    '아시아나',
    '제주항공',
    '에어부산',
    '티웨이',
    '에어서울',
    '곽진석 전용기',
  ],
};

const leavingTime = {
  id: '출발시간',
  type: [
    '새벽 00:00~06:00',
    '오전 06:00~12:00',
    '오후 12:00~18:00',
    '야간 18:00~24:00',
  ],
};

const seatType = {
  id: '좌석종류',
  type: ['비지니스석', '특가석', '할인석', '일반석'],
};

const AirLine = styled.main`
  width: 100vw;
  height: auto;
  padding-bottom: 15px;
  background-color: #f5f6f7;
`;

const AirLineListMain = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1064px;
  height: auto;
  margin: 10px auto 0 auto;
  padding-bottom: 15px;
`;

const LeftSideBarInMain = styled.aside`
  width: 240px;
  height: auto;
`;

const RightAirLineList = styled.article`
  width: 784px;
  height: auto;
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

const InformArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: 400;
  }

  .tax {
    color: #848c94;
    font-size: 12px;
  }
`;
const Filter = styled.select`
  width: 190px;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
`;

const SurmmayAirInfrom = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-top: 5px;
  background-color: white;
  border: 0.1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
`;

const AirLineSchedule = styled.span`
  height: 24px;
  margin: 0 10px 0 20px;
  padding: 4.5px;
  border-radius: 2px;
  background-color: white;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  color: #1583da;
  font-size: 13px;
`;

const ToWhere = styled.span`
  font-size: 16px;
  font-weight: 500;
  .fa-long-arrow-alt-right {
    margin: 0 10px;
    color: #a4abb1;
  }
`;

const Day = styled.span`
  margin: 0 20px 0 10px;
  font-size: 12px;
  font-weight: 500;
`;
