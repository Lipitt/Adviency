import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RegaloForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const submitPrep = (e) => {
    e.preventDefault();
    let regalo = {
      id: uuidv4(),
      nombre: inputText,
      cantidad: inputNum,
    };

    onSubmit(regalo);
  };
  return (
    <form onSubmit={submitPrep}>
      <input
        type="text"
        value={inputText}
        placeholder="Que regalo queres?"
        onChange={handleTextChange}
      />
      <input type="number" value={inputNum} onChange={handleNumChange} />
      <button>Agregar</button>
    </form>
  );
};

export default RegaloForm;
