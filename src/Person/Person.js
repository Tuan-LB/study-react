import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> Person name: {props.name} and age: {props.age} </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;