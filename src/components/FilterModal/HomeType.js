import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Checkbox, FormGroup } from '@mui/material';

const HomeType = ({ stayData, setStayData, changeHandle }) => {
  useEffect(() => {
    setStayData(StayData);
  }, []);

  return (
    <MiddleContainer>
      <MiddleInnerContainer>
        <MiddleTitle>숙소 유형</MiddleTitle>
        <WidthContents>
          <FormGroup>
            <InputSection>
              {stayData.map(data => {
                return (
                  <InnerInput key={data.id}>
                    <Checkbox
                      checked={data.isChecked}
                      name={data.name}
                      onChange={changeHandle}
                      sx={{
                        '&.Mui-checked': {
                          color: 'black',
                        },
                      }}
                    />
                    <InnerTextBox>
                      <InnerTitle>{data.name}</InnerTitle>
                      <InnerSubtitle>{data.subTitle}</InnerSubtitle>
                    </InnerTextBox>
                  </InnerInput>
                );
              })}
            </InputSection>
          </FormGroup>
        </WidthContents>
      </MiddleInnerContainer>
    </MiddleContainer>
  );
};

export default HomeType;

const StayData = [
  {
    id: 1,
    name: '집 전체',
    subTitle: '단독으로 사용하는 공간 전체',
    isChecked: false,
  },
  {
    id: 2,
    name: '개인실',
    subTitle: '집 또는 호텔의 개인실과 일부 공용 공간',
    isChecked: false,
  },
  {
    id: 3,
    name: '다인실',
    subTitle: '다른 사람들과 함께 사용하는 다인실 및 공용 공간',
    isChecked: false,
  },
];

const TopTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
`;

const MiddleTitle = styled(TopTitle)`
  padding-bottom: 24px;
`;

const WidthContents = styled.div`
  display: flex;
  justify-content: center;
  width: 705px;
`;

const MiddleContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  padding: 0 24px;
  gap: 10px;
`;

const MiddleInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 32px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const InputSection = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  flex-wrap: wrap;
`;

const InnerInput = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 312.5px;
  gap: 10px;
  padding: 10px 0px;
`;

const InnerTextBox = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  gap: 7px;
`;

const InnerTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const InnerSubtitle = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
