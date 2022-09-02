import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Checkbox, FormGroup } from '@mui/material';

const AmentiesCheck = ({ setAmenitiesData, amenitiesData, changeHandle }) => {
  useEffect(() => {
    setAmenitiesData(Amenities);
  }, []);

  return (
    <BottomContainer>
      <BottomInnerContainer>
        <MiddleTitle>편의시설</MiddleTitle>
        <AmenitiesSubTitle>필수</AmenitiesSubTitle>
        <WidthContents>
          <FormGroup>
            <InputSection>
              {amenitiesData.map((data, i) => {
                return (
                  <AmenitiesInput key={data.id}>
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
                    <AmenitiesTestBox>
                      <InnerTitle>{data.name}</InnerTitle>
                    </AmenitiesTestBox>
                  </AmenitiesInput>
                );
              })}
            </InputSection>
          </FormGroup>
        </WidthContents>
      </BottomInnerContainer>
    </BottomContainer>
  );
};

export default AmentiesCheck;

const Amenities = [
  { id: 1, name: '아침 식사', isChecked: false },
  { id: 2, name: '실내 벽난로', isChecked: false },
  { id: 3, name: '흡연 가능', isChecked: false },
  { id: 4, name: '무선 인터넷', isChecked: false },
  { id: 5, name: '주방', isChecked: false },
  { id: 6, name: '난방', isChecked: false },
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

const BottomContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  padding: 0 24px;
  gap: 10px;
  margin-bottom: 60px;
`;

const BottomInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 32px 0;
  gap: 10px;
`;

const AmenitiesSubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;
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

const AmenitiesInput = styled(InnerInput)`
  gap: 5px;
  padding: 0;
`;

const InnerTextBox = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  gap: 7px;
`;

const AmenitiesTestBox = styled(InnerTextBox)`
  gap: 3px;
`;

const InnerTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
