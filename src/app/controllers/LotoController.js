class LotoController {
  async listar(req, res) {
    return res.status(200).json('Deu certo!');
  }
}

export default new LotoController();