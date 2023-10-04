import { useState } from 'react';
import { data } from '../../../data'

const Person = ({id, name, stateHandler}) => {

  const handleRemoveButton = () => {
    stateHandler(id)
  }

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
      <h4 style={{margin:'0'}}>{name}</h4>
      <button type='button' className='btn' onClick={handleRemoveButton}>Remove</button>
    </div>
}

const UseStateArray = () => {

  console.log(data);

  const [people, setPeople] = useState(data)

  const handleClearButton = () => {
    setPeople([])
  }

  const handleRemoveButton = (id) => {
    setPeople(people.filter(person => person.id != id))
  }

  return <>
      <article>
        {people.map((person) => <Person {...person} stateHandler={handleRemoveButton} key={person.id}/>)}
      </article>
      <button type='button' className='btn' onClick={handleClearButton}>Clear</button>
    </>
};

export default UseStateArray;
