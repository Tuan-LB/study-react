import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {

    state = {
        persons: [
            { id: '111', name: 'max', age: 28 },
            { id: '112', name: 'jane', age: 24 },
            { id: '113', name: 'tony', age: 26 }
        ],
        key: 'ooooo',
        showPersons: false
    }

    switchNameHandler = (name) => {
        console.log('Was clicked!');
        // DON'T DO THIS this.state.persons[0].name ='tony';
        console.log(this.state, 'Was clicked!');
        this.setState({ key: name })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }

        // let classes = ['red', 'bold'].join(' ');
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    }

}

export default App;
