import React from 'react';
import './Person.css';

class Person extends React.Component {

    render() {
        return (
            <div className="person">
                <p> Person name: {this.props.name} and age: {this.props.age} </p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <input type="button" onClick={this.props.click} value="delete" />
            </div>
        )
    }
}

export default Person;