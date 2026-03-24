import React from 'react';

export const Scoreboard = ({ userScore, computerScore, draws }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white shadow-lg">
        <div className="text-4xl font-bold">{userScore}</div>
        <div className="text-sm font-semibold mt-2 uppercase tracking-wide">Kemenangan User</div>
      </div>
      <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-6 text-center text-white shadow-lg">
        <div className="text-4xl font-bold">{draws}</div>
        <div className="text-sm font-semibold mt-2 uppercase tracking-wide">Seri</div>
      </div>
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-center text-white shadow-lg">
        <div className="text-4xl font-bold">{computerScore}</div>
        <div className="text-sm font-semibold mt-2 uppercase tracking-wide">Kemenangan Komputer</div>
      </div>
    </div>
  );
};
