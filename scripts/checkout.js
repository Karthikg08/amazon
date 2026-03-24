import { renderOrderSummary } from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

/*                                                     function loadPage() {
async function loadPage() {                               return new Promise((resolve) => {
  console.loga('load data');  /  this code is = /          console.log('load data');
  return 'valur 1'    /    this return  converts to this   resolve('value 1');
}                                                             });}
*/


async function loadPage() {
  try {
    //throw 'error1';  this is manually throw error, to test error handling 
    await loadProductsFetch();
      
    const value = await new Promise((resolve, reject) => {
     // throw 'error2';  // this is manually throw error, to test error handling
        loadCart(() => {
          //reject('error3');
          resolve();
        });
      });
  }catch (error) {
    console.log('unexpected error, please try again later.');
  }
 

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
     
    });
  }),
  new Promise((resolve) => {
  loadCart(() => {
    resolve();
    
  });

 })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });

}).then(() => {
 return new Promise((resolve) => {
  loadCart(() => {
    resolve();
  });
 });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
})
  */
