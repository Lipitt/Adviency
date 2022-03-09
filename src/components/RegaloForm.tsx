import React from "react";

const RegaloForm = ({
  inputText,
  onTextChange,
  inputNum,
  onNumChange,
  inputRecipient,
  onRecipientChange,
  inputURL,
  onURLChange,
  onSubmit,
  closeModal,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputText}
        placeholder="Que regalo queres?"
        onChange={onTextChange}
      />
      <input type="number" value={inputNum} onChange={onNumChange} />
      <input
        type="text"
        value={inputRecipient}
        placeholder="para quien es?"
        onChange={onRecipientChange}
      />
      <input
        type="text"
        value={inputURL}
        placeholder="pone la imagen aca!"
        onChange={onURLChange}
      />
      <button>Agregar</button>
      <button onClick={closeModal}>Cerrar</button>
    </form>
  );
};

export default RegaloForm;
