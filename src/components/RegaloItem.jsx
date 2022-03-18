import React from "react";
import { useContext } from "react";
import RegalosContext from "../context/RegalosContext";

export const RegaloItem = ({ item }) => {
  const { deleteItem, editItem } = useContext(RegalosContext);
  return (
    <li>
      <img alt="thumbnail" width="50" height="50" src={item.img} />
      {item.nombre} {item.cantidad} {item.destinatario}
      <button onClick={() => deleteItem(item.id)}>X</button>
      <button onClick={() => editItem(item)}>E</button>
    </li>
  );
};
