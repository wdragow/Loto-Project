import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [typeOfGame, setTypeOfGame] = useState('megasena');

  return (
    <GameContext.Provider
      value={{
        typeOfGame,
        setTypeOfGame
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