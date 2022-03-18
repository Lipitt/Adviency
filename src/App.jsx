import { useContext } from "react";
import RegaloLista from "./components/RegaloLista";
import RegaloForm from "./components/RegaloForm";
import "./styles.css";
import Modal from "react-modal";
import { RegalosProvider } from "./context/RegalosContext";
import RegalosContext from "./context/RegalosContext";

Modal.setAppElement("#root");
export default function App() {
  const { openModal, closeModal, modalIsOpen } = useContext(RegalosContext);
  return (
    <RegalosProvider>
      <div className="App">
        <button onClick={openModal}>Agregar Regalo</button>
        <Modal isOpen={modalIsOpen}>
          <RegaloForm />
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <h1>Regalos:</h1>
        <RegaloLista />
      </div>
    </RegalosProvider>
  );
}
