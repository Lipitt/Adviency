import React from "react";

export const RegaloItem = ({ item, deleteItem, editItem }) => {
  return (
    <li>
      <img alt="thumbnail" width="50" height="50" src={item.img} />
      {item.nombre} {item.cantidad} {item.destinatario}
      <button onClick={() => deleteItem(item.id)}>X</button>
      <button onClick={() => editItem(item.id)}>E</button>
    </li>
  );
};
