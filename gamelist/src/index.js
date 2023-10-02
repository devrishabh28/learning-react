// import React from 'react';
import ReactDOM from "react-dom/client"

import './css/index.css';
import { games } from './games'
import Game from "./Game";

const GameList = () => {
    return (
        <section className="bestgames">
        <h1>Best Games</h1>
        <section className='gamelist'>
            {games.map((game, index) => <Game {...game} number={index + 1} key={game.id} />)}
        </section>
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<GameList />)