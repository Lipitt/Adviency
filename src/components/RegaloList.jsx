import RegaloItem from "./RegaloItem";

const RegaloList = ({ list, deleteItem }) => {
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => {
            return (
              <RegaloItem
                deleteItem={deleteItem}
                key={index}
                index={index}
                item={item}
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
