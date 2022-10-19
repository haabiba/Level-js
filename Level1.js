const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//Explain the difference between forEach, map, filter, and reduce.
console.log("foreach() est utilisé pour exécuter le même code sur chaque élément d'un tableau mais ne modifie pas le tableau et renvoie undefined");
console.log(".map() exécute le même code sur chaque élément d'un tableau et renvoie un nouveau tableau avec les éléments mis à jour.")
console.log("filter() vérifie chaque élément d'un tableau pour voir s'il répond à certains critères et renvoie un nouveau tableau avec les éléments qui renvoient la vérité pour les critères")
console.log("reduce()Comme son nom l'indique déjà, la méthode reduce de l'objet tableau est utilisée pour réduire le tableau à une seule valeur.")
//foreach
countries.forEach(function(countrieItem){
    console.log('I love '+countrieItem);
});
//map
let newCost = numbers.map(function(costItem){
    return costItem / 10;
});
console.log(newCost);
//filter

let smallCost = numbers.filter(function(costItem){
    return costItem < 5
});
console.log(smallCost);

//reduce
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);


const productPrice = products.filter(product => product.price< 8);
console.log(productPrice) ;



/*Callback function :est une fonction transmise à une autre fonction en tant qu'argument, qui est ensuite appelée à l'intérieur de la fonction 
externe pour effectuer une sorte de routine ou d'action.*/
const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3));

//Use forEach to console.log each country in the countries array.
countries.forEach((countrieItem)=>{
    console.log(countrieItem)
});
//Use forEach to console.log each name in the names array.
names.forEach((namesItem)=>{
    console.log(namesItem)
});

//Use forEach to console.log each number in the numbers array.

numbers.forEach((numbersItem)=>{
    console.log(numbersItem)
});
//Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase = countries.map((countrie) => countrie.toUpperCase())
console.log("countriesToUpperCase",countriesToUpperCase)
//Use map to create an array of countries length from countries array.
const countriesLength = countries.map((elem) => elem.length);
console.log(countriesLength);
//Use map to create a new array by changing each number to square in the numbers array
numbers.forEach(function(element, index, array){
    array[index] = Math.pow(element, 2);
});
console.log(numbers);

const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log("namesToUpperCase",namesToUpperCase)
//Use map to map the products array to its corresponding prices.
const productPrice1 = products.map(product => product.price);
console.log(productPrice1) ;
//Use filter to filter out countries containing land.
const fCountries = countries.filter(countrie => countrie.includes("land"));
console.log(fCountries) ;
//Use filter to filter out countries having six character.
const fCountriesd6 = countries.filter(countrie => countrie.length === 6);
console.log(fCountriesd6) ;

//Use filter to filter out countries containing six letters and more in the country array.
const fCountries6 = countries.filter(countrie => countrie.length >= 6);
console.log(fCountries6) ;
//Use filter to filter out country start with 'E';
const startsWithE = countries.filter((country) => country.startsWith("E"));

console.log(startsWithE);
//Use filter to filter out only prices with values.
const productsPrices = products.filter(
	(elem) => typeof elem.price === "number"
);
console.log(productsPrices);
/*Declare a function called getStringLists which,
 takes an array as a parameter and then returns an 
 array only with string items.*/
let array= [1,true,"habiba",28,"messelmani"]
const getStringLists = array.filter((elem) => typeof elem === "string");
console.log(getStringLists);
//Use reduce to sum all the numbers in the numbers array.
const sumWithInitial1 = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(sumWithInitial1);
  /*Use reduce to concatenate all the countries and to produce this 
  sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand 
  are north European countries*/
  const p = ' Estonia, Finland, Sweden, Denmark, Norway, and IceLand ';
  console.log(p.replace(/, /g, " "));
 //Explain the difference between some and every
 /*La méthode Array.every() en JavaScript est utilisée pour vérifier si tous les éléments du tableau satisfont ou non la condition donnée.

La méthode Array.some() en JavaScript est utilisée pour vérifier si au moins un des éléments du tableau satisfait ou non la condition donnée. La seule différence est que la méthode some() renverra true si un prédicat est vrai tandis que 
la méthode every() renverra true si tous les prédicats sont vrais.
*/

 //Use some to check if some names' length greater than seven in names array
const greaterSevenNames = names.some((word) => word.length >= 7);
 console.log(greaterSevenNames);
 
 // Use every to check if all the countries contain the word land
 const landCountries = countries.every((word) => word.includes("land"));
 console.log(landCountries);
//Explain the difference between find and findIndex.
/*Find() renverra la valeur du premier élément en fonction 
de la condition fournie et renverra 
undefined si aucun des éléments n'a satisfait à la condition.(element de condition)
FindIndex() retournera l'index du premier élément en fonction 
de la condition et retournera -1 si aucun des éléments n'a 
passé la condition.(position d'un element)
*/
const found = countries.find(element => element.length===6)

console.log(found);
//Use findIndex to find the position of the first country containing only six letters in the countries array

const foundfindIndex = countries.findIndex(element => element.length===6)

console.log(foundfindIndex);
//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1

const foundfindIndex1 = countries.findIndex(element => element.includes("Norway"))

console.log(foundfindIndex1);

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const foundfindIndex2 = countries.findIndex(element => element.includes("Russia"))

console.log(foundfindIndex2);