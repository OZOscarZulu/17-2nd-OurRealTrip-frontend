import React, { Component } from 'react';
import styled from 'styled-components';

class FilterCategoryInSideBar extends Component {
  render() {
    const { category, handleChangeTimeFilter } = this.props;
    return (
      <FilterInSideBar>
        <CategoryName>
          <span>{category.id}</span>
          <span>
            <i className="fas fa-chevron-up" />
          </span>
        </CategoryName>
        {category.id === '항공사' && (
          <Checked>
            <button className="checked">{category.checked}</button>
            <span></span>
            <button className="unChecked">{category.unchecked}</button>
          </Checked>
        )}
        <CheckList>
          {category.type.map((data, idx) => {
            return (
              <div key={idx}>
                <input
                  id={idx}
                  name={data.substring(0, 2)}
                  onChange={e => handleChangeTimeFilter(e)}
                  type="checkbox"
                  defaultChecked={category.id === '출발시간' && 'checked'}
                ></input>
                <span>{data}</span>
              </div>
            );
          })}
        </CheckList>
      </FilterInSideBar>
    );
  }
}

export default FilterCategoryInSideBar;

const FilterInSideBar = styled.div`
  width: 100%;
`;

const CategoryName = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid #e3e3e3;
  font-size: 14px;
  font-weight: 400;
`;

const Checked = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    margin: 10px 10px 0 0;
    padding: 0px;
    border: none;
    color: #52abf3;
    background-color: #f5f6f7;
  }

  .unChecked {
    color: #ced4d9;
  }
`;

const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 25px 0;
  font-weight: 300;

  div {
    display: flex;
    height: 20px;
    margin-top: 8px;

    input {
      width: 20px;
      height: 20px;
      margin: 0;
      padding: 0;
    }

    span {
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;
