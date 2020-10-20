import React from 'react';
import './App.css';
import Stopwatch from './Stopwatch';
import Timer from  './Timer';


class App extends React.Component {
  render(){
    return (
      <div>
        <Stopwatch/>
        <Timer/>
      </div>
    );
  }
}
export default App;