import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import RegaloList from "./components/RegaloList";
import RegaloForm from "./components/RegaloForm";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "react-modal";

export default function App() {
  interface RegaloInterface {
    id: number;
    nombre: string;
    cantidad: number;
    destinatario?: string;
    url?: string;
  }
  const giftThumbnail = require("./assets/gift-thumbnail.jpg");

  const [list, setList] = useState<RegaloInterface[]>(
    JSON.parse(localStorage.getItem("regalos")) || [
      {
        id: 1,
        nombre: "Chocolates",
        cantidad: 3,
        destinatario: "Goncy",
        url: "https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Lab-Grown-Chocolate-Could-Be-The-Future-of-Sustainable-Confectionery.jpg",
      },
      {
        id: 2,
        nombre: "Vitel Tone",
        cantidad: 1,
        destinatario: "Agustina",
        url: giftThumbnail,
      },
      {
        id: 3,
        nombre: "Juegos",
        cantidad: 2,
        destinatario: "David",
        url: giftThumbnail,
      },
    ]
  );
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);
  const [inputRecipient, setInputRecipient] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setInputRecipient(e.target.value);
  };

  const handleURLChange = (e) => {
    setInputURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regalo: RegaloInterface = {
      id: editFlag ? editId : uuidv4(),
      nombre: inputText,
      cantidad: inputNum,
      url: inputURL || giftThumbnail,
      destinatario: inputRecipient,
    };

    if (!editFlag) {
      if (
        list.find((item: RegaloInterface) => item.nombre === inputText) ===
          undefined &&
        inputText
      ) {
        setList([...list, regalo]);
        localStorage.setItem("regalos", JSON.stringify([...list, regalo]));
        setModalIsOpen(false);
        clearInputs();
      } else if (!inputText) {
        testErrorMessage("El campo regalo no puede estar vacio");
      } else {
        testErrorMessage("El regalo ya existe en la lista");
      }
    } else {
      let editedArray = list.map((item) => {
        if (item.id !== editId) {
          return item;
        } else {
          return regalo;
        }
      });
      setList(editedArray);

      localStorage.setItem("regalos", JSON.stringify(editedArray));
      setModalIsOpen(false);
      setEditFlag(false);
      setEditId(null);
      clearInputs();
    }
  };

  const testErrorMessage = (message: string) => {
    setShowError(true);
    setErrorMessage(message);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };
  const handleDeleteItem = (id: number) => {
    let filteredArray = list.filter((item: RegaloInterface) => item.id !== id);
    setList(filteredArray);
    localStorage.setItem("regalos", JSON.stringify(filteredArray));
  };

  const handleEditItem = (id: number) => {
    setEditFlag(true);
    setEditId(id);
    handleModalState();
    let filteredEditArray = list.filter(
      (item: RegaloInterface) => item.id === id
    );
    setInputText(filteredEditArray[0].nombre);
    setInputNum(filteredEditArray[0].cantidad);
    setInputURL(filteredEditArray[0].url);
    setInputRecipient(filteredEditArray[0].destinatario);
  };

  const handleDeleteAll = () => {
    setList([]);
    localStorage.clear();
  };

  const handleModalState = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  const clearInputs = () => {
    setInputText("");
    setInputNum(1);
    setInputURL("");
    setInputRecipient("");
  };

  return (
    <div className="App">
      <button onClick={handleModalState}>Agregar</button>
      <Modal isOpen={modalIsOpen}>
        <ErrorMessage
          showErrorMessage={showError}
          errorMessage={errorMessage}
        />
        <RegaloForm
          inputText={inputText}
          onTextChange={handleTextChange}
          inputNum={inputNum}
          onNumChange={handleNumChange}
          inputRecipient={inputRecipient}
          onRecipientChange={handleRecipientChange}
          inputURL={inputURL}
          onURLChange={handleURLChange}
          onSubmit={handleSubmit}
          closeModal={handleModalState}
        />
      </Modal>
      <h1>Regalos:</h1>
      <RegaloList
        list={list}
        deleteItem={handleDeleteItem}
        editItem={handleEditItem}
      />
      <button onClick={handleDeleteAll}>Borrar Todo</button>
    </div>
  );
}
