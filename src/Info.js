import React, { useState, useEffect } from "react";

const Info = (props) => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log(`Completed Rendering`);

    return () => {
      console.log(`Before Rendering, ${name}`);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="NAME"
          onChange={onChangeName}
        />
        <input
          type="text"
          value={nickName}
          placeholder="NICKNAME"
          onChange={onChangeNickName}
        />
      </div>

      <div>
        <div>NAME : {name}</div>
        <div>NICKNAME : {nickName}</div>
      </div>
    </div>
  );
};

export default Info;
