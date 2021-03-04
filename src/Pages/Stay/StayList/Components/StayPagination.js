import React from 'react';
import styled from 'styled-components';
import theme from '../../../../Styles/theme';
const StayPagination = ({ staysPerPage, totalStays, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStays / staysPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <PaginationBar>
        {pageNumbers.map(number => {
          return (
            <li key={number} className="pageItem">
              <button onClick={() => paginate(number)} className="pageLink">
                {number}
              </button>
            </li>
          );
        })}
      </PaginationBar>
    </>
  );
};

export default StayPagination;

const PaginationBar = styled.div`
  ${theme.Flexcenter};
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 100px;

  .pageItem {
    ${theme.Flexcenter};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 5px;

    &:hover {
      background-color: ${theme.Color.blue['light']};
    }

    .pageLink {
      ${theme.Flexcenter};
      text-align: center;
      width: 100%;
      height: 100%;
      color: ${theme.Color.gray['dark']};
      font-size: 15px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }
`;
