
import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://ludo-backend-2vug.onrender.com');

function App() {
  const [player, setPlayer] = useState('');
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (player && room) {
      socket.emit('join_room', { player, room });
    }
  };

  return (
    <div>
      <h1>Join Ludo Game</h1>
      <input placeholder="Player Name" onChange={(e) => setPlayer(e.target.value)} />
      <input placeholder="Room ID" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
}

export default App;
