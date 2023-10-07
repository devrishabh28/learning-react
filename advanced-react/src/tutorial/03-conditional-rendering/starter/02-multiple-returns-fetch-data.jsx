import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const val = await fetch(url)

        if(!val.ok){
          setIsError(true)
          setIsLoading(false)
        }

        const userData = await val.json()
        setUser(userData)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchUser()
  }, [])

  if(isLoading)
    return <h2>Loading...</h2>

  if(isError)
    return <h2>Something went wrong...</h2>

  const {name, avatar_url, bio, company} = user

  return <div>
    <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={name} />
    <h2>{name}</h2>
    <h4>Works At {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
