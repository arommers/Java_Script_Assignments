'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, mov] of movements.entries())
// {
//   if (mov > 0)
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   else
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// }

// console.log(`---- FOR EACH ----`)

// movements.forEach(function(mov, i, arr)
// {
//   if (mov > 0)
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   else
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map)
// {
//   console.log(`${key}:  ${value}`);
// });

// const currenciesSet = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);

// currenciesSet.forEach(function(value, key, set)
// {
//   console.log(`${key}: ${value}`);
// });

const checkDogs = function(dogsJulia, dogsKate)
{
  const copyJulia = dogsJulia.slice(1, -2);
  const both = [...copyJulia, ...dogsKate];
  both.forEach(function(value, i)
  {
    if (value > 2)
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old"`);
    else
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

// let julia = [3, 5, 2, 12, 7];
// let kate = [4, 1, 15, 8, 3]

let julia = [9, 16, 6, 8, 3];
let kate = [10, 5, 6, 1, 4];

checkDogs(julia, kate);