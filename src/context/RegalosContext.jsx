import { createContext, useState } from "react";

const RegalosContext = createContext();

export const RegalosProvider = ({ children }) => {
  const [regalos, setRegalos] = useState(
    JSON.parse(localStorage.getItem("regalos")) || []
  );
  const [regaloEdit, setRegaloEdit] = useState({
    item: {},
    edit: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const submitRegalo = (regalo) => {
    if (
      regalo.nombre !== "" &&
      !regalos.find(({ nombre }) => nombre === regalo.nombre)
    ) {
      setRegalos([...regalos, regalo]);
      localStorage.setItem("regalos", JSON.stringify([...regalos, regalo]));
      closeModal();
    }
  };

  const deleteItem = (id) => {
    let deletedItemArray = regalos.filter((item) => item.id !== id);
    setRegalos(deletedItemArray);
    localStorage.setItem("regalos", JSON.stringify(deletedItemArray));
  };

  const editItem = (item) => {
    setRegaloEdit({ item, edit: true });
    openModal();
  };

  const updateItem = (id, updatedItem) => {
    let updatedItemArray = regalos.map((item) =>
      item.id !== id ? item : { ...item, ...updatedItem }
    );
    setRegalos(updatedItemArray);
    localStorage.setItem("regalos", JSON.stringify(updatedItemArray));
    closeModal();
  };
  const deleteAll = () => {
    setRegalos([]);
  };
  return (
    <RegalosContext.Provider
      value={{
        regalos,
        modalIsOpen,
        regaloEdit,
        deleteItem,
        deleteAll,
        editItem,
        updateItem,
        submitRegalo,
        openModal,
        closeModal,
      }}
    >
      {children}
    </RegalosContext.Provider>
  );
};

export default RegalosContext;
