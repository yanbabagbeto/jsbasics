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
