import "./styles.css";

import { useState } from "react";

export default function App() {
  const [list, setList] = useState(["Chocolates", "Pan dulce", "Juguetes"]);
  return (
    <div className="App">
      <div className="container">
        <div className="regalos">
          <h1>Regalos:</h1>

          <ul>
            {list &&
              list.map((item, id) => {
                return <li key={id}>{item}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
