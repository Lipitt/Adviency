import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["Chocolates", "Juegos", "Pan Dulce"]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    !inputText || list.includes(inputText)
      ? alert("El item no puede ser repetido ni vacio")
      : setList([...list, inputText]);

    setInputText("");
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDeleteItem = (index) => {
    setList(list.filter((item) => list.indexOf(item) !== index));
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
              value={inputText}
              placeholder="Escribi tu regalo aca!"
            />
            <button>Agregar</button>
          </form>

          <h1>Regalos:</h1>
          {list ? (
            <ul>
              {list.map((item, index) => {
                return (
                  <div className="regaloItem" key={index}>
                    <li>{item}</li>
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="btnDelete"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            <p>Agrega regalos a la lista!</p>
          )}
          <button onClick={handleDeleteAll}>Borrar Todo</button>
        </div>
      </div>
    </div>
  );
}
