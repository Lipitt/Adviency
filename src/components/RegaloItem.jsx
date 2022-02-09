function RegaloItem({ item, index, deleteItem }) {
  return (
    <div className="containerItem">
      <li>
        <img width="32" height="32" src={item.url} alt="thumbnail" />
        {item.cantidad} {item.nombre} {item.dest}
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
}

export default RegaloItem;
