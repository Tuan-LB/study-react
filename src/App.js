import React from 'react';
import './App.css';
import Person from './Person/Person';
// function App() {
//   return (
//     <div className="App">
//       <h1>First page</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>First page</h1>
        <p>This is really working!</p>
        <Person />
        <Person />
        <Person />
      </div>
    )
  }
}

export default App;
