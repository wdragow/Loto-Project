import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [typeOfGame, setTypeOfGame] = useState('megasena');

  const [backgroundColor, setBackgroundColor] = useState({ backgroundColor: 'var(--megasena)' });

  return (
    <GameContext.Provider
      value={{
        typeOfGame,
        setTypeOfGame,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useTypeOfGame() {
  const context = useContext(GameContext);

  return context;
}
