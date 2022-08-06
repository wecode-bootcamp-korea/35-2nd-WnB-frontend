import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Input = () => {
  const navigate = useNavigate();
  const userData = () => {
    fetch(`http://10.58.5.43:8000/users/additional-info`, {
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
      .then(data => console.log(data));
  };

  const [inputValue, setInputValue] = useState({
    LastName: '',
    FirstName: '',
    PhoneNumber: '',
    BirthDay: '',
  });

  console.log(inputValue);

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

  return (
    <div>
      <form className="signUpInput">
        {SignUpData.map(list => {
          return (
            <InputContainer
              key={list.id}
              id={list.id}
              name={list.name}
              type={list.type}
              placeholder={list.placeholder}
              autocomplete={list.autocomplete}
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

export default Input;

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
