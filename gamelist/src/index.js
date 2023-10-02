// import React from 'react';
import ReactDOM from "react-dom/client"

import './/css/index.css';


const GameList = () => {
    
    const firstGame = {
        creator:'FromSoftware',
        title:'Elden Ring',
        img:'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png'
    }

    const secondGame = {
        creator:'FromSoftware',
        title:'Dark Souls III',
        img:'https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png'
    }

    return (
        <section className='gamelist'>
            <Game creator={firstGame.creator} title={firstGame.title} img={firstGame.img} >
                <p>Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin.</p>
                <button>Purchase</button>
            </Game>
            <Game creator={secondGame.creator} title={secondGame.title} img={secondGame.img} />
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

const Game = ({creator, title, img, children}) => {
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