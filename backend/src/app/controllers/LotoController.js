import createBets from '../services/createBetsService';
import calculatePrice from '../services/calculatePrice';

class LotoController {
  async createNumbers(req, res) {
    const { type, number_of_bets, qtd_of_numbers_to_create } = req.body;

    let loto_return = [], value, min, max;

    if (type === 'megasena'){
      min = 6;
      max = 15;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 60);
      loto_return.push({game: 'Mega-Sena'});
    } else if (type === 'lotofacil') {
      min = 15;
      max = 20;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 25);
      loto_return.push({game: 'Lotofácil'});
    } else if (type === 'quina') {
      min = 5;
      max = 15;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 80);
      loto_return.push({game: 'Quina'});
    } else if (type === 'lotomania') {
      loto_return.push({game: 'Lotomania'});
      min = 50;
      max = 50;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 99);
    } else if (type === 'timemania') {
      min = 10;
      max = 10;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 80);
      loto_return.push({game: 'Timemania'});
    } else if (type === 'duplasena') {
      min = 6;
      max = 15;
      loto_return = createBets(number_of_bets, qtd_of_numbers_to_create, min, max, 50);
      loto_return.push({game: 'Dupla Sena'});
    }

    loto_return.push({ 
      value: calculatePrice(qtd_of_numbers_to_create, number_of_bets, type)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
    })
    return res.status(200).json(loto_return);
  }
}

export default new LotoController();