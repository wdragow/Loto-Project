import React from 'react';

import { useTypeOfGame } from '../../contexts/gameContext';

import DUPLASENA from '../../assets/images/DUPLASENA.png';
import LOTOFACIL from '../../assets/images/LOTOFACIL.png';
import LOTOMANIA from '../../assets/images/LOTOMANIA.png';
import MEGASENA from '../../assets/images/MEGASENA.png';
import QUINA from '../../assets/images/QUINA.png';
import TIMEMANIA from '../../assets/images/TIMEMANIA.png';

export default function LogoImgs() {
  const { typeOfGame } = useTypeOfGame();

  if (typeOfGame === 'megasena') {
    return (
      <img src={MEGASENA} alt='Mega-Sena' width={500} />
    );
  } if (typeOfGame === 'lotofacil') {
    return (
      <img src={LOTOFACIL} alt='Lotofácil' width={500} />
    );
  } if (typeOfGame === 'quina') {
    return (
      <img src={QUINA} alt='Quina' width={500} />
    );
  } if (typeOfGame === 'lotomania') {
    return (
      <img src={LOTOMANIA} alt='Lotomania' width={500} />
    );
  } if (typeOfGame === 'duplasena') {
    return (
      <img src={DUPLASENA} alt='Dupla Sena' width={500} />
    );
  } if (typeOfGame === 'timemania') {
    return (
      <img src={TIMEMANIA} alt='Timemania' width={500} />
    );
  }
}
