import React from "react";

export const RegaloItem = ({ item, deleteItem }) => {
  return (
    <li>
      {item.nombre} {item.cantidad}
      <button onClick={() => deleteItem(item.id)}>X</button>
    </li>
  );
};
