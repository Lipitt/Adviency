import React, { useState, useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import giftThumbnail from "../assets/gift-thumbnail.jpg";

const RegaloForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);
  const [inputImg, setInputImg] = useState("");
  const [inputDest, setInputDest] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleImgChange = (e) => {
    setInputImg(e.target.value);
  };

  const handleDestChange = (e) => {
    setInputDest(e.target.value);
  };
  const submitPrep = (e) => {
    e.preventDefault();
    let regalo = {
      id: uuidv4(),
      nombre: inputText,
      cantidad: inputNum,
      img: inputImg || giftThumbnail,
      destinatario: inputDest,
    };

    onSubmit(regalo);
  };
  return (
    <form onSubmit={submitPrep}>
      <input
        ref={inputRef}
        className="inputClass"
        type="text"
        value={inputText}
        placeholder="Que regalo queres?"
        onChange={handleTextChange}
      />
      <input
        className="inputClass"
        type="number"
        value={inputNum}
        onChange={handleNumChange}
      />
      <input
        className="inputClass"
        ype="string"
        value={inputImg}
        onChange={handleImgChange}
      />
      <input
        className="inputClass"
        type="text"
        value={inputDest}
        placeholder="para quien es?"
        onChange={handleDestChange}
      />
      <button>Agregar</button>
    </form>
  );
};

export default RegaloForm;
