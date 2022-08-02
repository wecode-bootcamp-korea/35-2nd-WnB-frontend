import React from 'react';
import styled from 'styled-components';

const FilterButton = ({ handleFilterModal }) => {
  return (
    <FilterBtn onClick={handleFilterModal}>
      <span>
        <img src="/images/filter.png" alt="filter" />
        필터
      </span>
    </FilterBtn>
  );
};

export default FilterButton;

const FilterBtn = styled.button`
  display: inline-flex;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  span {
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    font-weight: 600;
    font-family: Pretendard Variable;

    img {
      width: 16px;
      margin-right: 4px;
    }
  }
`;
