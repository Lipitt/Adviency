import React, { useContext, useState, useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import giftThumbnail from "../assets/gift-thumbnail.jpg";

import RegalosContext from "../context/RegalosContext";

const RegaloForm = () => {
  const { modalIsOpen, regaloEdit, submitRegalo, updateItem } =
    useContext(RegalosContext);

  const inputRef = useRef();

  useEffect(() => {
    console.log("effect");
    if (modalIsOpen === true) {
      inputRef.current.focus();
    }
  }, [modalIsOpen]);

  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);
  const [inputImg, setInputImg] = useState("");
  const [inputDest, setInputDest] = useState("");

  const textChange = (e) => {
    setInputText(e.target.value);
  };

  const numChange = (e) => {
    setInputNum(e.target.value);
  };

  const imgChange = (e) => {
    setInputImg(e.target.value);
  };

  const destChange = (e) => {
    setInputDest(e.target.value);
  };

  const submitPrep = (e) => {
    e.preventDefault();
    let regalo = {
      id: regaloEdit.edit ? regaloEdit.item.id : uuidv4(),
      nombre: inputText,
      cantidad: inputNum,
      img: inputImg || giftThumbnail,
      destinatario: inputDest,
    };

    if (regaloEdit.edit) {
      updateItem(regaloEdit.item.id, regalo);
    } else {
      submitRegalo(regalo);
    }
  };

  useEffect(() => {
    if (regaloEdit.edit === true) {
      setInputText(regaloEdit.item.nombre);
      setInputImg(regaloEdit.item.img);
      setInputNum(regaloEdit.item.cantidad);
      setInputDest(regaloEdit.item.destinatario);
    }
  }, [regaloEdit]);

  return (
    <form onSubmit={submitPrep}>
      <input
        ref={inputRef}
        className="inputClass"
        type="text"
        value={inputText}
        placeholder="Que regalo queres?"
        onChange={textChange}
      />
      <input
        className="inputClass"
        type="number"
        value={inputNum}
        onChange={numChange}
      />
      <input
        className="inputClass"
        ype="string"
        value={inputImg}
        onChange={imgChange}
      />
      <input
        className="inputClass"
        type="text"
        value={inputDest}
        placeholder="para quien es?"
        onChange={destChange}
      />
      <button>Agregar</button>
    </form>
  );
};

export default RegaloForm;
