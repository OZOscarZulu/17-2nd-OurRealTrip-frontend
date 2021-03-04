import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ModalToWhere from './ModalSearchArea/ModalToWhere';
import QuantityModal from './QuantityModal/QuantityModal';
import Date from './Date/Date';
import styled from 'styled-components';

class Input extends Component {
  state = {
    isModalOn: false,
    isQuantityModalOn: false,
    isAddOn: false,
    defaultValue: '김포(GMP)',
    cityInputValue: '',
    cityInputArrivedValue: '',
    leftCityEng: '',
    arrivedCityEng: '',
    inputTarget: '',
    valueInModalInModal: '',
    adultDefault: 1,
    adult: Number('1'),
    child: Number(''),
    baby: Number(''),
  };

  handleChangeCountryInput = e => {
    this.state.inputTarget === 'arrivedPoint'
      ? this.setState({
          cityInputArrivedValue: e.target.id,
          isModalOn: false,
          arrivedCityEng: e.target.id.substring(
            e.target.id.length - 4,
            e.target.id.length - 1
          ),
        })
      : this.setState({
          defaultValue: '',
          cityInputValue: e.target.id,
          isModalOn: false,
          leftCityEng: e.target.id.substring(
            e.target.id.length - 4,
            e.target.id.length - 1
          ),
        });
  };

  handleModalOn = e => {
    e.target.className === 'fas fa-times' || e.target.id
      ? this.setState({ isModalOn: false })
      : this.setState({ isModalOn: true, inputTarget: e.target.className });
  };

  handleChangeQuantityModal = e => {
    this.setState({ isQuantityModalOn: !this.state.isQuantityModalOn });
  };

  handleChangeQuantityValue = e => {
    const { id } = e.target;
    const { adult, child, baby } = this.state;

    if (id === '성인+' && adult < 9) {
      this.setState({ adult: adult + 1, isAddOn: true });
    }
    if (id === '성인-' && adult > 1) {
      this.setState({ adult: adult - 1 });
    }

    if (id === '소아+' && child < 9) {
      this.setState({ child: child + 1 });
    }
    if (id === '소아-' && child > 0) {
      this.setState({ child: child - 1 });
    }
    if (id === '유아+' && baby < 9) {
      this.setState({ baby: baby + 1 });
    }
    if (id === '유아-' && baby > 0) {
      this.setState({ baby: baby - 1 });
    }
  };

  goToList = () => {
    const {
      leftCityEng,
      arrivedCityEng,
      adult,
      child,
      baby,
      defaultValue,
      adultDefault,
    } = this.state;
    this.props.history.push({
      pathname: '/airlinelist',
      state: {
        defaultValue,
        leftCityEng,
        arrivedCityEng,
        total: adult + child + baby,
        adultDefault,
      },
    });
  };

  render() {
    const { trevelType } = this.props;
    const {
      defaultValue,
      cityInputValue,
      cityInputArrivedValue,
      adult,
      child,
      baby,
      adultDefault,
      isAddOn,
    } = this.state;

    return (
      <div className="input">
        <InputContainer>
          <LocationInput
            color={cityInputArrivedValue}
            weight={cityInputArrivedValue}
          >
            <div onClick={this.handleModalOn} className="leftPoint">
              {defaultValue}
              {cityInputValue}
            </div>
            <span>
              <button>
                <i className="fas fa-exchange-alt" />
              </button>
            </span>
            <div onClick={this.handleModalOn} className="arrivedPoint">
              {!cityInputArrivedValue
                ? trevelType.arrivedLocation
                : cityInputArrivedValue}
            </div>
          </LocationInput>

          <DayInput>
            <i className="far fa-calendar-alt chalender" />
            <Date />
          </DayInput>
          <Quantity
            onClick={e => this.handleChangeQuantityModal(e)}
            className="quantity"
            id="quantity"
          >
            <span>
              <i className="far fa-user" />
              승객
              {adult || child || baby ? adult + child + baby : adultDefault}
              명, 전체
            </span>
          </Quantity>
          <SearchBox onClick={this.goToList}>검색</SearchBox>
        </InputContainer>
        {this.state.isModalOn && (
          <ModalToWhere
            handleModalOn={this.handleModalOn}
            handleChangeCountryInput={this.handleChangeCountryInput}
          />
        )}
        {this.state.isQuantityModalOn && (
          <QuantityModal
            handleChangeQuantityModal={this.handleChangeQuantityModal}
            handleChangeQuantityValue={this.handleChangeQuantityValue}
            adult={adult}
            child={child}
            baby={baby}
            adultDefault={adultDefault}
            isAddOn={isAddOn}
          />
        )}
        <SideMenu>
          <span>{trevelType.differenceWay}</span>
        </SideMenu>
      </div>
    );
  }
}

export default withRouter(Input);

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

const LocationInput = styled.div`
  display: flex;
  align-items: center;
  width: 422px;
  height: 48px;
  background-color: white;
  border: none;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 1s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1px 3px rgb(132 140 148 / 50%);
    transition: all 1s;
  }

  div {
    display: flex;
    align-items: center;
    width: 195px;
    height: 45px;
    margin-bottom: 2px;
    padding-left: 10px;
    font-weight: 500;
  }

  .arrivedPoint {
    margin-left: -5px;
    color: ${props => (props.color ? 'black' : '#c3c3c3')};
    font-weight: ${props => (props.color ? '500' : '400')};
  }

  span {
    width: 31px;
    height: 31px;
    background-color: white;

    button {
      width: 25px;
      height: 25px;
      margin-top: 3px;
      border: none;
      border-radius: 2px;

      &:focus {
        outline: none;
      }
      .fa-exchange-alt {
        color: #a4abb1;
      }
    }
  }
`;

const DayInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 288px;
  height: 48px;
  margin-left: 4px;
  background-color: white;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1px 3px rgb(132 140 148 / 50%);
    transition: all 1s;
  }

  .chalender {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    color: #51abf3;
  }

  /* div {
    width: 106px;
    height: 45px;
    padding: 12px 0 0 7px;
    border: none;
    box-shadow: none;
    color: #c3c3c3;

    &:focus {
      border: none;
      outline: none;
    }
  } */
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 48px;
  margin-left: 4px;
  background-color: white;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 1px 3px rgb(132 140 148 / 50%);
    transition: all 1s;
  }

  span {
    display: flex;
    align-items: center;
    width: 132px;
    height: 48px;
    padding-left: 10px;
    font-weight: 500;
  }

  .fa-user {
    margin-right: 5px;
    color: #51abf3;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 48px;
  margin: 0 0 3px 4px;
  background-color: #51abf3;
  color: white;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #0095f6;
    box-shadow: 0 0 0px 0.1px rgb(132 140 148 / 30%);
    transition: 0.2s;
  }
`;

const SideMenu = styled.div`
  width: 200px;
  height: 25px;
  margin-top: 15px;
  color: white;
  font-size: 14px;
`;
