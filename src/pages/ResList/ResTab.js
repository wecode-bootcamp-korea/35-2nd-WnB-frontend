import React, { useState } from 'react';

const ResTab = () => {
  const [currentId, setCurrentId] = useState(1);

  const clickHandler = id => {
    setCurrentId(id);
  };
  return (
    <div className="wrapper">
      <ul className="tabs">
        {CATEGORY_ARR.map((category, idx) => {
          return (
            <li
              key={category + idx}
              className={category}
              onClick={() => clickHandler(idx + 1)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="contents">{MAPPING_OBJ[currentId]}</div>
    </div>
  );
};

export default ResTab;

const MAPPING_OBJ = {
  1: '',
  2: '',
  3: '',
};

const CATEGORY_ARR = ['예정된 일정', '지난 일정', '취소된 일정'];
