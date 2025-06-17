import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("https://ludo-backend-2vug.onrender.com");

function App() {
  const [playerName, setPlayerName] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [players, setPlayers] = useState([]);
  const [diceValue, setDiceValue] = useState(null);

  const handleJoin = () => {
    if (playerName && room) {
      socket.emit('join-room', { playerName, room });
      setJoined(true);
    }
  };

  useEffect(() => {
    socket.on('room-players', (data) => {
      setPlayers(data.players);
    });

    socket.on('dice-rolled', ({ value }) => {
      setDiceValue(value);
    });
  }, []);

  const rollDice = () => {
    socket.emit('roll-dice', { room });
  };

  return (
    <div style={{ padding: 20 }}>
      {!joined ? (
        <div>
          <h2>Join Ludo Game</h2>
          <input placeholder="Player Name" value={playerName} onChange={e => setPlayerName(e.target.value)} />
          <input placeholder="Room ID" value={room} onChange={e => setRoom(e.target.value)} />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <h2>Room: {room}</h2>
          <h3>Players:</h3>
          <ul>
            {players.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <button onClick={rollDice}>Roll Dice</button>
          {diceValue && <h3>Dice Rolled: {diceValue}</h3>}
        </div>
      )}
    </div>
  );
}

export default App;
