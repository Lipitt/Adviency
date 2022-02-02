export const RegaloForm = ({
  onSubmit,
  onTextChange,
  onNumChange,
  inputText,
  inputNum,
}) => {
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="formContainer">
          <input
            className="textInput"
            onChange={onTextChange}
            type="text"
            value={inputText}
            placeholder="que regalo queres?"
          />
          <input
            className="numInput"
            onChange={onNumChange}
            type="number"
            value={inputNum}
          />
          <button>Agregar</button>
        </div>
      </form>
    </div>
  );
};
