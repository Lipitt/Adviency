import "./styles.css";
import { useState } from "react";
import Modal from "react-modal";
import RegaloList from "./components/RegaloList";
import RegaloForm from "./components/RegaloForm";
import ErrorDiv from "./components/ErrorDiv";
import giftThumbnail from "./assets/gift-thumbnail.jpg";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  const [editFlag, setEditFlag] = useState(false);
  const [editId, setEditId] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let regaloObj = {
  //     nombre: inputName,
  //     dest: inputDest,
  //     url: inputUrl || giftThumbnail,
  //     cantidad: inputNum,
  //   };

  //   if (inputName && !list.find(({ nombre }) => nombre === inputName)) {
  //     setList([...list, regaloObj]);
  //     localStorage.setItem("regalos", JSON.stringify([...list, regaloObj]));
  //   } else if (!inputName) {
  //     displayError("el campo no puede estar vacio");
  //   } else {
  //     displayError("el item ya esta en la lista");
  //   }

  //   clearFields();
  //   setShowModal(false);

  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regaloObj = {
      id: editId !== 0 ? editId : list.length + 1,
      nombre: inputName,
      dest: inputDest,
      url: inputUrl || giftThumbnail,
      cantidad: inputNum,
    };

    if (!editFlag) {
      if (inputName && !list.find(({ nombre }) => nombre === inputName)) {
        setList([...list, regaloObj]);
        localStorage.setItem("regalos", JSON.stringify([...list, regaloObj]));
      } else if (!inputName) {
        displayError("el campo no puede estar vacio");
      } else {
        displayError("el item ya esta en la lista");
      }
    } else {
      console.log("edit?");
      console.log(list);
      setList((list[0] = regaloObj));
      localStorage.setItem("regalos", JSON.stringify((list[0] = regaloObj)));
      setEditFlag(false);
    }

    /* 
    {
      id: 1,
      nombre: cho,
      cant: 2,
      url: default
      dest: gonzy
    }, {
       id: 2,
      nombre: zanahoria,
      cant: 4,
      url: default
      dest: david
    }

    */

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
    let filteredArray = list.filter((item) => list.indexOf(item) + 1 !== index);
    localStorage.setItem("regalos", JSON.stringify(filteredArray));
    setList(filteredArray);
  };

  const handleEditItem = (index) => {
    clearFields();
    setShowModal(true);
    let editObj = list.filter((item) => list.indexOf(item) + 1 === index);
    console.log(editObj);
    setInputName(editObj[0].nombre);
    setInputUrl(editObj[0].url);
    setInputNum(editObj[0].cantidad);
    setInputDest(editObj[0].dest);
    setEditFlag(true);
    console.log(index);
    setEditId(index);
    console.log("Edit end");
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
    console.log(list);
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
          <Modal isOpen={showModal} style={customStyles}>
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
          <RegaloList
            list={list}
            deleteItem={handleDeleteItem}
            editItem={handleEditItem}
          />
          <button className="btn" onClick={handleDeleteAll}>
            Borrar Todo
          </button>
        </div>
      </div>
    </div>
  );
}
