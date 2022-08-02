import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const ListPagination = ({ switchPage, countData, roomCount }) => {
  const [number, setNumber] = useState(0);
  const [array, setArray] = useState([]);
  const paginationArray = Array(number).fill(1);
  const paginationNum = Math.floor(roomCount / 10);

  const numToArray = () => {
    console.log(paginationArray);
    setNumber(paginationNum);
    setArray(paginationArray);
  };

  useEffect(() => {
    numToArray();
  }, [roomCount, countData]);

  return (
    <Pagination>
      {/* {array.length > 0
        ? array.map((item, i) => {
            return (
              <li
                onClick={e => {
                  switchPage(e.target.innerHTML - 1);
                }}
              >
                {i}
              </li>
            );
          })
        : null} */}
      <li
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        1
      </li>
      <li
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        2
      </li>
      {/* <li
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        3
      </li>
      <li
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        4
      </li>
      <li
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        5
      </li> */}
    </Pagination>
  );
};
export default ListPagination;
const Pagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  li {
    margin-right: 20px;
    cursor: pointer;
  }
`;
