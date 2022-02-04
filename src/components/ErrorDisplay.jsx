const ErrorDisplay = ({ showError, errorMsj }) => {
  return (
    <>
      {showError && (
        <div>
          <p>{errorMsj}</p>
        </div>
      )}
    </>
  );
};

export default ErrorDisplay;
