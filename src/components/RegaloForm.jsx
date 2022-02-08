const RegaloForm = ({
  inputText,
  textChange,
  urlChange,
  inputUrl,
  numChange,
  inputNum,
  submitItem,
  modalDisplay,
  destChange,
  inputDest,
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
        className="destInput"
        type="text"
        placeholder="destinatario"
        onChange={destChange}
        value={inputDest}
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
      <button> Agregar</button>
      <button onClick={() => modalDisplay(false)}>Cerrar</button>
    </form>
  );
};

export default RegaloForm;
