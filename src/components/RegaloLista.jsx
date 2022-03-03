import { RegaloItem } from "./RegaloItem";

function RegaloLista({ list, handleDeleteItem }) {
  return (
    <div>
      <h1>Regalos:</h1>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => {
            return (
              <RegaloItem
                item={item}
                index={index}
                key={index}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })}
        </ul>
      ) : (
        <p>Agrega un regalo a la lista!</p>
      )}
    </div>
  );
}

export default RegaloLista;
