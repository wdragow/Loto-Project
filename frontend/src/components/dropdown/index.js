import React from 'react';
import Select from 'react-select';

import { useTypeOfGame } from '../../contexts/gameContext';

export default function Dropdown() {
  const { typeOfGame, qtdNumberOption } = useTypeOfGame();

  if (typeOfGame === 'megasena') {
    return (
      <Select
        label='Single select'
        options={qtdNumberOption}
        placeholder='Selecione'
        key='1'
      />
    );
  } if (typeOfGame === 'lotofacil') {
    return (
      <Select
        options={qtdNumberOption}
        placeholder='Selecione'
        key='2'
      />
    );
  } if (typeOfGame === 'quina') {
    return (
      <Select
        options={qtdNumberOption}
        placeholder='Selecione'
        key='3'
      />
    );
  } if (typeOfGame === 'lotomania') {
    return (
      <Select
        options={qtdNumberOption}
        placeholder='Selecione'
        key='4'
      />
    );
  } if (typeOfGame === 'duplasena') {
    return (
      <Select
        options={qtdNumberOption}
        placeholder='Selecione'
        key='5'
      />
    );
  } if (typeOfGame === 'timemania') {
    return (
      <Select
        options={qtdNumberOption}
        placeholder='Selecione'
        key='6'
      />
    );
  }
}
