function RegaloForm({
  inputText,
  onTextChange,
  inputNum,
  onNumChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputText}
        placeholder="que regalo queres?"
        onChange={onTextChange}
      />
      <input type="number" value={inputNum} onChange={onNumChange} />
      <button>Agregar</button>
    </form>
  );
}

export default RegaloForm;
