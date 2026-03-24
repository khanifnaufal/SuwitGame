import React from 'react';

export const ResultDisplay = ({ userChoice, computerChoice, result, isVisible }) => {
  const icons = {
    1: <span className="text-8xl">✊</span>,
    2: <span className="text-8xl">✋</span>,
    3: <span className="text-8xl">✌️</span>,
  };

  const labels = {
    1: 'Batu',
    2: 'Kertas',
    3: 'Gunting',
  };

  if (!isVisible) return null;

  const resultColor = {
    win: 'from-green-400 to-green-500',
    lose: 'from-red-400 to-red-500',
    draw: 'from-yellow-400 to-yellow-500',
  };

  const resultText = {
    win: '🎉 User Menang!',
    lose: '😢 Komputer Menang!',
    draw: '🤝 Seri!',
  };

  const resultType = result === userChoice ? 'win' : result === computerChoice ? 'lose' : 'draw';

  return (
    <div className={`result-animation bg-gradient-to-r ${resultColor[resultType]} rounded-xl p-8 mb-8 shadow-2xl`}>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center text-white">
          <div className="mb-4">{icons[userChoice]}</div>
          <span className="text-xl font-semibold">{labels[userChoice]}</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <div className="mb-4">{icons[computerChoice]}</div>
          <span className="text-xl font-semibold">{labels[computerChoice]}</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">{resultText[resultType]}</h2>
      </div>
    </div>
  );
};
