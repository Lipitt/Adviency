export const RegaloItem = ({ item, handleDeleteItem, index }) => {
  return (
    <div>
      <li>{item}</li>
      <button onClick={() => handleDeleteItem(index)}>E</button>
    </div>
  );
};
