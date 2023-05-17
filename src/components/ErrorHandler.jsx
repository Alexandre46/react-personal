function ErrorHandler(errorMessage) {
  return (
    <>
      <h1> Something went wrong</h1>
      <span> {errorMessage} </span>
    </>
  );
}

export default ErrorHandler;
