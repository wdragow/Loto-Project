import React from 'react';
import './header.css';

export default function header() {
  return (
    <header>
      <p>Gerador numeros loterias</p>
      <nav>
        <ul>
          <li><button className='megasena'>megasena</button></li>
          <li><button className='lotofacil'>lotofacil</button></li>
          <li><button className='quina'>quina</button></li>
          <li><button className='lotomania'>lotomania</button></li>
          <li><button className='duplasena'>duplasena</button></li>
          <li><button className='loteca'>loteca</button></li>
        </ul>
      </nav>
    </header>
  );
}
