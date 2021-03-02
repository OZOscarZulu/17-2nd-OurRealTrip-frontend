import React, { Component } from 'react';
import styled from 'styled-components';
import CityTable from './CityTable';

class ModalMap extends Component {
  render() {
    const { allOfCity, handleChangeCountryInput } = this.props;
    return (
      <TableContainer>
        {allOfCity.map((data, idx) => {
          return (
            <CityTable
              key={idx}
              type={data.type}
              city1={data.city[0]}
              city2={data.city[1]}
              city3={data.city[2]}
              city4={data.city[3]}
              city5={data.city[4]}
              city6={data.city[5]}
              city7={data.city[6]}
              city8={data.city[7]}
              city9={data.city[8]}
              city10={data.city[9]}
              city11={data.city[10]}
              city12={data.city[11]}
              eng1={data.engName[0]}
              eng2={data.engName[1]}
              eng3={data.engName[2]}
              eng4={data.engName[3]}
              eng5={data.engName[4]}
              eng6={data.engName[5]}
              eng7={data.engName[6]}
              eng8={data.engName[7]}
              eng9={data.engName[8]}
              eng10={data.engName[9]}
              eng11={data.engName[10]}
              eng12={data.engName[11]}
              handleChangeCountryInput={handleChangeCountryInput}
            />
          );
        })}
      </TableContainer>
    );
  }
}

export default ModalMap;

const TableContainer = styled.div`
  display: absolute;
  z-index: 1;
  width: 681px;
  height: auto;
  margin: 0 auto;
  border-top: 0.1px solid #e3e3e3;
`;
