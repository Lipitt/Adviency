import React, { useContext } from "react";
import { RegaloItem } from "./RegaloItem";
import RegalosContext from "../context/RegalosContext";

const RegaloLista = () => {
  const { regalos, deleteAll } = useContext(RegalosContext);
  return (
    <>
      <div>
        {regalos ? (
          <ul>
            {regalos.map((item) => {
              return <RegaloItem key={item.id} item={item} />;
            })}
          </ul>
        ) : (
          <p>No hay items en la lista</p>
        )}
      </div>
      <button onClick={deleteAll}>Borrar Todo</button>
    </>
  );
};

export default RegaloLista;
