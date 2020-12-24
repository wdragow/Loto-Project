import megasenaCreate from '../services/megasenaService';

class LotoController {
  async createNumbers(req, res) {
    const { type, number_of_bets, qtd_of_numbers_to_create } = req.body;

    if (type === 'megasena'){
      const megasena_return = megasenaCreate(number_of_bets, qtd_of_numbers_to_create);
      return res.status(200).json(megasena_return);
    } else if (type === 'lotofacil') {

    } else if (type === 'quina') {

    } else if (type === 'lotomania') {

    } else if (type === 'timemania') {

    } else if (type === 'duplasena') {

    } else if (type === 'federal') {

    } else if (type === 'loteca') {

    } 
    return res.status(200).json('Deu certo!');
  }
}

export default new LotoController();