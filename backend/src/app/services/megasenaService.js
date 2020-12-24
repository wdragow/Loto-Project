import getRandomNumbers from '../utils/randomize';

export default function megasenaCreateNumbers(number_of_bets, qtd_of_numbers_to_create) {
  if (qtd_of_numbers_to_create > 15) {
    return { error: 'Quantidade de números excedida! Deve ser de no mínimo 6 e máximo 15.' }
  } else if (qtd_of_numbers_to_create < 6 ) {
    return { error: 'Quantidade de números muito baixa! Deve ser de no mínimo 6 e máximo 15.' }
  } else {
    let array_of_bets = [];
    for (let i = 1; i < number_of_bets; i++) {
      array_of_bets.push({
        bet : i,
        numbers : getRandomNumbers(1, 60, qtd_of_numbers_to_create),
      })
    }

    switch (qtd_of_numbers_to_create) {
      case 6:

        break;

      case 6:

        break;

      case 6:

        break;

      case 6:

        break;

      case 6:

        break;

      case 6:

        break;



    
      default:
        break;
    }

    return array_of_bets;
  }
}