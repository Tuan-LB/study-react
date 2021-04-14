import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {

    state = {
        key: 'ooooo',
        persons: [
            { name: 'max', age: 28 },
            { name: 'jane', age: 24 }
        ]
    }

    switchNameHandler = (name) => {
        console.log('Was clicked!');
        // DON'T DO THIS this.state.persons[0].name ='tony';
        console.log(this.state, 'Was clicked!');
        this.setState({ key: name })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'jane', age: 24 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('zolo')}>Switch name</button>
                <p>{this.state.key}</p>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={() => this.switchNameHandler()}
                    changed={this.nameChangedHandler}
                >
                    clickkk !!!!!
                </Person>
            </div>
        )
    }

    // 3.22
}

export default App;
