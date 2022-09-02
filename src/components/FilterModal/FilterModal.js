import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Checkbox, FormControl, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import AirbnbSlider from './component/AirbnbSlider';
import BedRoom from './component/BedRoom';
import Bed from './component/Bed';
import BathRoom from './component/BathRoom';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { BASE_URL } from '../Config/Config';

const StayData = [
  {
    id: 1,
    name: '집 전체',
    subTitle: '단독으로 사용하는 공간 전체',
    isChecked: false,
  },
  {
    id: 2,
    name: '개인실',
    subTitle: '집 또는 호텔의 개인실과 일부 공용 공간',
    isChecked: false,
  },
  {
    id: 3,
    name: '다인실',
    subTitle: '다른 사람들과 함께 사용하는 다인실 및 공용 공간',
    isChecked: false,
  },
];

const Amenities = [
  { id: 1, name: '아침 식사', isChecked: false },
  { id: 2, name: '실내 벽난로', isChecked: false },
  { id: 3, name: '흡연 가능', isChecked: false },
  { id: 4, name: '무선 인터넷', isChecked: false },
  { id: 5, name: '주방', isChecked: false },
  { id: 6, name: '난방', isChecked: false },
];

const FilterModal = ({
  handleFilterModal,
  isFilterModal,
  setIsFilterModal,
}) => {
  const [stayData, setStayData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [transferUserData, setTransferUserData] = useState([]);
  const [priceSetting, setPriceSetting] = useState([]);
  const [bedroomValue, setBedroomValue] = useState(0);
  const [bedValue, setBedValue] = useState(0);
  const [bathroomValue, setBathroomValue] = useState(0);
  const [average, setAverage] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1);
  const [value, setValue] = useState({
    min: 100,
    max: 100000,
    value: [100, 100000],
  });
  const copyData = useRef();
  const beforeLocation = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(transferUserData);
  console.log(`${BASE_URL}/rooms${location.search}`);

  useEffect(() => {
    setStayData(StayData);
    setAmenitiesData(Amenities);
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/rooms${location.search}`)
      .then(res => res.json())
      .then(data => {
        setTransferUserData(data.result);
        copyData.current = data.result;
        setPriceSetting(data.result);
      });
  }, []);

  useEffect(() => {
    beforeLocation.current = location.search.replace('?', '');
  }, []);

  let minimum =
    priceSetting.length > 0
      ? Math.min(...priceSetting.map(data => data.room_price))
      : 100;

  let maximum =
    priceSetting.length > 0
      ? Math.max(...priceSetting.map(data => data.room_price))
      : 1000000;

  // 제 랜더링 용 useEffect
  useEffect(() => {
    selectPrice();
    averageCalculate();
  }, [priceSetting]);

  // 모달창 고정
  useLockBodyScroll();

  //최소가격, 최대가격 결정
  const selectPrice = () => {
    if (priceSetting.length) {
      setMinValue(minimum);
      setMaxValue(maximum);
      setValue(prev => ({
        ...prev,
        min: minimum,
        max: maximum,
        value: [minimum, maximum],
      }));
    }
  };

  //평균값 계산
  const averageCalculate = () => {
    if (priceSetting.length) {
      let averagenum =
        priceSetting
          .map(data => Number(data.room_price))
          .reduce((a, b) => a + b) / priceSetting.length;
      setAverage(Math.round(averagenum));
    }
  };

  // 가격 선택
  const handleChange = (e, value) => {
    setValue(prev => ({ ...prev, value: value }));
  };

  // 숙소 선택
  const changeBedroomValue = (event, newValue) => {
    if (newValue !== null) {
      setBedroomValue(newValue);
    }
  };

  const changeBedValue = (event, newValue) => {
    if (newValue !== null) {
      setBedValue(newValue);
    }
  };

  const changeBathroomValue = (event, newValue) => {
    if (newValue !== null) {
      setBathroomValue(newValue);
    }
  };

  const changeHandle = e => {
    const { name, checked } = e.target;
    let tempUser = stayData.map(data => {
      return data.name === name ? { ...data, isChecked: checked } : data;
    });
    let amentiUser = amenitiesData.map(data => {
      return data.name === name ? { ...data, isChecked: checked } : data;
    });

    setStayData(tempUser);
    setAmenitiesData(amentiUser);
  };

  const allDelete = () => {
    let deleteTemp = stayData.map(data => {
      return { ...data, isChecked: false };
    });
    let deleteAmenti = amenitiesData.map(data => {
      return { ...data, isChecked: false };
    });

    setStayData(deleteTemp);
    setAmenitiesData(deleteAmenti);
    setBedroomValue(null);
    setBedValue(null);
    setBathroomValue(null);
    setValue(prev => ({
      ...prev,
      min: minValue,
      max: maxValue,
      value: [minValue, maxValue],
    }));
  };

  // 필터 적용 함수
  const applyFilter = () => {
    let updatelist = copyData.current;

    if (bedroomValue) {
      updatelist = updatelist.filter(data => data.bedroom === bedroomValue);
    }

    if (bedValue) {
      updatelist = updatelist.filter(data => data.bed === bedValue);
    }

    if (bathroomValue) {
      updatelist = updatelist.filter(data => data.bathroom === bathroomValue);
    }

    const TempChecked = stayData
      .filter(item => item.isChecked)
      .map(item => item.id);
    const AmentiChecked = amenitiesData.filter(item => item.isChecked);

    if (TempChecked.length) {
      updatelist = updatelist.filter(data =>
        TempChecked.includes(data.room_type)
      );
    }

    if (AmentiChecked.length) {
      const checkedType = AmentiChecked.map(data =>
        data.name.replace(/(\s*)/g, '')
      );
      const isTrue = current => current === true;
      updatelist = updatelist.filter(item =>
        checkedType
          .map(data => item.facilities.join('').includes(data))
          .every(isTrue)
      );
    }

    if (priceSetting.length) {
      updatelist = updatelist.filter(
        item =>
          item.room_price >= value.value[0] && item.room_price <= value.value[1]
      );
    }

    setTransferUserData(updatelist);
  };

  useEffect(() => {
    applyFilter();
  }, [bedroomValue, bedValue, bathroomValue, stayData, amenitiesData, value]);

  // // 서버로 전송
  const submitFilterData = () => {
    const sort_min = minValue && `&min_price=${value.value[0]}`;
    const sort_max = maxValue && `&max_price=${value.value[1]}`;
    const sort_type_id = stayData
      .filter(item => item.isChecked)
      .map(item => item.id);
    const sort_type = sort_type_id
      ? sort_type_id.map(data => `&room_type_id=${data}`).join('')
      : '';
    const sort_bed = bedValue ? `&bed=${bedValue}` : '';
    const sort_bedroom = bedroomValue ? `&bedroom=${bedroomValue}` : '';
    const sort_bathroom = bathroomValue ? `&bathroom=${bathroomValue}` : '';
    const sort_facilities_name = amenitiesData
      .filter(item => item.isChecked)
      .map(item => item.name.replace(/(\s*)/g, ''));
    const sort_facilities = sort_facilities_name
      ? sort_facilities_name.map(data => `&facility_id=${data}`).join('')
      : '';

    navigate(
      `/?${sort_min}${sort_max}${sort_type}${sort_bed}${sort_bedroom}${sort_bathroom}${sort_facilities}${beforeLocation.current}`
    );

    setIsFilterModal(false);
  };

  return (
    <>
      <ModalOverlayInUserInfo onClick={handleFilterModal} />
      <ModalFilter onClick={e => e.stopPropagation()}>
        <ModalPosition>
          <ModalTopNavContainer>
            <FilterNameBox>
              <span>필터</span>
              <AbsoluteX onClick={handleFilterModal}>X</AbsoluteX>
            </FilterNameBox>
          </ModalTopNavContainer>
        </ModalPosition>
        <InnerBox>
          <FormControl>
            <TopContainer>
              <TopInnerContainer>
                <TopTitle>가격 범위</TopTitle>
                <SubTitle>{`평균 1박 요금은 ₩${average.toLocaleString()}입니다`}</SubTitle>
                <WidthContents>
                  <AirbnbSlider
                    minValue={minimum}
                    maxValue={maximum}
                    setValue={setValue}
                    handleChange={handleChange}
                    value={value}
                  />
                </WidthContents>

                <PriceContainer>
                  <PriceWrapContainer>
                    <PriceTitle>최저 요금</PriceTitle>
                    <PriceInputBox>
                      <span>₩</span>
                      <input value={value && value.value[0]} />
                    </PriceInputBox>
                  </PriceWrapContainer>
                  <div>-</div>
                  <PriceWrapContainer>
                    <PriceTitle>최고 요금</PriceTitle>
                    <PriceInputBox>
                      <span>₩</span>
                      <input value={value && value.value[1]} />
                    </PriceInputBox>
                  </PriceWrapContainer>
                </PriceContainer>
              </TopInnerContainer>
            </TopContainer>
            <MiddleContainer>
              <MiddleInnerContainer>
                <MiddleTitle>숙소 유형</MiddleTitle>
                <WidthContents>
                  <FormGroup>
                    <InputSection>
                      {stayData.map(data => {
                        return (
                          <InnerInput key={data.id}>
                            <Checkbox
                              checked={data.isChecked}
                              name={data.name}
                              onChange={changeHandle}
                              sx={{
                                '&.Mui-checked': {
                                  color: 'black',
                                },
                              }}
                            />
                            <InnerTextBox>
                              <InnerTitle>{data.name}</InnerTitle>
                              <InnerSubtitle>{data.subTitle}</InnerSubtitle>
                            </InnerTextBox>
                          </InnerInput>
                        );
                      })}
                    </InputSection>
                  </FormGroup>
                </WidthContents>
              </MiddleInnerContainer>
            </MiddleContainer>
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
            <BottomContainer>
              <BottomInnerContainer>
                <MiddleTitle>편의시설</MiddleTitle>
                <AmenitiesSubTitle>필수</AmenitiesSubTitle>
                <WidthContents>
                  <FormGroup>
                    <InputSection>
                      {amenitiesData.map((data, i) => {
                        return (
                          <AmenitiesInput key={data.id}>
                            <Checkbox
                              checked={data.isChecked}
                              name={data.name}
                              onChange={changeHandle}
                              sx={{
                                '&.Mui-checked': {
                                  color: 'black',
                                },
                              }}
                            />
                            <AmenitiesTestBox>
                              <InnerTitle>{data.name}</InnerTitle>
                            </AmenitiesTestBox>
                          </AmenitiesInput>
                        );
                      })}
                    </InputSection>
                  </FormGroup>
                </WidthContents>
              </BottomInnerContainer>
            </BottomContainer>
          </FormControl>
        </InnerBox>
        <ModalPosition>
          <ModalBottomFooterContainer>
            <FooterAllDeleteBox>
              <FooterButton onClick={allDelete}>전체 해제</FooterButton>
            </FooterAllDeleteBox>
            <FooterRightLink onClick={submitFilterData}>
              <Link to="/">
                {priceSetting.length > 0 && transferUserData.length > 0
                  ? `숙소 ${transferUserData.length}개 표시`
                  : `숙소가 없습니다`}
              </Link>
            </FooterRightLink>
          </ModalBottomFooterContainer>
        </ModalPosition>
      </ModalFilter>
    </>
  );
};

export default FilterModal;

const ModalOverlayInUserInfo = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 765px;
  height: 659px;
  border-radius: 1rem;
  background-color: white;
`;

const ModalFilter = styled(Modal)`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  gap: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 0px;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 14px;
  z-index: 105;
`;

const ModalPosition = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

const AbsoluteX = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: absolute;
  top: 2-px;
  left: 22px;
  width: 25px;
  height: 25px;
  padding: 4px;
  font-size: 400;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const InnerBox = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  width: 100%;
  height: 739px;
  overflow: scroll;
`;

const ModalTopNavContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 110;
`;

const ModalBottomFooterContainer = styled(ModalTopNavContainer)`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  top: 578px;
  height: 81px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const FilterNameBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  margin: 0 10px;
  font-size: 16px;
  font-weight: 600;
`;

const FooterAllDeleteBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
`;

const FooterRightLink = styled(FooterAllDeleteBox)`
  width: 152px;
  height: 48px;
  background-color: #222;
  border-radius: 10px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`;

const FooterButton = styled.button`
  padding: 10px 0;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TopContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  padding: 0 24px;
  gap: 10px;
  margin-top: 60px;
`;

const TopInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 32px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TopTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
`;

const MiddleTitle = styled(TopTitle)`
  padding-bottom: 24px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 40px;
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

const BottomContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  padding: 0 24px;
  gap: 10px;
  margin-bottom: 60px;
`;

const BottomInnerContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 32px 0;
  gap: 10px;
`;

const AmenitiesSubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;
`;

const InputSection = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  flex-wrap: wrap;
`;

const InnerInput = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 312.5px;
  gap: 10px;
  padding: 10px 0px;
`;

const AmenitiesInput = styled(InnerInput)`
  gap: 5px;
  padding: 0;
`;

const InnerTextBox = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  gap: 7px;
`;

const AmenitiesTestBox = styled(InnerTextBox)`
  gap: 3px;
`;

const InnerTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const InnerSubtitle = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

// 가격 컨테이너

const PriceContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100%;
  gap: 5px;
`;

const PriceWrapContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 10px;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
`;

const PriceTitle = styled.div`
  width: 305px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
`;

const PriceInputBox = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 100%;
  gap: 3px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);

  input {
    width: 100%;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`;
