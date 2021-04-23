import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="person">
            <p> Person name: {props.name} and age: {props.age} </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="button" onClick={props.click} value="delete"/>
        </div>
    )
}

export default person;