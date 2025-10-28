'use client';
import { useState } from 'react';

export default function GameTruthDare() {
  const truths: string[] = [
    '¿Qué es lo que más te gusta de ti?',
    '¿Alguna vez mentiste a un amigo?',
    '¿A quién le contarías un secreto?',
  ];

  const dares: string[] = [
    'Canta una canción 🎤',
    'Haz una mueca 🤪',
    'Cuenta un chiste 😂',
  ];

  const [result, setResult] = useState<string>('');

  const randomItem = (list: string[]) => list[Math.floor(Math.random() * list.length)];

  return (
    <div className="game-card">
      <h2>🎯 Verdad o Reto</h2>
      <div className="buttons">
        <button onClick={() => setResult(randomItem(truths))}>Verdad</button>
        <button onClick={() => setResult(randomItem(dares))}>Reto</button>
      </div>
      {result && <p className="result">{result}</p>}
    </div>
  );
}
