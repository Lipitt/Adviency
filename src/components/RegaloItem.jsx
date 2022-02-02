import React from "react";

export const RegaloItem = ({ index, item, deleteItem }) => {
  return (
    <div className="containerItem">
      <li>{`${item.cantidad} ${item.nombre}`}</li>
      <button className="btnDelete" onClick={() => deleteItem(index)}>
        X
      </button>
    </div>
  );
};
