import React from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        persons: [
            { id: '111', name: 'max', age: 28 },
            { id: '112', name: 'jane', age: 24 },
            { id: '113', name: 'tony', age: 26 }
        ],
        key: 'ooooo',
        showPersons: false
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <WithClass classes="person">
                <p> Person name: {this.props.name} and age: {this.props.age} </p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <input type="button" onClick={this.props.click} value="delete" />
            </WithClass>
        )
        // return [
        //     <div key="5">
        //         <p key="1">Person name: {this.props.name} and age: {this.props.age}</p>
        //         <p key="2" >{this.props.children}</p>
        //         <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        //         <input key="4" type="button" onClick={this.props.click} value="delete" />
        //     </div>
        // ]
    }
}

export default Person;