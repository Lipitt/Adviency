import React from "react";
import { RegaloItem } from "./RegaloItem";

const RegaloLista = ({ list, deleteItem }) => {
  return (
    <div>
      {list ? (
        <ul>
          {list.map((item) => {
            return (
              <RegaloItem key={item.id} item={item} deleteItem={deleteItem} />
            );
          })}
        </ul>
      ) : (
        <p>No hay items en la lista</p>
      )}
    </div>
  );
};

export default RegaloLista;
