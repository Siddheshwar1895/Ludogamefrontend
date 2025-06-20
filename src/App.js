
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://ludo-backend-2vug.onrender.com");

function App() {
  const [playerName, setPlayerName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);
  const [dice, setDice] = useState(1);

  const joinRoom = () => {
    if (playerName && roomId) {
      socket.emit("joinRoom", { playerName, roomId });
      setJoined(true);
    }
  };

  const rollDice = () => {
    const rolled = Math.floor(Math.random() * 6) + 1;
    setDice(rolled);
    socket.emit("rollDice", { playerName, roomId, value: rolled });
  };

  useEffect(() => {
    socket.on("diceRolled", ({ playerName, value }) => {
      console.log(`${playerName} rolled a ${value}`);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: 50 }}>
      {!joined ? (
        <>
          <h2>Join Ludo Game</h2>
          <input
            placeholder="Player Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <br /><br />
          <input
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <br /><br />
          <button onClick={joinRoom}>Join Game</button>
        </>
      ) : (
        <>
          <h2>Welcome {playerName}</h2>
          <p>Room ID: {roomId}</p>
          <h3>🎲 Dice: {dice}</h3>
          <button onClick={rollDice}>Roll Dice</button>
        </>
      )}
    </div>
  );
}

export default App;
