
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">LUDO GAME</h1>
      <div className="board">
        <div className="player player1">PLAYER 1<div className="tokens red"/></div>
        <div className="player player2">PLAYER 2<div className="tokens yellow"/></div>
        <div className="player player3">PLAYER 3<div className="tokens green"/></div>
        <div className="player player4">PLAYER 4<div className="tokens blue"/></div>
        <div className="center"></div>
      </div>
      <div className="bet-section">
        <span>BET AMOUNT</span>
        <span>₹ 50</span>
      </div>
      <button className="roll-btn">ROLL DICE</button>
    </div>
  );
}

export default App;
