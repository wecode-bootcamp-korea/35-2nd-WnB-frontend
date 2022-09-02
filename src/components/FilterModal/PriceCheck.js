import React from 'react';
import styled from 'styled-components';
import AirbnbSlider from './component/AirbnbSlider';

const PriceCheck = ({
  minimum,
  maximum,
  setValue,
  handleChange,
  value,
  average,
}) => {
  return (
    <TopContainer>
      <TopInnerContainer>
        <TopTitle>가격 범위</TopTitle>
        <SubTitle>{`평균 1박 요금은 ₩${average.toLocaleString()}입니다`}</SubTitle>
        <WidthContents>
          <AirbnbSlider
            minValue={minimum}
            maxValue={maximum}
            setValue={setValue}
            handleChange={handleChange}
            value={value}
          />
        </WidthContents>

        <PriceContainer>
          <PriceWrapContainer>
            <PriceTitle>최저 요금</PriceTitle>
            <PriceInputBox>
              <span>₩</span>
              <input value={value && value.value[0]} />
            </PriceInputBox>
          </PriceWrapContainer>
          <div>-</div>
          <PriceWrapContainer>
            <PriceTitle>최고 요금</PriceTitle>
            <PriceInputBox>
              <span>₩</span>
              <input value={value && value.value[1]} />
            </PriceInputBox>
          </PriceWrapContainer>
        </PriceContainer>
      </TopInnerContainer>
    </TopContainer>
  );
};

export default PriceCheck;

const TopContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  padding: 0 24px;
  gap: 10px;
  margin-top: 60px;
`;

const TopInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 32px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TopTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 40px;
`;

const WidthContents = styled.div`
  display: flex;
  justify-content: center;
  width: 705px;
`;

// 가격 컨테이너

const PriceContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100%;
  gap: 5px;
`;

const PriceWrapContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 10px;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
`;

const PriceTitle = styled.div`
  width: 305px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
`;

const PriceInputBox = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 100%;
  gap: 3px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);

  input {
    width: 100%;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`;
