import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../components/Config/Config';

const UserInfo = ({ modalIsOpen, setModalIsOpen }) => {
  const navigate = useNavigate();

  const userData = () => {
    fetch(`${BASE_URL}/users/additional-info`, {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('Token') },
      body: JSON.stringify({
        last_name: LastName,
        first_name: FirstName,
        phone_number: PhoneNumber,
        birth_day: BirthDay,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'USER_INFO_UPDATED') {
          alert('회원정보 수정에 성공했습니다!');
          setModalIsOpen(false);
          navigate('/');
        } else {
          alert(`${MESSAAGE_ALERT[data.message]}`);
        }
      });
  };

  const [inputValue, setInputValue] = useState({
    LastName: '',
    FirstName: '',
    PhoneNumber: '',
    BirthDay: '',
  });

  const { LastName, FirstName, PhoneNumber, BirthDay } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const regExp = /^[ㄱ-ㅎ|가-힣]+$/;
  const regExpPhonNumber = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;

  const isValidInput =
    regExp.test(LastName) &&
    regExp.test(FirstName) &&
    regExpPhonNumber.test(PhoneNumber) &&
    BirthDay.length !== 0;

  console.log(inputValue);

  return (
    <div>
      <form className="signUpInput">
        {SignUpData.map(({ id, name, type, placeholder, autocomplete }) => {
          return (
            <InputContainer
              key={id}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autocomplete={autocomplete}
              onChange={handleInput}
            />
          );
        })}
        <InputContainer
          type="date"
          min="1900-01-01"
          name="BirthDay"
          max={new Date().toISOString().substring(0, 10)}
          placeholder="생년월일"
          autocomplete="off"
          onChange={handleInput}
        />
      </form>
      <JoinBtn primary={isValidInput} onClick={userData}>
        가입하기
      </JoinBtn>
    </div>
  );
};

const InputContainer = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const JoinBtn = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  color: #fff;
  background-color: ${props =>
    props.primary === true ? '#7a0bc0' : 'rgba(122, 11, 192, 0.3)'};
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export default UserInfo;

const SignUpData = [
  {
    id: 1,
    name: 'LastName',
    type: 'text',
    placeholder: 'Last Name',
    valid: 'LastName을 입력해주세요',
    autoFocus: false,
    autocomplete: 'off',
  },
  {
    id: 2,
    name: 'FirstName',
    type: 'text',
    placeholder: 'First Name',
    valid: 'FirstName을 입력해주세요',
    autoFocus: true,
    autocomplete: 'off',
  },
  {
    id: 3,
    name: 'PhoneNumber',
    type: 'text',
    placeholder: 'Phone Number',
    valid: 'Phone Number를 입력해주세요',
    autoFocus: false,
    autocomplete: 'off',
  },
];

const MESSAAGE_ALERT = {
  KEY_ERROR: '데이터가 들어오지 않았어요!',
  FISRT_NAME_ERROR: '올바른 이름이 아니에요!',
  LAST_NAME_ERRO: '올바른 성이 아니에요!',
  PHONE_NUMBER_ERROR: '올바른 휴대폰 번호가 아니에요!',
  PHONE_NUMVER_ALREADY_EXIST: '중복된 연락처에요!',
};
