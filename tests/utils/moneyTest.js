import {formatCurrency } from '../../scripts/utils/money.js';


describe('test suite:formatCurrency',() => {
it('converts cents to dollars', () => {
  expect(formatCurrency(4359)).toEqual('43.59');
});

it('work with zero', () =>{
  expect(formatCurrency(0)).toEqual('0.00');
});

it('round up to the nearest value', () => {
  expect(formatCurrency(2000.5)).toEqual('20.01');
});

it('round with zero',() => {
  expect(formatCurrency(0)).toEqual('0.00')
  }

)
});

