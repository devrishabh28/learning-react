import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const User = ({id, avatar_url, login, html_url, stateHandler}) => {

  const style = {
    margin:'0.5rem 0 0.5rem 0',
    background:'#fff',
    borderRadius: '0.45rem',
    border: '0.5px solid #D7D2D2',
    padding: '0.5rem 5rem',
    display: 'flex',
    justifyContent: 'space-between'
  }

  return <div style={style}>
    <img src={avatar_url} alt={login} style={{maxWidth:'4rem', borderRadius:'3rem'}} />
    <div style={{flexGrow:'1', textAlign:'left', marginLeft:'3rem', alignSelf:'center'}}>
    <h5 style={{margin:'0'}}>{login}</h5>
      <a href={html_url} style={{color:'#8C87C6'}}>Profile</a>
    </div>
    </div>
}

const FetchData = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    (async () => {
      try{
        const githubUsers = await fetch(url)
        const usersData = await githubUsers.json()
        console.log(usersData)
        setUsers(usersData)
      }catch(error){
        console.log(error)
      }
    })()

  },[])

  return <section>
    <h2>Github Users</h2>
      <article>
          {users.map(user => <User {...user} key={user.id} />)}
      </article>
    </section>;
};
export default FetchData;
