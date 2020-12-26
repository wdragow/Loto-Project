/* eslint-disable no-plusplus */
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [typeOfGame, setTypeOfGame] = useState('megasena');

  const [backgroundColor, setBackgroundColor] = useState({ backgroundColor: 'var(--megasena)' });

  const [qtdNumberOption, setQtdNumberOption] = useState(null);

  useEffect(() => {
    const qtd = [];
    if (typeOfGame === 'megasena') {
      for (let index = 6; index < 16; index++) {
        qtd.push({ value: index, label: index });
      }
    } else if (typeOfGame === 'lotofacil') {
      for (let index = 15; index < 21; index++) {
        qtd.push({ value: index, label: index });
      }
    } else if (typeOfGame === 'quina') {
      for (let index = 5; index < 16; index++) {
        qtd.push({ value: index, label: index });
      }
    } else if (typeOfGame === 'lotomania') {
      qtd.push({ value: '50', label: '50' });
    }
    setQtdNumberOption(qtd);
  }, [typeOfGame]);

  return (
    <GameContext.Provider
      value={{
        typeOfGame,
        setTypeOfGame,
        backgroundColor,
        setBackgroundColor,
        qtdNumberOption,
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
