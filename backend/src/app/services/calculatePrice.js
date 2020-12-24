import megasenaData from '../data/megasenaData.json';
import lotofacilData from '../data/lotofacilData.json';
import quinaData from '../data/quinaData.json';
import duplasenaData from '../data/duplasenaData.json';

export default function calculatePrice(qtd_of_numbers_to_create, number_of_bets, type){
  let value;
  if (type === 'megasena'){
    const data = megasenaData.filter(p => p.qtd === qtd_of_numbers_to_create)[0];
    value = data.value * number_of_bets;
  } else if (type === 'lotofacil') {
    const data = lotofacilData.filter(p => p.qtd === qtd_of_numbers_to_create)[0];
    value = data.value * number_of_bets;
  } else if (type === 'quina') {
    const data = quinaData.filter(p => p.qtd === qtd_of_numbers_to_create)[0];
    value = data.value * number_of_bets;
  } else if (type === 'duplasena') {
    const data = duplasenaData.filter(p => p.qtd === qtd_of_numbers_to_create)[0];
    value = data.value * number_of_bets;
  } else if (type === 'lotomania') {
    value = 2.50 * number_of_bets;
  } else if (type === 'timemania') {
    value = 3.00 * number_of_bets;
  }
  return value;
}