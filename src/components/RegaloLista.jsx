import React from "react";
import { RegaloItem } from "./RegaloItem";

const RegaloLista = ({ list }) => {
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => {
            return <RegaloItem key={index} item={item} />;
          })}
        </ul>
      ) : (
        <p>No hay items en la lista</p>
      )}
    </div>
  );
};

export default RegaloLista;
