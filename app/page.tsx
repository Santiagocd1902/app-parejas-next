'use client';
import { useState } from 'react';
import GameWord from '@/components/GameWord';
import GameMood from '@/components/GameMood';
import GameTruthDare from '@/components/GameTruthDare';
import './globals.css';

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="app-container">
      <h1>🎮 Juegos Originales</h1>

      <div className="menu">
        <button onClick={() => setSelectedGame('word')}>Adivina la palabra</button>
        <button onClick={() => setSelectedGame('mood')}>Estado de ánimo</button>
        <button onClick={() => setSelectedGame('truthdare')}>Verdad o reto</button>
      </div>

      <div className="game-area">
        {!selectedGame && <p>Selecciona un juego para comenzar 🎲</p>}
        {selectedGame === 'word' && <GameWord />}
        {selectedGame === 'mood' && <GameMood />}
        {selectedGame === 'truthdare' && <GameTruthDare />}
      </div>
    </div>
  );
}
