import React from 'react';
import styled from 'styled-components';
import ProfileContainer from './modal/ProfileContainer';
import { fadeIn, shadow } from '../../styles/animation';

const BeforeSearch = ({
  startDate,
  endDate,
  location,
  guest,
  toggleNavbar,
  toggleNav,
  profileModal,
  setProfileModal,
  clickUserInfo,
}) => {
  return (
    <SectionBefore className={toggleNavbar ? 'toggle_open' : null}>
      <OnClickSearchSection>
        <TopNavSection>
          <LogoContainer>
            <Logo src="../images/airbnbLogo.png" alt="logo" />
          </LogoContainer>
          <MenuContainer>
            <SmallSearchBox onClick={toggleNav}>
              <SmallSearchMenuContainer>
                <Menu>
                  {location === '지도표시지역' ? '어디든지' : location}
                </Menu>
              </SmallSearchMenuContainer>
              <Separation />
              <SmallSearchMenuContainer>
                <Menu>
                  {startDate && endDate
                    ? `${
                        startDate.getMonth() + 1
                      }월 ${startDate.getDate()}일 ~ ${
                        endDate.getMonth() + 1
                      }월 ${endDate.getDate()}일`
                    : '언제든 일주일'}
                </Menu>
              </SmallSearchMenuContainer>
              <Separation />
              <SmallSearchMenuContainer>
                <OnlineMenu>
                  {guest !== 0 ? `성인 ${guest}명` : '게스트 추가'}
                </OnlineMenu>
                <SearchCircle>
                  <i class="bx bx-search" />
                </SearchCircle>
              </SmallSearchMenuContainer>
            </SmallSearchBox>
          </MenuContainer>
          <UserSection>
            <UserTextContainer>호스트되기</UserTextContainer>
            <UserIconContainer>
              <i class="bx bx-world" />
            </UserIconContainer>
            <InfoPositionSet>
              <UserInfoContainer onClick={clickUserInfo}>
                <UserInfoMenu>
                  <i class="bx bx-menu" />
                </UserInfoMenu>
                <UseerInfoIcon>
                  <i class="bx bxs-user-circle" />
                </UseerInfoIcon>
              </UserInfoContainer>
              {profileModal ? (
                <ProfileContainer
                  profileModal={profileModal}
                  setProfileModal={setProfileModal}
                />
              ) : null}
            </InfoPositionSet>
          </UserSection>
        </TopNavSection>
      </OnClickSearchSection>
    </SectionBefore>
  );
};

export default BeforeSearch;

const SectionBefore = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  z-index: 102;
  background-color: white;

  &.toggle_open {
    opacity: 1;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: both;
  }
`;

const OnClickSearchSection = styled.div`
  width: 100%;
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const TopNavSection = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  padding: 20px;
  padding-bottom: 10px;
`;

const LogoContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 437px;
`;

const Logo = styled.img`
  width: 102px;
  height: 50px;
  background-color: white;
  object-fit: contain;
`;

const MenuContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  gap: 2rem;
  width: 504px;
`;

const SmallSearchBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  background-color: white;
  width: fit-content;
  height: auto;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &:hover {
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${shadow} !important;
    animation-fill-mode: both;
  }
`;

const SmallSearchMenuContainer = styled.div`
  position: relative;
  ${props => props.theme.variables.flex('', 'center', 'center')}
  padding: 0 16px;
`;

const Separation = styled.div`
  width: 1px;
  height: 23px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const SearchCircle = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: absolute;
  right: 0px;
  width: 32px;
  height: 32px;
  background-color: #ff385c;
  border-radius: 50%;
  font-size: 16px;
  color: white;
`;

const Menu = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: fit-content;
  height: 48px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
`;

const OnlineMenu = styled(Menu)`
  padding-right: 30px;
`;

const UserSection = styled.div`
  ${props => props.theme.variables.flex('', 'flex-end', 'center')}
  width: 437px;
`;

const UserTextContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: 94px;
  padding: 14px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const UserIconContainer = styled(UserTextContainer)`
  width: 46px;
  background-color: white;
  font-size: 18px;
  cursor: pointer;
`;

const UserInfoContainer = styled(UserTextContainer)`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  gap: 0.5rem;
  padding: 5px 5px 5px 12px;
  width: 77px;
  background-color: white;
  margin-left: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: white;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${shadow};
    animation-fill-mode: both;
    cursor: pointer;
  }
`;

const UserInfoMenu = styled.div`
  font-size: 20px;
`;

const UseerInfoIcon = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.3);
`;

const InfoPositionSet = styled.div`
  position: relative;
`;