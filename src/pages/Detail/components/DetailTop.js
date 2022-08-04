import React from 'react';
import styled from 'styled-components';

const DetailTop = ({ room_name, category, address, detail_address }) => {
  return (
    <TitleContainer>
      <TitleLeft>
        <Title>
          {room_name} ,{category}
        </Title>
        <SubTitle>
          {detail_address},{address}
        </SubTitle>
      </TitleLeft>
      <TitleRight>
        <TitleButton>
          <i className="fa-solid fa-arrow-up-from-bracket" />
          <span>공유하기</span>
        </TitleButton>
        <TitleButton>
          <i className="fa-solid fa-heart" />
          <span>저장</span>
        </TitleButton>
      </TitleRight>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
`;

const TitleLeft = styled.div`
  width: 100%;
`;

const TitleRight = styled.div`
  width: 230px;
`;

const TitleButton = styled.div`
  float: left;
  margin-right: 20px;
  i {
    margin-right: 15px;
  }
  span {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: underline;
`;

export default DetailTop;
