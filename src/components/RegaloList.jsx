import { RegaloItem } from "./RegaloItem";

export const RegaloList = ({ list, deleteItem }) => {
  return (
    <>
      <h1>Regalos:</h1>
      {/* si la lista existe, la muestro, sino muestro un mensaje.
      que la condicion sea solo "list === true" puede ser propenso a errores. quizas 
      convendria mas preguntar tambien por el lenght de la lista? */}
      {list ? (
        <ul>
          {list.map((item, index) => {
            return (
              // tener que pasar dos propiedades distintas con el mismo valor suena muy ineficiente,
              //pero react pide la prop "key" y si la trato de usar, da error, por eso tuve que hacer una nueva prop
              //que pase el mismo valor (lo uso para poder borrar items individualmente)
              <RegaloItem
                item={item}
                key={index}
                index={index}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      ) : (
        <p>Agrega regalos a la lista!</p>
      )}
    </>
  );
};
