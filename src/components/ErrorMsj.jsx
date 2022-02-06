const ErrorMsj = ({ displayError, errorMsj }) => {
  return (
    <>
      {displayError && (
        <div>
          <p>{errorMsj}</p>
        </div>
      )}
    </>
  );
};

export default ErrorMsj;
