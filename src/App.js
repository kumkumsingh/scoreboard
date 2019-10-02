import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import Scoreboard from './Components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <Title content = 'This is new MyScoreBoard'/>
      <main>
        <Scoreboard/>
      </main>
    </div>
  );
}

export default App;
