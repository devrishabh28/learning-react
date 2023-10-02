// import React from 'react';
import ReactDOM from "react-dom/client"

import './css/index.css';

const GameList = () => {
    return (
        <section className='gamelist'>
            <Game />
            <Game />
            <Game />
            <Game />
        </section>
    );
}

const Game = () => {
    return (
        <article className='game'>
            <Image />
            <Title />
            <Creator />
        </article>
    );
}

const Image = () => <img src='https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png' alt='Elden Ring' />
const Title = () => <h2>Elden Ring</h2>
const Creator = () => {
    const inlineHeadingStyles = {color:'#617d98', fontSize:'0.75rem', marginTop:'0.5rem'}
    return <h4 style={inlineHeadingStyles}>FromSoftware</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GameList />)