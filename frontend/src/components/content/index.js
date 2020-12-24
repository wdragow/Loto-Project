import React from 'react';
import './content.css';

import { useTypeOfGame } from "../../contexts/gameContext";

export default function Content() {

  const { typeOfGame } = useTypeOfGame();

  function RenderContent() {
    if (typeOfGame === 'megasena'){
      return (
        <>
          <header>
            <p>

            </p>
          </header>
        </>
      );
    } else if (typeOfGame === 'lotofacil') {
      return (
        <>
          <header>
            <p>Lotofácil</p>
          </header>
        </>
      );
    } else if (typeOfGame === 'quina') {
      return (
        <>
          <header>
            <p>Quina</p>
          </header>
        </>
      );
    } else if (typeOfGame === 'lotomania') {
      return (
        <>
          <header>
            <p>Lotomania</p>
          </header>
        </>
      );
    } else if (typeOfGame === 'duplasena') {
      return (
        <>
          <header>
            <p>Dupla Sena</p>
          </header>
        </>
      );
    } else if (typeOfGame === 'timemania') {
      return (
        <>
          <header>
            <p>Timemania</p>
          </header>
        </>
      );
    }
  }

  return (
    <>
      <RenderContent />
    </>
  );
}