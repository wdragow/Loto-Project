import React, { useState } from 'react';
import './header.css';

import { useTypeOfGame } from '../../contexts/gameContext';

export default function Header() {
  const { setTypeOfGame } = useTypeOfGame();

  const [background, setBackground] = useState({ backgroundColor: 'var(--light)' });

  return (
    <header>
      {/* <p>Bem-vindo(a), selecione qual jogo deseja criar abaixo: </p> */}
      <nav style={background}>
        <ul>
          <li>
            <button
              type='button'
              className='megasena'
              onClick={() => setTypeOfGame('megasena')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--megasena)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Mega-Sena
            </button>
          </li>
          <li>
            <button
              type='button'
              className='lotofacil'
              onClick={() => setTypeOfGame('lotofacil')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--lotofacil)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Lotofácil
            </button>
          </li>
          <li>
            <button
              type='button'
              className='quina'
              onClick={() => setTypeOfGame('quina')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--quina)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Quina
            </button>
          </li>
          <li>
            <button
              type='button'
              className='lotomania'
              onClick={() => setTypeOfGame('lotomania')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--lotomania)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Lotomania
            </button>
          </li>
          <li>
            <button
              type='button'
              className='duplasena'
              onClick={() => setTypeOfGame('duplasena')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--duplasena)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Dupla Sena
            </button>
          </li>
          <li>
            <button
              type='button'
              className='timemania'
              onClick={() => setTypeOfGame('timemania')}
              onMouseOver={() => setBackground({ backgroundColor: 'var(--timemania)' })}
              onMouseLeave={() => setBackground({ backgroundColor: 'var(--light)' })}
              onFocus={() => undefined}
            >
              Timemania
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
