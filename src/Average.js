import React, { useState, useMemo } from "react";

const getAverage = (list) => {
  console.log("Calcurating");

  if (list.length === 0) {
    return 0;
  }

  const sum = list.reduce((a, b) => a + b);

  return sum / list.length;
};

const Average = (props) => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>

      <div>
        <b>Average : {getAverage(list)}</b>
      </div>
    </div>
  );
};

export default Average;
