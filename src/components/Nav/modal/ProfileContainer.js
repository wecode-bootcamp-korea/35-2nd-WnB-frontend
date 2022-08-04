import React from 'react';
import styled from 'styled-components';

const ProfileContainer = ({
  profileModal,
  setProfileModal,
  modalIsOpen,
  setModalIsOpen,
  switchModal,
  isToken,
  setIsToken,
}) => {
  const swtichModal = () => {
    setProfileModal(prev => !prev);
    setModalIsOpen(prev => !prev);
  };
  return (
    <>
      <ModalOverlayInUserInfo onClick={() => setProfileModal(false)} />
      <ModalProfile onClick={e => e.stopPropagation()}>
        <TopContainer>
          <UserInfoMenu onClick={switchModal}>
            <InfoMenuLogin>로그인</InfoMenuLogin>
          </UserInfoMenu>
          <UserInfoMenu onClick={swtichModal}>
            <InfoMenuText>회원가입</InfoMenuText>
          </UserInfoMenu>
        </TopContainer>
        <DivLine />
        <BottomContainer>
          <UserInfoMenu>
            <InfoMenuText>숙소 호스트되기</InfoMenuText>
          </UserInfoMenu>
          <UserInfoMenu>
            <InfoMenuText>체험 호스팅하기</InfoMenuText>
          </UserInfoMenu>
          <UserInfoMenu>
            <InfoMenuText>도움말</InfoMenuText>
          </UserInfoMenu>
        </BottomContainer>
      </ModalProfile>
    </>
  );
};

export default ProfileContainer;

const ModalOverlayInUserInfo = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 240px;
  height: auto;
  border-radius: 1rem;
  background-color: white;
`;

const ModalProfile = styled(Modal)`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  gap: 5px;
  top: 170px;
  left: -30px;
  padding: 10px 0px;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 14px;
  z-index: 105;
`;

const TopContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 100%;
  padding: 5px;
  gap: 5px;
`;

const DivLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const BottomContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 100%;
  padding: 5px;
  gap: 5px;
`;

const UserInfoMenu = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const InfoMenuText = styled.span`
  font-weight: 300;
`;

const InfoMenuLogin = styled(InfoMenuText)`
  font-weight: 500;
`;
