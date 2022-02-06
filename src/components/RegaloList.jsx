import RegaloItem from "./RegaloItem";

const RegaloList = ({ list, deleteItem }) => {
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => {
            return (
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
        <p>Agrega un item a la lista!</p>
      )}
    </div>
  );
};

export default RegaloList;
