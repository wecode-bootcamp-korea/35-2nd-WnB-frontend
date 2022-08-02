import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileLoginContainer = ({
  profileModal,
  setProfileModal,
  isToken,
  setIsToken,
  switchModal,
}) => {
  const navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('key');
    alert('로그아웃 되었습니다.');
    setIsToken(false);
    setProfileModal(false);
  };

  const moveToResList = () => {
    navigate('/resList');
    setProfileModal(false);
  };

  return (
    <>
      <ModalOverlayInUserInfo onClick={() => setProfileModal(false)} />
      <ModalProfile onClick={e => e.stopPropagation()}>
        {CONTAINER.map((List, idx) => {
          return (
            <ModalInnerContainer key={idx}>
              {idx === 0 ? (
                <TopContainer>
                  {Object.values(List).map((text, j) => {
                    return (
                      <UserInfoMenu
                        key={j}
                        onClick={
                          j === 2 || j === 3
                            ? j === 3
                              ? switchModal
                              : moveToResList
                            : null
                        }
                      >
                        <InfoMenuLogin>{text}</InfoMenuLogin>
                      </UserInfoMenu>
                    );
                  })}
                </TopContainer>
              ) : (
                <BottomContainer>
                  {Object.values(List).map((text, j) => {
                    return (
                      <UserInfoMenu
                        key={j}
                        onClick={j === 1 ? deleteToken : null}
                      >
                        <InfoMenuText>{text}</InfoMenuText>
                      </UserInfoMenu>
                    );
                  })}
                </BottomContainer>
              )}
              {idx === 2 ? null : <DivLine />}
            </ModalInnerContainer>
          );
        })}
      </ModalProfile>
    </>
  );
};

export default ProfileLoginContainer;

const CONTAINER = [
  {
    1: '메세지',
    2: '알림',
    3: '여행',
    4: '회원정보수정',
  },

  {
    1: '숙소 호스트되기',
    2: '체험 호스팅하기',
    3: '호스트 추천하기',
    4: '계정',
  },

  {
    1: '도움말',
    2: '로그아웃',
  },
];

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
  top: 280px;
  left: -30px;
  padding: 10px 0px;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 14px;
  z-index: 105;
`;

const ModalInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  white-space: nowrap;
  width: 100%;
  font-size: 14px;
  z-index: 105;
`;

const TopContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
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
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
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
