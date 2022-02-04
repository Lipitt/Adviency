const RegaloForm = ({
  inputLink,
  inputText,
  inputNum,
  handleLinkChange,
  handleTextChange,
  onSubmit,
  handleNumChange,
}) => {
  return (
    <>
      <form className="formContainer" onSubmit={onSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleTextChange}
          placeholder="Agrega algun regalo!"
          className="textInput"
        />
        <input
          type="text"
          value={inputLink}
          onChange={handleLinkChange}
          placeholder="link de imagen"
          className="textInput"
        />
        <input
          className="numInput"
          type="number"
          value={inputNum}
          onChange={handleNumChange}
        />

        <button>Agregar</button>
      </form>
    </>
  );
};

export default RegaloForm;
