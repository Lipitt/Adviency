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
        <div>
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

          {list ? (
            <ul>
              {list.map((item, id) => {
                return (
                  <div className="regaloItem" key={id}>
                    <li>{item}</li>
                    <button
                      className="btnDelete"
                      onClick={() => handleDeleteItem(id)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            <p>Agrega algun regalo a la lista!</p>
          )}
          <button onClick={handleDeleteAll}>Borrar Todo</button>
        </div>
      </div>
    </div>
  );
}
