import {formatCurrency } from '../scripts/utils/money.js ';

console.log('test suite: formatCurrency')

if (formatCurrency(4359) === '43.59') {
  console.log(' it\'s working')
} else {
  console.log('it\'s not working')
}

console.log('work with zero')

if(formatCurrency(0) === '0.00'){
  console.log('passed')
}else{
  console.log('failed')
}