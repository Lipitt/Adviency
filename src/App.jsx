import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["Chocolates", "Juegos", "Pan Dulce"]);
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, inputText]);
    setInputText("");
  };

  const borrarRegalo = (id) => {
    setList(list.filter((item) => list.indexOf(item) !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="regalos">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="agrega mas reglaos..."
              value={inputText}
            />
            <button type="submit">Agregar</button>
          </form>

          <h1>Regalos:</h1>
          <ul>
            {list &&
              list.map((item, id) => {
                return (
                  <div key={id} className="regaloItem ">
                    <li>{item}</li>
                    <button
                      className="btnDelete"
                      onClick={() => borrarRegalo(id)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
