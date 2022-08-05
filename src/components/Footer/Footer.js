import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const location = useLocation();

  let isCheckPath = location.pathname === '/';

  return (
    <FooterContainer>
      <Inner path={isCheckPath}>
        <FooterTop>
          <span>© 2022 AirWnB Inc.</span>
          <FooterUl>
            {FOOTERDATA &&
              FOOTERDATA.map((els, idx) => {
                return (
                  <li key={idx}>
                    <i className={`fa-brands fa-${els}`} />
                  </li>
                );
              })}
          </FooterUl>
        </FooterTop>
        <FooterBottom>
          <span>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
            Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke,
            Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자
            등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,
            080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 |
            에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와
            호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비
            플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와
            책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </span>
        </FooterBottom>
      </Inner>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px 0;
  border: 1px solid #eee;
  background-color: white;
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${props => (props.path ? 'none' : '1120px')};
  padding: ${props => (props.path ? '0 80px' : '0')};
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 18px;
  color: rgb(34, 34, 34);
  font-weight: 300;
  padding: 13px 0;
`;

const FooterUl = styled.ul`
  li {
    float: left;
    font-size: 20px;
    margin-right: 7px;
    cursor: pointer;
  }
  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 8px;
    background-color: #e4e8eb;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #eee;
  padding-top: 10px;
  font-size: 10px;
  line-height: 12px;
  color: rgb(113, 113, 113);
  word-break: keep-all;
`;
export default Footer;
const FOOTERDATA = ['facebook', 'instagram', 'twitter', 'youtube'];
