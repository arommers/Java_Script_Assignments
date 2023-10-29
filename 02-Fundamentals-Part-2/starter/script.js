'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest)
//     hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio'

// Calling, running or invoking the function

// function logger()
// {
//     console.log("My name is Adri");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges)
// {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return (juice);
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birtYear)
// {
//     return (2037 - birtYear)
// }

// console.log(age1);

// // function expression

// const calcAge2 = function(birthYear)
// {
//     return (2037 - birthYear);
// }

// const age2 = calcAge2(1992);
// console.log(age2);

// arrow function

// const calcAge3 = birthyear => 2037 - birthyear;

// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement= 65 - age;
//     // return (retirement);
//     return(`${firstName} retires in ${retirement} years`);
// }
// console.log(yearsUntilRetirement(1991, 'Adri'));
// console.log(yearsUntilRetirement(1990, 'Bob'));

// Functions calling functions

// function cutFruitPiece(fruit)
// {
//     return (fruit * 4);
// }

// function fruitProcessor(apples, oranges)
// {
//     let applePieces = cutFruitPiece(apples);
//     let orangePieces = cutFruitPiece(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return (juice);
// }

// console.log(fruitProcessor(2, 3));

// Reviewing functions

// const calcAge = function (birthYear)
// {
//     return (2037 - birthYear);
// }

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement= 65 - age;
//     if (retirement > 0)
//         return (retirement);
//     else
//         return (-1);
// }

// console.log(yearsUntilRetirement(1984, 'Adri'));
// console.log(yearsUntilRetirement(1940, 'Snoet'));

// intro to arrays

const friend1 = 'john';
const friend2 = 'bob';
const friend3 = 'keith';

const friends =['michael', 'bob', 'keith'];
console.log(friends);

// const years = new Array(1991, 1992, 1993);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'jay';
console.log(friends);

const firstName = 'adri';
const adri = [firstName, 'Rommers', 2023 - 1984, 'student', friends];
console.log(adri);
console.log(adri.length);

// Exercise

const calcAge = function(birthYear)
{
    return (2037 - birthYear);
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);

console.log(age1, age2, age3);