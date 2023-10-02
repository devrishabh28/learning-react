import React from "react";
import ReactDOM from 'react-dom/client'

const Person = () => <h2>John Darksoul</h2>
const Message = () => {return <p>Hello there!</p>}

const  Greeting = () => {
    return (
        <>
            <div>
                <Person/>
                <Message />
            </div>
        </>);
}

// const  Greeting = () => {
//     return (<React.Fragment><h2>My First Component</h2><div><a href="#">Hello World!</a></div></React.Fragment>);
// }

// function Greeting(){
//     return React.createElement('h2', {}, 'hello world!')
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Greeting></Greeting>)
root.render(<Greeting/>)