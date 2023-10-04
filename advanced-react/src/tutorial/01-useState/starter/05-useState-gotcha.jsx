import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // setCount(count + 1);
    setTimeout(() => {
      console.log('clicked the button')
      setCount((prevState) => prevState + 1);
    }, 3000)
  }

  return <div>
    <h4>You Clicked {count} times</h4>
    <button type="button" className="btn" onClick={handleClick}>Click Me</button>
  </div>;
};

export default UseStateGotcha;
