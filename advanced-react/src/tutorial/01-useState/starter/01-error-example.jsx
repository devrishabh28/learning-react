const ErrorExample = () => {

  var count = 0;
  const handleBUttonClick = () => {
    count++;
    console.log(count)
  }

  return (
      <>
        <h2>{count}</h2>
        <button type="button" className="btn" onClick={handleBUttonClick}>Increment</button>
      </>
    );
};

export default ErrorExample;
