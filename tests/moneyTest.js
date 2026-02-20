import {formatCurrency } from '../scripts/utils/money.js ';

console.log('test suit: formatCurrency')

if (formatCurrency(4359) === '43.59') {
  console.log(' it\'s working')
} else {
  console.log('it\'s not working')
}