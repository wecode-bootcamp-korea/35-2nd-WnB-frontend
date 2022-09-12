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
