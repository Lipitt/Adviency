import RegaloItem from "./RegaloItem";

function RegaloList({ list, deleteItem, editItem }) {
  return (
    <div>
      <h1>Regalos:</h1>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => {
            return (
              <RegaloItem
                item={item}
                key={index}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          })}
        </ul>
      ) : (
        <p>Agrega un regalo a la lista!</p>
      )}

      <ul></ul>
    </div>
  );
}

export default RegaloList;
