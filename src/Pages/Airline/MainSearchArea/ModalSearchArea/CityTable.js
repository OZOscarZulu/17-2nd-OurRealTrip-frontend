import React, { Component } from 'react';
import styled from 'styled-components';

class CityTable extends Component {
  render() {
    const {
      city1,
      city2,
      city3,
      city4,
      city5,
      city6,
      city7,
      city8,
      city9,
      city10,
      city11,
      city12,
      type,
      eng1,
      eng2,
      eng3,
      eng4,
      eng5,
      eng6,
      eng7,
      eng8,
      eng9,
      eng10,
      eng11,
      eng12,
      handleChangeCountryInput,
    } = this.props;
    return (
      <Table>
        <CategoryCity>{type}</CategoryCity>
        <City>
          <div className={!city5 ? '0' : 'first'}>
            <span
              id={city1 + `(${eng1})`}
              onClick={e => handleChangeCountryInput(e)}
            >
              {city1}
              <span className="hidden">{eng1}</span>
            </span>
            <span
              id={city2 + `(${eng2})`}
              onClick={e => handleChangeCountryInput(e)}
            >
              {city2}
              <span className="hidden">{eng2}</span>
            </span>
            {city3 && (
              <span
                id={city3 + `(${eng3})`}
                onClick={e => handleChangeCountryInput(e)}
              >
                {city3} <span className="hidden">{eng3}</span>
              </span>
            )}
            {city4 && (
              <span
                id={city4 + `(${eng4})`}
                onClick={e => handleChangeCountryInput(e)}
                className="lastCity"
              >
                {city4} <span className="hidden">{eng4}</span>
              </span>
            )}
          </div>

          {city5 && (
            <div>
              {city5 && (
                <span
                  id={city5 + `(${eng5})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city5} <span className="hidden">{eng5}</span>
                </span>
              )}
              {city6 && (
                <span
                  id={city6 + `(${eng6})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city6} <span className="hidden">{eng6}</span>
                </span>
              )}
              {city7 && (
                <span
                  id={city7 + `(${eng7})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city7} <span className="hidden">{eng7}</span>
                </span>
              )}
              {city8 && (
                <span
                  id={city8 + `(${eng8})`}
                  onClick={e => handleChangeCountryInput(e)}
                  className="lastCity"
                >
                  {city8} <span className="hidden">{eng8}</span>
                </span>
              )}
            </div>
          )}
          {city9 && (
            <div className="last">
              {city9 && (
                <span
                  id={city9 + `(${eng9})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city9} <span className="hidden">{eng9}</span>
                </span>
              )}
              {city10 && (
                <span
                  id={city10 + `(${eng10})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city10} <span className="hidden">{eng10}</span>
                </span>
              )}
              {city11 && (
                <span
                  id={city11 + `(${eng11})`}
                  onClick={e => handleChangeCountryInput(e)}
                >
                  {city11} <span className="hidden">{eng11}</span>
                </span>
              )}
              {city12 && (
                <span
                  id={city12 + `(${eng12})`}
                  onClick={e => handleChangeCountryInput(e)}
                  className="lastCity"
                >
                  {city12} <span className="hidden">{eng12}</span>
                </span>
              )}
            </div>
          )}
        </City>
      </Table>
    );
  }
}

export default CityTable;

const Table = styled.div`
  display: flex;
  align-items: center;
  width: 681px;
  height: auto;
  border-bottom: 0.1px solid #e3e3e3;
`;

const CategoryCity = styled.div`
  width: 84px;
  max-height: 123px;
  font-size: 13px;
`;

const City = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 300;

  div {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
    margin-left: 30px;

    span {
      width: 150px;
      cursor: pointer;

      .hidden {
        display: none;
        cursor: none;
      }
    }

    .lastCity {
      width: 80px;
    }
  }

  .first {
    border-bottom: 0.1px solid #e3e3e3;
  }

  .last {
    border-top: 0.1px solid #e3e3e3;
  }
`;
