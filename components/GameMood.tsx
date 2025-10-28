'use client';
import { useState } from 'react';

export default function GameMood() {
  const [emoji, setEmoji] = useState<string>('');

  return (
    <div className="game-card">
      <h2>😊 Estado de ánimo</h2>
      <div className="buttons">
        <button onClick={() => setEmoji('😢')}>Triste</button>
        <button onClick={() => setEmoji('😊')}>Feliz</button>
        <button onClick={() => setEmoji('❤️')}>Enamorado</button>
      </div>
      {emoji && <p className="emoji">{emoji}</p>}
    </div>
  );
}
