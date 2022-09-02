import React from 'react';
import styled from 'styled-components';
import BedRoom from './component/BedRoom';
import Bed from './component/Bed';
import BathRoom from './component/BathRoom';

const BedCheck = ({
  bedroomValue,
  changeBedroomValue,
  bedValue,
  changeBedValue,
  bathroomValue,
  changeBathroomValue,
}) => {
  return (
    <MiddleContainer>
      <MiddleInnerContainer>
        <MiddleTitle>침실과 침대</MiddleTitle>
        <AmenitiesSubTitle>침실</AmenitiesSubTitle>
        <WidthContents>
          <BedRoom
            bedroomValue={bedroomValue}
            changeBedroomValue={changeBedroomValue}
          />
        </WidthContents>
        <AmenitiesSubTitle>침대</AmenitiesSubTitle>
        <WidthContents>
          <Bed bedValue={bedValue} changeBedValue={changeBedValue} />
        </WidthContents>
        <AmenitiesSubTitle>욕실</AmenitiesSubTitle>
        <WidthContents>
          <BathRoom
            bathroomValue={bathroomValue}
            changeBathroomValue={changeBathroomValue}
          />
        </WidthContents>
      </MiddleInnerContainer>
    </MiddleContainer>
  );
};

export default BedCheck;

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

const AmenitiesSubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;
`;
