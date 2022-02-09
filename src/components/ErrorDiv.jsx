function ErrorDiv({ showError, errorMsj }) {
  return <div>{showError && <p>{errorMsj}</p>}</div>;
}

export default ErrorDiv;
