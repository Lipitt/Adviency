function RegaloForm({
  submitItem,
  inputName,
  inputDest,
  inputUrl,
  inputNum,
  changeInputName,
  changeInputDest,
  changeInputUrl,
  changeInputNum,
  displayModal,
}) {
  return (
    <form className="formContainer" onSubmit={submitItem}>
      <input
        className="textInput"
        type="text"
        value={inputName}
        placeholder="escribi un regalo..."
        onChange={changeInputName}
      />
      <input
        className="textInput"
        type="text"
        value={inputDest}
        placeholder="para quien es?"
        onChange={changeInputDest}
      />
      <input
        className="textInput"
        type="text"
        value={inputUrl}
        placeholder="tenes una imagen?"
        onChange={changeInputUrl}
      />
      <input
        className="numInput"
        type="number"
        value={inputNum}
        onChange={changeInputNum}
      />
      <button>Agregar</button>
      <button onClick={() => displayModal(false)}>Cerrar</button>
    </form>
  );
}

export default RegaloForm;
