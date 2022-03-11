import React, { useState } from "react";

const RegaloForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const submitPrep = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };
  return (
    <form onSubmit={submitPrep}>
      <input
        type="text"
        value={inputText}
        placeholder="Que regalo queres?"
        onChange={handleTextChange}
      />
      <button>Agregar</button>
    </form>
  );
};

export default RegaloForm;
