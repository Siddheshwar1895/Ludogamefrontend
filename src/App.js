// Ludo UI Preview: Phase 1
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="board">
      <h1>Ludo Game</h1>
      <div className="zone red">Red Zone</div>
      <div className="zone green">Green Zone</div>
      <div className="zone yellow">Yellow Zone</div>
      <div className="zone blue">Blue Zone</div>
      <div className="dice">🎲</div>
    </div>
  );
}

export default App;
