import React from "react";

const RegaloItem = ({ item, deleteItem, editItem }) => {
  return (
    <div>
      <li>
        <img alt="gift img" width="50" height="50" src={item.url} />
        {item.cantidad} {item.nombre} {item.destinatario}
      </li>
      <button onClick={() => deleteItem(item.id)}>X</button>
      <button onClick={() => editItem(item.id)}>E</button>
    </div>
  );
};

export default RegaloItem;
