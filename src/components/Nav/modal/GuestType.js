import React from 'react';
import styled from 'styled-components';

const GuestType = ({ decreseNum, increseNum, disabled, guest }) => {
  return (
    <ModalGuest>
      <GuestSection>
        <GuestContainer>
          <GuestInfo>
            <Guest>성인</Guest>
            <GuestFilter>만 13세 이상</GuestFilter>
          </GuestInfo>
          <GuestNumber>
            <GuestNumChange onClick={decreseNum} disabled={!disabled}>
              -
            </GuestNumChange>
            <GuestSpan>{guest}</GuestSpan>
            <GuestNumChange onClick={increseNum}>+</GuestNumChange>
          </GuestNumber>
        </GuestContainer>
      </GuestSection>
    </ModalGuest>
  );
};

export default GuestType;

const GuestSection = styled.div`
  display: flex;
  padding: 24px 4px 24px 0px;
`;

const GuestContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 330px;
`;

const GuestInfo = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  gap: 10px;
`;

const Guest = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const GuestFilter = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
`;

const GuestNumber = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  gap: 1rem;
`;

const GuestNumChange = styled.button`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  font-size: 18px;
`;

const GuestSpan = styled.span`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 20px;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  border-radius: 2rem;
  background-color: white;
`;

const ModalGuest = styled(Modal)`
  padding: 20px;
  top: 145px;
  left: 640px;
`;
