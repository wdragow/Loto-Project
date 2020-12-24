import getRandomNumbers from '../utils/randomize';

export default function megasenaCreateNumbers(number_of_bets, qtd_of_numbers_to_create) {
  if (qtd_of_numbers_to_create > 15) {
    return { error: 'Quantidade de números excedida! Deve ser de no mínimo 6 e máximo 15.' }
  } else if (qtd_of_numbers_to_create < 6 ) {
    return { error: 'Quantidade de números muito baixa! Deve ser de no mínimo 6 e máximo 15.' }
  } else {
    let array_of_bets = [];
    for (let i = 0; i < number_of_bets; i++) {
      array_of_bets.push({
        bet : i,
        numbers : getRandomNumbers(1, 60, qtd_of_numbers_to_create),
      })
    }
    let value;
    switch (Number(qtd_of_numbers_to_create)) {
      case 6:
        value = 4.50 * number_of_bets;
        break;

      case 7:
        value = 31.50 * number_of_bets;
        break;

      case 8:
        value = 126.00 * number_of_bets;
        break;

      case 9:
        value = 378.00 * number_of_bets;
        break;

      case 10:
        value = 945.00 * number_of_bets;
        break;

      case 11:
        value = 2079.00 * number_of_bets;
        break;

      case 12:
        value = 4158.00 * number_of_bets;
        break;

      case 13:
        value = 7722.00 * number_of_bets;
        break;

      case 14:
        value = 13513.50 * number_of_bets;
        break;

      case 15:
        value = 22522.50 * number_of_bets;
        break;

      default:
        break;
    }

    array_of_bets.push({ value: value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) })

    return array_of_bets;
  }
}