'use client';
import { useState } from 'react';

interface Word {
  word: string;
  hint: string;
}

export default function GameWord() {
  const words: Word[] = [
    { word: 'perro', hint: 'Animal doméstico' },
    { word: 'gato', hint: 'Maúlla' },
    { word: 'arbol', hint: 'Tiene hojas' },
    { word: 'humano', hint: 'Ser racional' },
    { word: 'casa', hint: 'Lugar donde vives' },
  ];

  const [currentWord, setCurrentWord] = useState<Word>(words[0]);
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleCheck = () => {
    if (input.toLowerCase() === currentWord.word) {
      setMessage('✅ ¡Correcto!');
      const next = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(next);
      setInput('');
      setShowHint(false);
    } else {
      setMessage('❌ Intenta de nuevo');
    }
  };

  return (
    <div className="game-card">
      <h2>🔤 Adivina la palabra</h2>
      <p>Palabra: {'_ '.repeat(currentWord.word.length)}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu respuesta"
      />
      <div className="buttons">
        <button onClick={handleCheck}>Comprobar</button>
        <button onClick={() => setShowHint(true)}>Pista</button>
      </div>
      {showHint && <p className="hint">💡 {currentWord.hint}</p>}
      <p className="message">{message}</p>
    </div>
  );
}
