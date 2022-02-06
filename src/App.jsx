import "./styles.css";
import { useState } from "react";
import RegaloList from "./components/RegaloList";
import RegaloForm from "./components/RegaloForm";
import ErrorMsj from "./components/ErrorMsj";
import giftThumb from "./assets/gift-thumbnail.jpg";

export default function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("regalos")) || []
  );
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);
  const [inputUrl, setInputUrl] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMsj, setErrorMsj] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();

    let regaloObj = {
      nombre: inputText,
      cantidad: inputNum,
      url: inputUrl || giftThumb,
    };

    if (inputText && !list.find(({ nombre }) => nombre === inputText)) {
      setList([...list, regaloObj]);
      localStorage.setItem("regalos", JSON.stringify([...list, regaloObj]));
    } else if (!inputText) {
      showError("el campo no puede estar vacio");
    } else {
      showError("el item ya existe");
    }

    clearFields();
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleDeleteItem = (index) => {
    let updatedList = list.filter((item) => list.indexOf(item) !== index);
    setList(updatedList);
    localStorage.setItem("regalos", JSON.stringify(updatedList));
  };

  const showError = (msj) => {
    setErrorFlag(true);
    setTimeout(() => {
      setErrorFlag(false);
    }, 2000);
    setErrorMsj(msj);
  };

  const deleteAll = () => {
    setList([]);
    localStorage.clear();
  };

  const clearFields = () => {
    setInputText("");
    setInputNum(1);
    setInputUrl("");
  };
  return (
    <div className="App">
      <div className="container">
        <div>
          <ErrorMsj displayError={errorFlag} errorMsj={errorMsj} />
          <RegaloForm
            inputText={inputText}
            inputNum={inputNum}
            inputUrl={inputUrl}
            textChange={handleTextChange}
            numChange={handleNumChange}
            urlChange={handleUrlChange}
            submitItem={handleAddItem}
          />
          <RegaloList list={list} deleteItem={handleDeleteItem} />
          <button className="btn" onClick={deleteAll}>
            Borrar Todo
          </button>
        </div>
      </div>
    </div>
  );
}
