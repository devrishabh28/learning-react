import { useState } from "react";

const ControlledInputs = () => {

  const  [name, setName] = useState('');
  const  [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    console.log(name, email);
    alert(`${name} ${email}`)
  }

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setName(e.target.value);
  }

  return (<form className="form" onSubmit={handleSubmit}>
    <h4>Controlled Inputs</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" id="name" className="form-input" value={name} onChange={handleChange}/>
    </div>
    <div className="form-row">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" id="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-block">Submit</button>
  </form>);
};
export default ControlledInputs;
