const Game = ({number, creator, title, img}) => {

    return (
        <article className='game'>
            <span className="number">{`#${number}`}</span>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{creator.toUpperCase()}</h4>
        </article>
    );
}

export default Game