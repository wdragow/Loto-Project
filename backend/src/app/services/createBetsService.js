import getRandomNumbers from '../utils/randomize';

export default function createBets(number_of_bets, qtd_of_numbers_to_create, min, max, qtd_numbers_avaible) {
  if (qtd_of_numbers_to_create > max) {
    return { error: `Quantidade de números excedida! Deve ser de no mínimo ${min} e máximo ${max}.` }
  } else if (qtd_of_numbers_to_create < min ) {
    return { error: `Quantidade de números muito baixa! Deve ser de no mínimo ${min} e máximo ${max}.`}
  } else {
    let array_of_bets = [];
    for (let i = 0; i < number_of_bets; i++) {
      array_of_bets.push({
        bet : i,
        numbers : getRandomNumbers(1, qtd_numbers_avaible, qtd_of_numbers_to_create)
                  .sort(function(a, b){return a - b}),
      })
    }
    return array_of_bets;
  }
}