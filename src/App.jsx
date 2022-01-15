import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["Chocolates", "Juguetes", "Libros"]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="regalos">
          <h1>Regalos:</h1>
          <ul>
            {list &&
              list.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleTextChange}
              type="text"
              value={text}
              placeholder="mas regalos..."
            />
            <button>Agregar regalo</button>
          </form>
        </div>
      </div>
    </div>
  );
}
