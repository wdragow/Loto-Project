import React from 'react';
import './content.css';

import { useTypeOfGame } from '../../contexts/gameContext';

import DropdownQtdNumber from '../dropdown';
import LogoImgs from '../logoImg';

export default function Content() {
  const { backgroundColor } = useTypeOfGame();

  return (
    <div style={backgroundColor} className='content-container'>
      <div style={backgroundColor} className='content-item'>
        <LogoImgs />
        <div style={backgroundColor} className='content-item'>
          <p style={{ color: 'white' }}>Quantidade de números</p>
          <DropdownQtdNumber />
          <p style={{ color: 'white' }}>Quantidade de jogos</p>
          <input type='number' min={1} defaultValue='1' />
          <button type='button'>
            Gerar
          </button>
        </div>
      </div>
    </div>
  );
}
