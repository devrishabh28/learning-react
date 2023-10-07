import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle((prevToggle) => !prevToggle)

  return <div>
    <h2>cleanup function</h2>
    <button type="button" className="btn" onClick={handleToggle}>Toggle</button>
    {toggle && <SecondComponent /> }
  </div>;
};

const SecondComponent = () => {

  useEffect(() => {
    const someFunc = () => {
      // some logic
    }

    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])

  return (
    <div>
      <h1>Hello there!!</h1>
    </div>
  );
}

export default CleanupFunction;
