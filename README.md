# 위앤비 (We & B)
![img](https://user-images.githubusercontent.com/106301980/189577814-b2496dcf-9b0c-4890-afd5-2c4a238abff5.gif)

## 프로젝트 소개
자신의 방이나 집, 별장 등 사람이 지낼 수 있는 모든 공간을 임대할 수 있는 세계 최대의 숙박 공유 서비스, 에어비앤비를 모티브로 한 프로젝트 입니다.
기존 사이트 '에어비앤비'에서는 모티브만 가져왔을 뿐 개발은 초기 세팅부터 모두 직접 구현하였으며,
이번 프로젝트는 다양한 라이브러리와 API, 스타일 컴포넌트를 최대한 활용하는 것을 목표로 진행하였습니다.

## 개발 인원 및 기간
* 개발 기간 : 2022/8/1 ~ 2022/8/11 (10일)
* 개발 인원 : Frontend 4명, Backend 3명
  * FE : 류승연, 정억화, 정예빈, 최원익(PM)
  * BE : 김도연, 전은형, 조민지

## 사용기술 스택
### Front-end
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React-Router&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> 

### Back-end
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>

### 협업 툴
<img src="https://img.shields.io/badge/slack-4A154B?style=flat-square&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/trello-0052CC?style=flat-square&logo=trello&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white"/>

## 시연영상
[위앤비 프로젝트 시연영상](https://www.youtube.com/watch?v=btDS154C5yg)

## 구현 기능 및 페이지
* Nav (지역, 날짜, 게스트 추가에 따라 해당하는 숙소 목록이 보이도록 검색 기능 구현)
* 메인 페이지 (Swiper slider 라이브러리를 이용한 이미지 슬라이더 구현 및 카테고리를 탭메뉴로 구현)
* 숙소 필터링 기능 (가격, 숙소 유형, 편의시설 등 다양한 옵션을 체크함에 따라 실시간으로 옵션에 해당하는 숙소 개수 출력)
* 소셜 로그인 (카카오 REST API)을 이용한 로그인 페이지
* 구글지도 API를 활용하여 해당 페이지의 숙소목록을 지도마커로 가격이 표기되도록 구현
* 숙소 상세 페이지 (datepicker를 활용한 캘린더에서 날짜 선택 후 예약 기능 구현)
* 예약 목록 및 상세페이지 (fetch - delete 메소드를 활용하여 예약 취소 기능 구현)

## 담당하였던 Part
* Nav, 숙소 필터링 기능 담당
* useNavigate 응용 필터 데이터 백엔드 API 로 전달
* Date picker 활용 날짜예약 구현
* material UI 활용 숙소의 가격, 종류 등 필터입력 구현
* useLocation 의 pathname을 응용하여 조건부 Nav 구현
* useEffect의 의존성 배열을 활용하여 실시간 필터링된 데이터 렌더링

## 구현 시 어려웠던 부분
1. Nav 구현 중 로그인, 회원가입 등 옵션을 선택할 수 있는 프로필 모달창을 만들었어야 했는데, 로그인 버튼을 클릭할 시 다른 모달창의 overlay 속성에 의해 로그인이 눌리지 않고
   모달창이 닫히는 현상이 발생하였습니다. 처음에는 프로필 모달창(로그인 하기 버튼이있는)의 z-index 값을 더 높혀서 처리하려 했으나 잘 되지 않았고, 방법을 찾아보다가 로그인 버튼을
   누르는 이벤트가 더 상위인 overlay 클릭 이벤트까지 도달하지 않는다면 될 것이라 판단하였습니다. 상위 이벤트까지 버블링 되는 것을 막는 방법으로 event.stopPropagation()을 
   활용하니 로그인 버튼을 클릭해도 모달창이 닫히지 않게되어 해결되었습니다.
   
```
const ProfileContainer = ({setProfileModal, switchModal}) = {
 return (
    <>
      <ModalOverlayInUserInfo onClick={() => setProfileModal(false)} />
      <ModalProfile onClick={e => e.stopPropagation()}>
        <TopContainer>
          <UserInfoMenu onClick={switchModal}>
            <InfoMenuLogin>로그인</InfoMenuLogin>
          </UserInfoMenu>
          <UserInfoMenu>
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
  }
  ```
2. Nav 의 최대 가로폭이 메인페이지와 상세페이지 간의 차이가 발생하도록 설정을 해야했고, position 역시 기존 fixed 에서 relative 로 변경이 되어야만 했습니다. 
   조건부로 스타일에 변경을 주어야 하겠다 생각하였지만 바로 방법이 떠오르지는 않았습니다. 두 페이지 간의 차이점은 URL 주소에서 나타난다는 점을 착안하여서 만일 주소에
   상세페이지의 라우트 주소인 '/detail' 이 마지막에 pathname 으로 존재하는지의 여부를 조건으로 걸어서 스타일을 변경하도록 로직을 구성하고자 하였습니다.
   
   다만 처음에 이렇게 적용을 하니 문제가 발생하였는데, 처음 로직을 구성할때는 pathname 이 완전히 '/detail' 경우에 한해서 스타일을 적용하도록 작성하였기 때문에, 각각의
   숙소에 대한 pathname '/detail/1,2'... 등 변경되는 상세페이지에 대해서는 반응하지 못하였습니다. 좀 더 고민을 하다가 pathname 에 '/detail' 이 포함되어 있다면 
   스타일을 적용하는 방식으로 전환하여 해결하였습니다.
```
const BeforeSearch = ({
  startDate,
  endDate,
  location,
  guest,
  
	// 생략
    
  modalIsOpen,
  setModalIsOpen,
  switchModal,
  reroad,
}) => {
  let uselocation = useLocation();
  let is_detail = uselocation.pathname;

  // 생략

  return (
    <SectionBefore
      className={toggleNavbar ? 'toggle_open' : null}
      detail={is_detail}
    >
      <OnClickSearchSection // 포함여부를 따진다. 포함하면 클래스 'detail_width' 적용
        className={is_detail.includes('detail') ? 'detail_width' : null}
      >
        <TopNavSection>
          <LogoContainer onClick={reroad}>
          
          // 생략
          
   )
   
 const SectionBefore = styled.div`
  position: ${props => 
    props.detail.includes('/detail') ? 'relative' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  opacity: 0;
  z-index: 102;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

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
    padding: 0;
    max-width: 1170px;
  }
`;
```
3. filter 컴포넌트를 작성할때

