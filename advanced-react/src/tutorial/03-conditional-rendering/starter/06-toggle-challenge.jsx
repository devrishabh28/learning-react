import { useState } from "react";

const ToggleChallenge = () => {

  const [canView, setCanView] = useState(false)

  return <div>
    <h2>toggle challenge</h2>
    <button type="button" className="btn" onClick={() => setCanView((prevCanView) => !prevCanView)}>Search for secret</button>
    {canView && <SomeComponent />}
  </div>;
};

const SomeComponent = () => {
  return (
    <div className="alert alert-danger">
      Hey, you found out the secret!!!
    </div>
  )
}

export default ToggleChallenge;
