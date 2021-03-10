import React, { Component } from 'react';
import QuantityChange from './QuantityChange';
import styled from 'styled-components';

class QuantityModal extends Component {
  render() {
    const {
      adult,
      child,
      baby,
      handleChangeQuantityValue,
      adultDefault,
      isAddOn,
    } = this.props;
    return (
      <Quantity>
        <Passenger>
          <span>{`인원 & 좌석등급`}</span>
          <i
            onClick={e => this.props.handleChangeQuantityModal(e)}
            class="fas fa-times"
          ></i>
        </Passenger>
        <QuantityChange
          standardPassenger={standardPassenger}
          handleChangeQuantityValue={handleChangeQuantityValue}
          adult={adult}
          child={child}
          baby={baby}
          adultDefault={adultDefault}
          isAddOn={isAddOn}
        />
        <ChooseSeatType>
          <div>
            <span>
              <input type="radio" />
              {seatType[0]}
            </span>

            <span>
              <input type="radio" />
              {seatType[1]}
            </span>
          </div>
          <div>
            <span>
              <input type="radio" />
              {seatType[2]}
            </span>

            <span>
              <input type="radio" />
              {seatType[3]}
            </span>
          </div>
        </ChooseSeatType>
      </Quantity>
    );
  }
}

export default QuantityModal;

const standardPassenger = [
  { type: '성인', text: '만 12세 이상' },
  { type: '소아', text: '만 12세 미만' },
  { type: '유아', text: '24개월 미만' },
];

const seatType = ['일반석', '프리미엄 일반석', '비즈니스석', '일등석'];

const Quantity = styled.div`
  position: absolute;
  right: 0px;
  width: 346px;
  height: 321px;
  border-radius: 2px;
  background-color: white;
`;

const Passenger = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 20px 24px;
  font-size: 14px;

  i {
    color: #adb5bd;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #51abf3;
    }
  }
`;

const ChooseSeatType = styled.div`
  display: flex;
  padding: 20px 24px;
  height: 99px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: -15px 0px;
    margin-right: 20px;

    span {
      display: flex;
      font-size: 16px;

      input {
        width: 22px;
        height: 20.5px;
        margin: 0 10px 0 0;
        padding: 0;
      }
    }
  }
`;
