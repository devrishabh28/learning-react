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

const GameList = () => {
    return (
        <section className='gamelist'>
            {games.map((game) => <Game game={game} key={game.id} />)}
        </section>
    );
}

// const Game = (props) => {
//     console.log(props);
//     const {creator, title, img} = props.game;
//     return (
//         <article className='game'>
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{creator.toUpperCase()}</h4>
//         </article>
//     );
// }

const Game = ({game: {creator, title, img, children}}) => {
    return (
        <article className='game'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{creator.toUpperCase()}</h4>
            {children}
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GameList />)