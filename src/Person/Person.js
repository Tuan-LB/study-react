import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p> Person name: {props.name} and age: {props.age} </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.click}>delete</button>
        </div>
    )
}

export default person;