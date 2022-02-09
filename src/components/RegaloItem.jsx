function RegaloItem({ item, deleteItem, editItem }) {
  return (
    <div className="containerItem">
      <li>
        <img width="32" height="32" src={item.url} alt="thumbnail" />
        {item.cantidad} {item.nombre} {item.dest}
      </li>
      <button
        className="btnDelete"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          editItem(item.id);
        }}
      >
        E
      </button>
    </div>
  );
}

export default RegaloItem;
