import './App.css';
import Header from './components/header/Header';

import { useTypeOfGame } from "../src/contexts/gameContext";

function App() {
  const { typeOfGame } = useTypeOfGame();

  return (
    <>
    <Header></Header>
      <div className="wrapper">
        {typeOfGame}
      </div>
    </>
  );
}

export default App;
