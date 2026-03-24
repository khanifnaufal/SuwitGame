import React from 'react';

export const GameCard = ({ choice, value, onSelect, isActive, isShaking }) => {
  const icons = {
    1: <span className="text-6xl">✊</span>,
    2: <span className="text-6xl">✋</span>,
    3: <span className="text-6xl">✌️</span>,
  };

  const labels = {
    1: 'Batu',
    2: 'Kertas',
    3: 'Gunting',
  };

  return (
    <button
      onClick={() => onSelect(value)}
      className={`choice-card ${
        isActive ? 'choice-card-active' : 'choice-card-inactive'
      } ${isShaking ? 'shake-animation' : ''}`}
      disabled={isShaking}
    >
      {icons[value]}
      <span className="mt-4 text-lg font-semibold">{labels[value]}</span>
    </button>
  );
};
