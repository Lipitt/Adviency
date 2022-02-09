import RegaloItem from "./RegaloItem";

function RegaloList({ list, deleteItem }) {
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
                deleteItem={deleteItem}
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
