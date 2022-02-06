const RegaloForm = ({
  inputText,
  textChange,
  urlChange,
  inputUrl,
  numChange,
  inputNum,
  AgregarItem,
  submitItem,
}) => {
  return (
    <form className="formContainer" onSubmit={submitItem}>
      <input
        className="textInput"
        type="text"
        placeholder="pone tus regalos aca"
        onChange={textChange}
        value={inputText}
      />
      <input
        className="textInput"
        type="text"
        placeholder="link de imagen"
        onChange={urlChange}
        value={inputUrl}
      />
      <input
        className="numInput"
        type="number"
        onChange={numChange}
        value={inputNum}
      />
      <button onClick={AgregarItem}> Agregar</button>
    </form>
  );
};

export default RegaloForm;
