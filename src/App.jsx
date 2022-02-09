import "./styles.css";
import { useState } from "react";
import Modal from "react-modal";
import RegaloList from "./components/RegaloList";
import RegaloForm from "./components/RegaloForm";
import ErrorDiv from "./components/ErrorDiv";
import giftThumbnail from "./assets/gift-thumbnail.jpg";

Modal.setAppElement("#root");

export default function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("regalos")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputDest, setInputDest] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputNum, setInputNum] = useState(1);
  const [showError, setShowError] = useState(false);
  const [errorMsj, setErrorMsj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regaloObj = {
      nombre: inputName,
      dest: inputDest,
      url: inputUrl || giftThumbnail,
      cantidad: inputNum,
    };

    if (inputName && !list.find(({ nombre }) => nombre === inputName)) {
      setList([...list, regaloObj]);
      localStorage.setItem("regalos", JSON.stringify([...list, regaloObj]));
    } else if (!inputName) {
      displayError("el campo no puede estar vacio");
    } else {
      displayError("el item ya esta en la lista");
    }

    clearFields();
    setShowModal(false);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleDestChange = (e) => {
    setInputDest(e.target.value);
  };
  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };
  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleDeleteItem = (index) => {
    let filteredArray = list.filter((item) => list.indexOf(item) !== index);
    localStorage.setItem("regalos", JSON.stringify(filteredArray));
    setList(filteredArray);
  };

  const handleDeleteAll = () => {
    localStorage.clear();
    setList([]);
  };

  const displayError = (msj) => {
    setErrorMsj(msj);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  const handleShowModal = (bool) => {
    !bool ? setShowModal(false) : setShowModal(true);
  };

  const clearFields = () => {
    setInputDest("");
    setInputName("");
    setInputUrl("");
    setInputNum(1);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <button onClick={() => handleShowModal(true)}>Agregar</button>
          <Modal isOpen={showModal}>
            <ErrorDiv errorMsj={errorMsj} showError={showError} />
            <RegaloForm
              submitItem={handleSubmit}
              inputName={inputName}
              inputDest={inputDest}
              inputUrl={inputUrl}
              inputNum={inputNum}
              changeInputName={handleNameChange}
              changeInputDest={handleDestChange}
              changeInputUrl={handleUrlChange}
              changeInputNum={handleNumChange}
              displayModal={handleShowModal}
            />
          </Modal>
          <RegaloList list={list} deleteItem={handleDeleteItem} />
          <button className="btn" onClick={handleDeleteAll}>
            Borrar Todo
          </button>
        </div>
      </div>
    </div>
  );
}
