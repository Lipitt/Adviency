import { useState } from "react";
import RegaloLista from "./components/RegaloLista";
import RegaloForm from "./components/RegaloForm";

export default function App() {
  const [list, setList] = useState(
    [JSON.parse(localStorage.getItem("regalos"))] |
      [
        { id: 1, nombre: "Chocolate", cantidad: 2 },
        { id: 2, nombre: "Vitel Tone", cantidad: 3 },
        { id: 3, nombre: "Juegos", cantidad: 4 },
      ]
  );
  const handleSubmit = (regalo) => {
    // if (
    //   regalo.nombre !== "" &&
    //   !list.find(({ nombre }) => nombre === regalo.nombre)
    // ) {
    console.log(list);
    setList([...list, regalo]);
    localStorage.setItem("regalos", JSON.stringify([...list, regalo]));
    // }
  };

  const handleDeleteItem = (id) => {
    let deletedItemArray = list.filter((item) => item.id !== id);
    setList(deletedItemArray);
    localStorage.setItem("regalos", JSON.stringify(deletedItemArray));
  };

  const handleDeleteAll = () => {
    setList([]);
  };

  return (
    <div className="App">
      <RegaloForm onSubmit={handleSubmit} />
      <h1>Regalos:</h1>
      <RegaloLista list={list} deleteItem={handleDeleteItem} />
      <button onClick={handleDeleteAll}>Borrar Todo</button>
    </div>
  );
}
