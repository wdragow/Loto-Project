import _ from '../helper/underscore'

export default function getRandomNumbers(min, max, size) {
  var values = [];

  while (values.length < size) {
    values.push(Math.floor(Math.random() * ( max - min + 1) + min));
    values = _.uniq(values);
  }

  return values;
}