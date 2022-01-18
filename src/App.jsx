import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["Chocolates", "Juegos", "Pan Dulce"]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, inputText]);
    setInputText("");
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDeleteItem = (id) => {
    setList(list.filter((item) => list.indexOf(item) !== id));
  };

  const handleDeleteAll = () => {
    setList("");
  };
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="agrega mas regalos..."
            value={inputText}
          />
          <button>Agregar</button>
        </form>
        <h1>Regalos:</h1>
        <ul>
          {list &&
            list.map((item, id) => {
              return (
                <div key={id}>
                  <li>{item}</li>
                  <button onClick={(id) => handleDeleteItem(id)}>X</button>
                </div>
              );
            })}
        </ul>
        <button onClick={handleDeleteAll}>Borrar Todo</button>
      </div>
    </div>
  );
}
