import React from 'react';
import Person from './Person/Person';

class Persons extends React.PureComponent {

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
        console.log('[Personsssss.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Personsssss.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Personssssss.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Personssssss.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //             nextProps.changed !== this.props.changed ||
    //             nextProps.clicked !== this.props.clicked
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Personssssss.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Personssssss.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Personsssss.js] Inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        } );
    }
}

export default Persons;