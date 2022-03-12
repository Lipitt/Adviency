import { useState, useRef } from "react";
import RegaloLista from "./components/RegaloLista";
import RegaloForm from "./components/RegaloForm";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

export default function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("regalos")) || []
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (regalo) => {
    if (
      regalo.nombre !== "" &&
      !list.find(({ nombre }) => nombre === regalo.nombre)
    ) {
      setList([...list, regalo]);
      localStorage.setItem("regalos", JSON.stringify([...list, regalo]));
      closeModal();
    }
  };

  const handleDeleteItem = (id) => {
    let deletedItemArray = list.filter((item) => item.id !== id);
    setList(deletedItemArray);
    localStorage.setItem("regalos", JSON.stringify(deletedItemArray));
  };

  const handleDeleteAll = () => {
    setList([]);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Agregar Regalo</button>
      <Modal isOpen={modalIsOpen}>
        <RegaloForm onSubmit={handleSubmit} />
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
      <h1>Regalos:</h1>
      <RegaloLista list={list} deleteItem={handleDeleteItem} />
      <button onClick={handleDeleteAll}>Borrar Todo</button>
    </div>
  );
}
