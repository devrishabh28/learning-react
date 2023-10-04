import { useState } from 'react';

const Person = ({id, name, age, hobby}) => {

  const style = {
    margin:'0.5rem 0 0.5rem 0',
    background:'#fff',
    borderRadius: '0.45rem',
    border: '0.5px solid #D7D2D2',
    padding: '3rem 5rem',
    // display: 'flex',
    // justifyContent: 'space-between'
  }

  return <div style={style}>
      <h4 style={{margin:'0'}}>{name}</h4>
      <h4 style={{margin:'0'}}>{age}</h4>
      <h4 style={{margin:'0'}}>Enjoys: {hobby}</h4>
    </div>
}

const UseStateObject = () => {

  const cardHolder = [
    {
      id: '1',
      name: 'John',
      age: 28,
      hobby: 'Gaming'
    },
    {
      id:'2',
      name: 'Susan',
      age: 24,
      hobby: 'Singing'
    },
    {
      id:'3',
      name: 'Paul',
      age: 26,
      hobby: 'Programming'
    },
    {
      id:'4',
      name: 'Frank',
      age: 22,
      hobby: 'Football'
    }
  ]

  const getNextPerson = () => (current + 1) % cardHolder.length

  const [current, setCurrent] = useState(0)
  const [person, setPerson] = useState(cardHolder[current])
  // const [name, setName] = useState(cardHolder[current].name)
  // const [age, setAge] = useState(cardHolder[current].age)
  // const [hobby, setHobby] = useState(cardHolder[current].hobby)


  const handleNextButton = () => {
    setCurrent(getNextPerson())

    setPerson(cardHolder[current])
    
  }

  return <>
      <article>
        <Person {...cardHolder[current]} key={cardHolder[current].id} />
      </article>
      <button type='button' className='btn' onClick={handleNextButton}>Show {cardHolder[getNextPerson()].name}</button>
    </>
};

export default UseStateObject;
