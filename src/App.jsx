import "./styles.css";
import { useState } from "react";
import RegaloList from "./components/RegaloList";
import RegaloForm from "./components/RegaloForm";
import ErrorDisplay from "./components/ErrorDisplay";
import giftThumbnail from "./assets/gift-thumbnail.jpg";

export default function App() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("regalos");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [inputNum, setInputNum] = useState(1);
  const [inputText, setInputText] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsj, setErrorMsj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regaloObj = {
      nombre: inputText,
      cantidad: inputNum,
      url: inputLink || giftThumbnail,
    };

    if (inputText && !list.find(({ nombre }) => nombre === inputText)) {
      let updatedList = [...list, regaloObj];
      setList(updatedList);
      localStorage.setItem("regalos", JSON.stringify(updatedList));
    } else if (!inputText) {
      displayError("El campo no puede estar vacio");
    } else {
      displayError("El item ya existe en la lista");
    }

    clearFields();
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleLinkChange = (e) => {
    setInputLink(e.target.value);
  };

  const handleDeleteItem = (index) => {
    let filteredArray = list.filter((item) => list.indexOf(item) !== index);
    setList(filteredArray);
    localStorage.setItem("regalos", JSON.stringify(filteredArray));
  };
  const handleDeleteAll = () => {
    setList([]);
    localStorage.clear();
  };

  const displayError = (msg) => {
    setShowError(true);
    setErrorMsj(msg);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  const clearFields = () => {
    setInputText("");
    setInputNum(1);
    setInputLink();
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <ErrorDisplay showError={showError} errorMsj={errorMsj} />
          <RegaloForm
            onSubmit={handleSubmit}
            handleTextChange={handleTextChange}
            handleNumChange={handleNumChange}
            handleLinkChange={handleLinkChange}
            inputNum={inputNum}
            inputText={inputText}
            inputLink={inputLink}
          />
          <RegaloList list={list} deleteItem={handleDeleteItem} />
          <button className="btn" onClick={handleDeleteAll}>
            Borrar Todo
          </button>
        </div>
      </div>
    </div>
  );
}
