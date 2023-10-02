// import React from 'react';
import ReactDOM from "react-dom/client"

import './/css/index.css';

const games = [
    {
        id: 1,
        creator:'FromSoftware',
        title:'Elden Ring',
        img:'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png'
    },
    {
        id: 2,
        creator:'FromSoftware',
        title:'Dark Souls III',
        img:'https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png'
    }
]

/* const GameList = () => {
    return (
        <section className='gamelist'>
            {games.map((game) => <Game creator={game.creator} title={game.title} img={game.img} key={game.id} />)}
        </section>
    );
} */

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('handle form input')
    }
    
    const handleButtonClick = () => {
        alert('handle button click')
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input type="text" name="example1" onChange={handleFormInput} style={{margin: '1rem 0'}}/>
                <input type="text" name="example2" onChange={(e) => console.log(e.target.value)} style={{margin: '1rem 0'}}/>
            </form>
            <button onClick={handleButtonClick}>Click Me</button>
        </section>       
    )
}


const GameList = () => {

    const getGame = (id) => {
        const game = games.find((game) => game.id === id)

        if(game != null)
            console.log(game.title)
        
    }

    return (
        <section className='gamelist'>
            {games.map((game) => <Game {...game} key={game.id} getGame={getGame} />)}
        </section>
    );
}

// const Game = (props) => {
//     console.log(props);
//     const {creator, title, img} = props;
//     return (
//         <article className='game'>
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{creator.toUpperCase()}</h4>
//         </article>
//     );
// }

const Game = ({id, creator, title, img, getGame}) => {

    const handleButtonClick = () => {
        getGame(id)
    }

    return (
        <article className='game'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={handleButtonClick}>Click Me</button>
            <h4>{creator.toUpperCase()}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GameList />)