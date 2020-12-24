class LotoController {
  async createNumbers(req, res) {
    const { type, number_of_bets, qtd_of_numbers_to_create } = req.body;

    if (type === 'megasena'){

    } else if (type === 'megasena') {

    } else if (type === 'megasena') {

    } else if (type === 'megasena') {

    } else if (type === 'megasena') {

    } else if (type === 'megasena') {

    }

    return res.status(200).json('Deu certo!');
  }
}

export default new LotoController();