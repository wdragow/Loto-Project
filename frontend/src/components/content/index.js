import React from 'react';
import './content.css';

import { useTypeOfGame } from '../../contexts/gameContext';

import DUPLASENA from '../../assets/images/DUPLASENA.png';
import LOTOFACIL from '../../assets/images/LOTOFACIL.png';
import LOTOMANIA from '../../assets/images/LOTOMANIA.png';
import MEGASENA from '../../assets/images/MEGASENA.png';
import QUINA from '../../assets/images/QUINA.png';
import TIMEMANIA from '../../assets/images/TIMEMANIA.png';

export default function Content() {
  const { typeOfGame } = useTypeOfGame();

  function RenderContent() {
    if (typeOfGame === 'megasena') {
      return (
        <div style={{ backgroundColor: 'var(--megasena)' }}>
          <div>
            <img src={MEGASENA} alt='Mega-Sena' width={500} />
          </div>
          <div />
        </div>
      );
    } if (typeOfGame === 'lotofacil') {
      return (
        <div style={{ backgroundColor: 'var(--lotofacil)' }}>
          <img src={LOTOFACIL} alt='Lotofácil' width={500} />
        </div>
      );
    } if (typeOfGame === 'quina') {
      return (
        <div style={{ backgroundColor: 'var(--quina)' }}>
          <img src={QUINA} alt='Quina' width={500} />
        </div>
      );
    } if (typeOfGame === 'lotomania') {
      return (
        <div style={{ backgroundColor: 'var(--lotomania)' }}>
          <img src={LOTOMANIA} alt='Lotomania' width={500} />
        </div>
      );
    } if (typeOfGame === 'duplasena') {
      return (
        <div style={{ backgroundColor: 'var(--duplasena)' }}>
          <img src={DUPLASENA} alt='Dupla Sena' width={500} />
        </div>
      );
    } if (typeOfGame === 'timemania') {
      return (
        <div style={{ backgroundColor: 'var(--timemania)' }}>
          <img src={TIMEMANIA} alt='Timemania' width={500} />
        </div>
      );
    }
  }

  return (
    <>
      <RenderContent />
    </>
  );
}
