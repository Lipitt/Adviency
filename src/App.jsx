import { useState } from "react";
import RegaloLista from "./components/RegaloLista";
import RegaloForm from "./components/RegaloForm";

export default function App() {
  const [list, setList] = useState([
    "Chocolate x2",
    "Pan Dulce x3",
    "Vitel tone x1",
  ]);

  // interface RegaloInterface {
  //   id: number
  //   nombre: string
  //   cantidad: number

  // }

  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState(1);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newGift = `${inputText} X${inputNum}`;

    if (!list.includes(newGift) && inputText) {
      console.log(true);
      setList([...list, newGift]);
    } else {
      console.log(false);
    }
  };

  const handleDeleteItem = (index) => {
    setList(list.filter((item) => list.indexOf(item) !== index));
  };

  const deleteAll = () => {
    setList([]);
  };

  return (
    <div className="App">
      <RegaloForm
        onSubmit={handleSubmit}
        onTextChange={handleTextChange}
        onNumChange={handleNumChange}
        inputNum={inputNum}
      />
      <RegaloLista list={list} handleDeleteItem={handleDeleteItem} />
      <button onClick={deleteAll}>Borrar Todo</button>
    </div>
  );
}
