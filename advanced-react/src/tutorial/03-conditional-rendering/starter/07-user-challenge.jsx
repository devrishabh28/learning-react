import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null)

  const loginHandler = () => {
    setUser({name: 'Paul'})
  }

  const logoutHandler = () => {
    setUser(null)
  }

  return <div>
    <h2>user challenge</h2>
    {user? <Dashboard user={user} logoutHandler={logoutHandler}/>:<Login loginHandler={loginHandler}/>}
  </div>;
};

const Dashboard = ({user, logoutHandler}) => {
  return (<div>
    <h4>Hello {user.name}!</h4>
    <button type="button" className="btn" onClick={logoutHandler}>Logout</button>
  </div>);
}

const Login = ({loginHandler}) => {
  return (<div>
    <h4>Please login</h4>
    <button type="button" className="btn" onClick={loginHandler}>Login</button>
  </div>);
}

export default UserChallenge;
