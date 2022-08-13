// function max(number1, number2){
// return(number1 >= number2 ? number1 : number2 ) ;
// }

// console.log(max(150,19));

// function isLandscape(width, height){
// return (width >= height ? 'Landscape': 'Portrait');
// }

// console.log(isLandscape(25, 160));

// function fizzBuzz(input){
// if(typeof input !== 'number'){
// return NaN;
// } else if( input % 3 == 0 && input % 5 == 0){
// return 'FizzBuzz';
// } else if(input % 3 == 0){
// return 'Fizz';
// } else if(input % 5 == 0){
// return 'Buzz';
// } else {
// return input;
// }
// }

// console.log(fizzBuzz(false));

// function checkSpeed(speed){
// if (speed<=130){
// return (speed <= 70) ? ('Ok'): Math.floor((speed - 70)/5);
// }else{
// return 'License Suspended'
// }
// }

// console.log(checkSpeed(71));

// function showNumber(num){
// for(let i=0; i<num; i++){
// message = (i % 2 ===0 ? 'Even': 'ODD');
// console.log(i,message);}
// }

// showNumber(5);
// const array = [0, null, undefined, '', false, NaN];
// function countTruthy(newArray){
// count = 0;
// for(let i of newArray){
// if (i) count++;
// }
// return count

// }

// test = countTruthy([0,null, undefined,'',2,3])
// console.log(test)

// const movie = {
// title:'a',
// releaseYear: 2018,
// rating: 4.5,
// director: 'b'
// };

// function showProperties(chose){
// for (let i in chose){
// if (typeof chose[i] === "string") console.log(i,chose[i])
// }
// }

// showProperties(movie);

// console.log(sum(10));

// function sum(limit){
// let sumTotal = 0;

// for (let i = 0 ; i <= limit; i++){
// if (i % 3 === 0 || i % 5 === 0) {
// sumTotal = sumTotal + i;
// }
// }
// return sumTotal;
// }

// const marks = [10, 15, 95];

// console.log(calculateGrade(marks));

// function calculateAverage(array){
// let sum = 0;
// count = 0;
// for (num of array){
// sum += num;
// count++;
// }
// return sum/count;
// }

// function getMarks(newNum){
// if (newNum < 60) return 'F' ;
// if (newNum < 70) return 'D' ;
// if (newNum < 80) return 'C' ;
// if (newNum < 89) return 'B' ;
// if (newNum >= 90 ) return 'A';
// return newNum;
// }
// function calculateGrade(marks){
// return getMarks(calculateAverage(marks));
// }

// function showStars(num){
// let word = ''
// for(let i = 0; i<num; i++){
// word = word+'*'
// console.log(word);
// }
// }

// showStars(10);

// showPrimes(10);

// function showPrimes(num){
// for(i = 2; i<=num;i++){
// console.log('This is the iteration for : ', i);
// let isPrime = true;
// for(j=2; j<i; j++){
// if(i%j===0){
// isPrime = false;
// break;
// }
// }
// if (isPrime) console.log(i);

// }
// }

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// here are different ways to iterate over an object
// for (let key in another) console.log(key, another[key]);

// for (let key of Object.keys(another)) console.log(key, another[key]);

// for (let entry of Object.entries(another)) console.log(entry);

// if ('draw' in another) console.log('draw exists');

// Here are different ways to clone an object

// const newCircle1 = Object.assign({}, another);
// console.log(newCircle1);

// const newCircle2 = { ...another };
// console.log(newCircle2);

//Date

// const now = new Date();
// const date1 = new Date(2018, 4, 11, 9);

// console.log(date1);

// console.log(now.toISOString());

const address = {
  number: "1641",
  street: "Hebert",
  city: "Laval",
  zipCode: "H7V 3L6",
};

// function showAdress(adr) {
//   let newAddress = "";
//   for (let key in adr) {
//     newAddress += ` ${adr[key]}`;
//   }
//   console.log(`You live at : ${newAddress}`);
// }

// showAdress(address);

// factoryFunction
// function factoryShowAdress(street, city, zipCode) {
//     return {
//     street,
//     city,
//     zipCode
//   };
// }

// console.log(address)
// // constructor function

// function FactoryShowAddress(street, city, zipcode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipcode;
// }

// Blog Post Object

// const post = {
//   title: "My First Blog Post",
//   body: `Hi everyone,

//     Ths is my first blog post.

//     Hope you subscribe soon
//     Regards
//     `,
//   author: "Yan babagbeto",
//   views: 3,
//   comments: [
//     { author: "MC Sollar", body: "First comment" },
//     { author: "Passi", body: "First comment" },
//   ],
//   isLive: true,
// };

// console.log(post);

// function CreatePost(title, body, author, views, comments, isLive) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (isLive = true);
// }

//arrays

// const numbers = [3, 4];

// numbers.push(5,6);

// numbers.unshift(1,2);

// console.log(numbers);

// console.log(numbers.splice(2,1,'a','b'));

// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max){
//     const theArray = [];
//     for (let i = min; i<= max; i++ ){
//         theArray.push(i);
//     }
//     return theArray;
// }

// const numbers = [1, 2, 3, 4];
// function includes(array, searchElement) {
//   let isIncluded = false;
//   for (let item of array) {
//     if (item === searchElement) {
//       isIncluded = true;
//       break;
//     }
//   }
//   return isIncluded;
// }

// function includes(array, searchElement) {
//   let included = false;
//   array.forEach(function (element) {
//     if (element === searchElement) {
//       included = true;
//     }
//   });
//   return included;
// }
// console.log(includes(numbers, 4));

// const numbers = [1, 2, 3, 4, 1,7,9,5, 1];
// const output = except(numbers, [1, 2]);
// console.log(output);

// function except(array, excluded) {
//   let res = [...array];
//   for (let i of excluded) {
//     let alpha = res.filter((item) => item !== i);
//     res = [...alpha];
//   }
//   return res;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = move(numbers, 0, 2);

// console.log(output);

// function move(array, index, offset) {
//   if (index + offset < 0 || index + offset >= array.length) {
//     console.error("Invalid offset.");
//   } else {
//     const arrays = [...array];
//     let item = arrays.splice(index, 1)[0];
//     // let jazz = index + offset;
//     // //let newArray = [...array.splice(index + offset, 0, item)];
//     // let test1 = [...array.splice(index, 1)];
//     // let test2 = [...test1.splice(jazz, 0, item)];
//     // return test2;
//     arrays.splice(index + offset, 0, item);
//     return arrays;
//   }
// }

// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);
// console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   if (array.includes(searchElement)) {
//     array.forEach(function (element) {
//       if (element === searchElement) {
//         count++;
//       }
//     });
//   }
//   return count;
// }

// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, currentValue) => {
//     const occurrence = currentValue === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => (a > b ? a : b));
// }

// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];

// const newMovies = [...movies];
// function orderMovies(newMovie, year) {
//   return newMovie
//     .filter((item) => {
//       item[year] === year;
//     })
//     .sort((thing1, thing2) => {
//       thing1.title > thing2.title ? thing1 : thing2;
//     });
// }

// console.log(orderMovies(movies, 2018));
