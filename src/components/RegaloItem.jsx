import "../assets/gift-thumbnail.jpg";

const RegaloItem = ({ item, index, deleteItem }) => {
  return (
    <div className="containerItem">
      <li>
        <img alt="thumbnail" src={item.url} width="32" height="32" />
        {`${item.cantidad} ${item.nombre}`}
      </li>
      <button className="btnDelete" onClick={() => deleteItem(index)}>
        X
      </button>
    </div>
  );
};

export default RegaloItem;
