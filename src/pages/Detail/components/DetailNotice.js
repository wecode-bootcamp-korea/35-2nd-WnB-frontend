import React from 'react';
import styled from 'styled-components';

const DetailNotice = () => {
  return (
    <DetailNotices>
      <NoticeH1>알아두어야 할 사항</NoticeH1>
      <NoticeContainer>
        <NoticeUl>
          <NoticeLiFirst>숙소 이용규칙</NoticeLiFirst>

          {NOTICEDATA.map((els, idx) => {
            let { iconClass, txt } = els;
            return (
              <NoticeLi key={idx}>
                <i className={`fa-solid fa-${iconClass}`} />
                {txt}
              </NoticeLi>
            );
          })}
        </NoticeUl>
        <NoticeUl>
          <NoticeLiFirst>건강과 안전</NoticeLiFirst>
          {NOTICEDATA1.map((els, idx) => {
            let { iconClass, txt } = els;
            return (
              <NoticeLi key={idx}>
                <i className={`fa-solid fa-${iconClass}`} />
                {txt}
              </NoticeLi>
            );
          })}
        </NoticeUl>
        <NoticeUl>
          <NoticeLiFirst>환불 규정책</NoticeLiFirst>
          <NoticeLi>
            <i className="fa-solid fa-money-bill" />
            9월 12일 전까지 무료로 취소하실 수 있습니다.
          </NoticeLi>
        </NoticeUl>
      </NoticeContainer>
    </DetailNotices>
  );
};

const DetailNotices = styled.div`
  width: 100%;
  margin-bottom: 50px;
  padding: 40px 10px;
  border-top: 1px solid #eee;
`;

const NoticeH1 = styled.h1`
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoticeUl = styled.ul`
  margin-top: 20px;
`;

const NoticeLiFirst = styled.li`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
  color: rgb(34, 34, 34);
`;

const NoticeLi = styled.li`
  line-height: 30px;

  i {
    margin-right: 10px;
  }
`;

export default DetailNotice;

const NOTICEDATA = [
  { iconClass: 'clock', txt: '체크인: 오후 5:00 이후' },
  { iconClass: 'clock', txt: '체크아웃 시간: 오전 11:00' },
  { iconClass: 'door-open', txt: '키패드(으)로 셀프 체크인' },
  { iconClass: 'smoking', txt: '흡연 금지' },
  { iconClass: 'paw', txt: '반려동물 동반 불가' },
];

const NOTICEDATA1 = [
  {
    iconClass: 'mask-face',
    txt: '에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.',
  },
  { iconClass: 'triangle-exclamation', txt: '일산화탄소 경보기' },
  { iconClass: 'triangle-exclamation', txt: '화재경보기' },
];
