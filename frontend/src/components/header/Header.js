import React from 'react';
import './header.css';

import { useTypeOfGame } from "../../contexts/gameContext";

export default function Header() {

  const { setTypeOfGame } = useTypeOfGame();

  return (
    <header>
      {/* <p>Bem-vindo(a), selecione qual jogo deseja criar abaixo: </p> */}
      <nav>
        <ul>
          <li><button className='megasena' onClick={() => setTypeOfGame('megasena')}>Mega-Sena</button></li>
          <li><button className='lotofacil' onClick={() => setTypeOfGame('lotofacil')}>Lotofácil</button></li>
          <li><button className='quina' onClick={() => setTypeOfGame('quina')}>Quina</button></li>
          <li><button className='lotomania' onClick={() => setTypeOfGame('lotomania')}>Lotomania</button></li>
          <li><button className='duplasena' onClick={() => setTypeOfGame('duplasena')}>Dupla-Sena</button></li>
          <li><button className='timemania' onClick={() => setTypeOfGame('timemania')}>Timemania</button></li>
        </ul>
      </nav>
    </header>
  );
}
