import React from "react";
import RegaloItem from "./RegaloItem";

const RegaloList = ({ list, deleteItem, editItem }) => {
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item: { id: number }) => {
            return (
              <RegaloItem
                item={item}
                deleteItem={deleteItem}
                editItem={editItem}
                key={item.id}
              />
            );
          })}
        </ul>
      ) : (
        <p>Agrega regalos a la lista!</p>
      )}
    </div>
  );
};

export default RegaloList;
