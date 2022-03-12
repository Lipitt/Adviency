import React from "react";
import { RegaloItem } from "./RegaloItem";

const RegaloLista = ({ list, deleteItem, editItem }) => {
  return (
    <div>
      {list ? (
        <ul>
          {list.map((item) => {
            return (
              <RegaloItem
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                editItem={editItem}
              />
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
