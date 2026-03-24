import React, { useState, useEffect } from 'react';
import { GameCard } from './components/GameCard';
import { Scoreboard } from './components/Scoreboard';
import { ResultDisplay } from './components/ResultDisplay';
import './index.css';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gamePhase, setGamePhase] = useState('selection'); // selection, playing, result

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return 'DRAW';
    }

    const winConditions = {
      // Rock vs Paper, Scissors
      1: { 2: 'lose', 3: 'win' },
      // Paper vs Rock, Scissors
      2: { 1: 'win', 3: 'lose' },
      // Scissors vs Rock, Paper
      3: { 1: 'lose', 2: 'win' },
    };

    const outcome = winConditions[user][computer];
    if (outcome === 'win') return user;
    if (outcome === 'lose') return computer;
  };

  const handleChoiceSelect = (choice) => {
    if (gamePhase !== 'selection') return;

    setUserChoice(choice);
    setGamePhase('playing');
    setIsShaking(true);

    // Animate shaking
    setTimeout(() => {
      const comp = Math.floor(Math.random() * 3) + 1;
      setComputerChoice(comp);
      setIsShaking(false);

      // Determine result after animation
      setTimeout(() => {
        const gameResult = determineWinner(choice, comp);
        setResult(gameResult);
        setShowResult(true);

        // Update scores
        if (gameResult === 'DRAW') {
          setDraws(draws + 1);
        } else if (gameResult === choice) {
          setUserScore(userScore + 1);
        } else {
          setComputerScore(computerScore + 1);
        }

        setGamePhase('result');
      }, 600);
    }, 1000);
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setShowResult(false);
    setGamePhase('selection');
  };

  const handleResetScore = () => {
    setUserScore(0);
    setComputerScore(0);
    setDraws(0);
    handlePlayAgain();
  };

  return (
    <div className="min-h-screen text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Batu Gunting Kertas
          </h1>
          <p className="text-slate-300 text-lg">Permainan Klasik dengan Sentuhan Modern</p>
        </div>

        {/* Scoreboard */}
        <Scoreboard 
          userScore={userScore} 
          computerScore={computerScore} 
          draws={draws}
        />

        {/* Result Display */}
        {userChoice && computerChoice && (
          <ResultDisplay 
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={result}
            isVisible={showResult}
          />
        )}

        {/* Game Status */}
        {gamePhase === 'playing' && (
          <div className="text-center mb-8">
            <div className="inline-block animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg px-6 py-3">
              <p className="text-lg font-semibold">🤔 Komputer sedang berfikir...</p>
            </div>
          </div>
        )}

        {/* Choice Cards */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[1, 2, 3].map((choice) => (
            <GameCard
              key={choice}
              choice={choice}
              value={choice}
              onSelect={handleChoiceSelect}
              isActive={userChoice === choice}
              isShaking={isShaking && userChoice === choice}
            />
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          {gamePhase === 'result' && (
            <button
              onClick={handlePlayAgain}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              🔄 Main Lagi
            </button>
          )}

          <button
            onClick={handleResetScore}
            className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            🔁 Reset Skor
          </button>
        </div>

        {/* Game Rules */}
        <div className="mt-12 p-6 bg-slate-700 bg-opacity-50 rounded-lg border border-slate-600">
          <h3 className="text-xl font-bold mb-4 text-amber-300">📋 Aturan Permainan</h3>
          <ul className="space-y-2 text-slate-200">
            <li>✊ <strong>Batu</strong> mengalahkan Gunting ✌️</li>
            <li>✋ <strong>Kertas</strong> mengalahkan Batu ✊</li>
            <li>✌️ <strong>Gunting</strong> mengalahkan Kertas ✋</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
