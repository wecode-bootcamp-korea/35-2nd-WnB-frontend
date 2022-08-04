import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import FilterBtn from '../List/FilterButton';

const MainCategory = () => {
  const [scrollY, setScrollY] = useState(0);
  const isBtnActive = scrollY > 30;
  const stickyCate = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyCate);
    return () => {
      window.removeEventListener('scroll', stickyCate);
    };
  }, []);

  const [category, setCatecory] = useState([]);
  useEffect(() => {
    fetch('/data/mainMockData.json')
      .then(res => res.json())
      .then(data => {
        const cateList = data.map(({ category }) => category);
        const setCateList = cateList.filter((data, idx, arr) => {
          return arr.findIndex(item => item.name === data.name) === idx;
        });
        setCatecory(setCateList);
      });
  }, []);

  return (
    <MainTop className={isBtnActive ? 'active' : ''}>
      <CateWrap>
        <CateItem>
          {category.map(({ id, img_url, name }) => {
            return (
              <Cate key={id}>
                <img src={img_url} alt={name} />
                <span>{name}</span>
              </Cate>
            );
          })}
        </CateItem>
      </CateWrap>
      <FilterBtn />
    </MainTop>
  );
};

export default MainCategory;

const MainTop = styled.div`
  ${variables.flex()}
  position: sticky;
  top: 20px;
  left: 0;
  width: 100%;
  background: #fff;
  padding-top: 80px;
  z-index: 3;
  transition: all 0.2s ease;

  &.active {
    top: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }
`;

const CateWrap = styled.div`
  padding: 0 40px;
`;

const CateItem = styled.div`
  ${variables.flex()}
`;

const Cate = styled.div`
  ${variables.flex('column')}
  position:relative;
  width: 60px;
  margin: 12px 32px 0 0;
  padding: 4px 0 14px;
  transition: all 0.2s ease;

  img {
    width: 32px;
    padding-bottom: 8px;
    filter: contrast(40%);
  }
  span {
    color: #717171;
    font-size: 12px;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: all 0.2s ease;
  }

  &:hover::after {
    background-color: #ddd;
  }
`;
