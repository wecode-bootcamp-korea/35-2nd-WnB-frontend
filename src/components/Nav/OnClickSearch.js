import React from 'react';
import Search from './Search';
import styled from 'styled-components';
import { fadeIn, shadow } from '../../styles/animation';
import ProfileContainer from './modal/ProfileContainer';
import ProfileLoginContainer from './modal/ProfileLoginContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clickSearchBar, clickUserInfoButton } from '../../reducers/nav';

const OnClickSearch = ({
  startDate,
  endDate,
  location,
  guest,
  setLocation,
  onChange,
  increseNum,
  decreseNum,
  modalRef,
  reroad,
}) => {
  const dispatch = useDispatch();
  const { isToken, isClickSearch, isClickUserInfoButton } = useSelector(
    state => state.nav
  );
  let uselocation = useLocation();
  let is_detail = uselocation.pathname;

  const swtichProfileModal = {
    1: <ProfileContainer />,
    2: <ProfileLoginContainer />,
  };

  return (
    <Section className={isClickSearch ? null : 'toggle_open zIndex'}>
      {!isClickSearch ? (
        <ModalOverLay
          onClick={() => dispatch(clickSearchBar())}
          ref={modalRef}
        />
      ) : null}
      <OnClickSearchSection
        className={is_detail === '/detail' ? 'detail_width' : null}
      >
        <TopNavSection>
          <LogoContainer onClick={reroad}>
            <Logo src="/images/we&B_logo.png" alt="logo" />
          </LogoContainer>
          <MenuContainer>
            <Menu>숙소</Menu>
            <Menu>체험</Menu>
            <OnlineMenu>온라인 체험</OnlineMenu>
          </MenuContainer>
          <UserSection>
            <UserTextContainer>호스트되기</UserTextContainer>
            <UserIconContainer>
              <i className="bx bx-world" />
            </UserIconContainer>
            <InfoPositionSet>
              <UserInfoContainer
                onClick={() => dispatch(clickUserInfoButton())}
              >
                <UserInfoMenu>
                  <i className="bx bx-menu" />
                </UserInfoMenu>
                <UseerInfoIcon>
                  <i className="bx bxs-user-circle" />
                </UseerInfoIcon>
              </UserInfoContainer>
              {isClickUserInfoButton &&
                (isToken ? swtichProfileModal['2'] : swtichProfileModal['1'])}
            </InfoPositionSet>
          </UserSection>
        </TopNavSection>
        <BottomNavSection>
          <Search
            startDate={startDate}
            endDate={endDate}
            location={location}
            guest={guest}
            setLocation={setLocation}
            onChange={onChange}
            increseNum={increseNum}
            decreseNum={decreseNum}
            modalRef={modalRef}
          />
        </BottomNavSection>
      </OnClickSearchSection>
    </Section>
  );
};

export default OnClickSearch;

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &.zIndex {
    z-index: 102;
  }

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

  &.detail_width {
    padding: 0px;
    max-width: 1170px;
  }
`;

const TopNavSection = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  padding: 20px;
`;

const BottomNavSection = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  padding: 0px 0px 15px 0px;
`;

const LogoContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 437px;
`;

const Logo = styled.img`
  background-color: white;
  width: 102px;
  height: 50px;
  object-fit: contain;
`;

const MenuContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  gap: 2rem;
  width: 504px;
`;

const Menu = styled.div`
  position: relative;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    top: 27px;
    right: 0px;
    background-color: #000;
    width: 27px;
    height: 2px;
    opacity: 0;
  }

  &:hover {
    &::after {
      animation-duration: 0.25s;
      animation-timing-function: ease-out;
      animation-name: ${fadeIn};
      animation-fill-mode: both;
    }
  }
`;

const OnlineMenu = styled(Menu)`
  &::after {
    top: 27px;
    right: 0px;
    width: 73px;
  }
`;

const UserSection = styled.div`
  ${props => props.theme.variables.flex('', 'flex-end', 'center')}
  width: 437px;
`;

const UserTextContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 94px;
  padding: 14px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 21px;

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
  cursor: pointer;

  &:hover {
    background-color: white;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${shadow};
    animation-fill-mode: both;
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

const ModalOverLay = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;
