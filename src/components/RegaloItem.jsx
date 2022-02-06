const RegaloItem = ({ index, item, deleteItem }) => {
  return (
    <div className="containerItem">
      <li>
        <img src={item.url} alt="thumbnail" width="32" height="32" />
        {item.cantidad} {item.nombre}
      </li>
      <button
        className="btnDelete"
        onClick={() => {
          deleteItem(index);
        }}
      >
        X
      </button>
    </div>
  );
};

export default RegaloItem;
