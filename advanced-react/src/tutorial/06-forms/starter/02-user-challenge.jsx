import { useState } from "react";
import { data } from '../../../data';
const UserChallenge = () => {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!user) return;

    const newId = users.reduce((prev, curr) => (prev && prev.id > curr.id) ? prev : curr).id + 1;
    const newUser = {
      'id': newId,
      'name': user
    };
    const newUsers = [...users, newUser];
    
    setUsers(newUsers);
  }

  const handleRemove = (id) => {
    const newUsers = users.filter(user => user.id != id);
    setUsers(newUsers);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={user} onChange={(e) => setUser(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map(user => <User {...user} handleRemove={handleRemove} key={user.id}/>)}
    </div>
  );
};

const User = ({id, name, handleRemove}) => {

  const style = {
    margin:'0.5rem 0 0.5rem 0',
    background:'#fff',
    borderRadius: '0.45rem',
    border: '0.5px solid #D7D2D2',
    padding: '1rem 5rem',
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (<div style={style}>
    <h4 style={{margin:'0'}}>{name}</h4>
    <button type="button" className="btn" onClick={() => handleRemove(id)}>Remove</button>
  </div>);
}
export default UserChallenge;
