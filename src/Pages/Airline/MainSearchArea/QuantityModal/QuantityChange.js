import React, { Component } from 'react';
import QuantityValue from './QuantityValue';
import styled from 'styled-components';

class QuantityChange extends Component {
  render() {
    const {
      adult,
      child,
      baby,
      standardPassenger,
      handleChangeQuantityValue,
      adultDefault,
      isAddOn,
    } = this.props;

    return (
      <Changer>
        {standardPassenger.map((data, idx) => {
          return (
            <CenterArray key={data.type}>
              <div>
                <span className="type">{data.type}</span>
                <span className="text">{data.text}</span>
              </div>
              <div className="icons">
                <i
                  onClick={e => handleChangeQuantityValue(e)}
                  className="fas fa-minus"
                  id={data.type + '-'}
                />

                <QuantityValue
                  idx={idx}
                  type={data.type}
                  adult={adult}
                  child={child}
                  baby={baby}
                  adultDefault={adultDefault}
                  isAddOn={isAddOn}
                />

                <i
                  onClick={e => handleChangeQuantityValue(e)}
                  className="fas fa-plus"
                  id={data.type + '+'}
                />
              </div>
            </CenterArray>
          );
        })}
      </Changer>
    );
  }
}

export default QuantityChange;

const Changer = styled.div`
  display: flex;
  flex-direction: column;
  height: 178px;
  margin-top: -10px;
  padding: 0 24px;
  border-bottom: 0.1px solid #ced4da;
`;

const CenterArray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  margin: 10px 0;

  div {
    display: flex;
    flex-direction: column;

    .type {
      font-size: 16px;
    }

    .text {
      color: #adb5bd;
      font-size: 12px;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 16px;
      margin: 0 15px;
    }
    i {
      padding: 8px;
      font-size: 12px;
      border-radius: 50%;
      cursor: pointer;
    }
    .fa-minus {
      color: #ced4da;
      border: 0.1px solid #ced4da;
    }

    .fa-plus {
      color: #51abf3;
      border: 0.1px solid #51abf3;
    }
  }
`;
