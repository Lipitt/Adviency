import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["chocolate", "pan dulce", "juguetes"]);
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <ul>
        <li>
          {list &&
            list.map((item) => {
              return <li>{item}</li>;
            })}
        </li>
      </ul>
    </div>
  );
}
