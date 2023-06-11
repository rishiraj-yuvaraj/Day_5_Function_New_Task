//Programs in Anonymous and IIFE Function

//1.Print odd numbers in an array
let arr=[1,2,3,4,5,6,7,8,9,10];

//Anonymous Function
var sum = function(arr){
    let odd = arr.filter(n=> n%2);
    return (odd);
}
console.log(sum(arr));

//IIFE Function
(function sum(arr){
    let odd = arr.filter(n => n%2);
    console.log(odd);
})
(arr);

//-----------------------------------------><----------------------------------------------

//2.Convert all the strings to title caps in a string array
//Anonymous Function
var titleCase = function(str){
    str = str.toLowerCase().split(' ');
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return(str.join(' '))
}
console.log(titleCase("HELLO RISHI"))

//IIFE Function
(function titleCase(str){
    str=str.toLowerCase().split(' ');
    for(let i=0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str)
})
("HELLO RISHI")

//-----------------------------------------><----------------------------------------------

//3.Sum of all numbers in an array
//Anonymous Function
var marks = [20,30,40,50,60];

let add = function(arr){
    var sum = 0;
    for(let i in marks){
        sum += arr[0];
        sum += arr[1];
        sum += arr[2];
        sum += arr[3];
        sum += arr[4];
        return(sum);
    }
}
console.log(add([20,30,40,50,60]));

//IIFE Function
(function add(marks){
    var sum = 0;
    for(var i in marks){
        total = sum += marks[i];
    }
    console.log(total);
})  
([30,40,50,60,70]);

//-----------------------------------------><----------------------------------------------

//4.Return all the prime numbers in an array
//Anonymous Function
let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result1 = [];
var isPrime = function(num) {
  if(num < 2) return false;
  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result1.push(element);
  }
});
console.log(result1);

//-----------------------------------------><----------------------------------------------

//5.Return all the pallindrome in an array in javascript
//Anonymous Function
var findPalindrome = function(arr){
    const Palindrome = [];
    for(let i=0; i<arr.length; i++){
            const word = arr[i].toString().toLowerCase();
            const reversedWord = word.split('').reverse().join('');

            if(word === reversedWord){
                Palindrome.push(word)
            }
    }
    return Palindrome;
}
const words = ['level', 'Anna', 'Javascript'];
const result = findPalindrome(words);
console.log(result);

//IIFE Function
(function findPalindrome1(arr){
    const Palindrome1 = [];
    for(let i=0; i<arr.length; i++){
        let word1 = arr[i].toString().toLowerCase();
        let reversedWord1 = word1.split('').reverse().join('');
        if(word1 === reversedWord1){
            Palindrome1.push(word1);
        }
    }
    return Palindrome1;
})
const words1 = ['level', 'Anna', 'Javascript'];
const result2 = findPalindrome1(words1);
console.log(result2);

//-----------------------------------------><----------------------------------------------

//6.Return median of two sorted arrays of the same size.
//Anonymous Function
let findMedianSortedArrays = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const sortedArray = combinedArray.sort((a, b) => a - b);
  
    const middleIndex = Math.floor(sortedArray.length / 2);
  
    if (sortedArray.length % 2 === 1) {
      return sortedArray[middleIndex];
    } else {
      const median = (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
      return median;
    }
}
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const median = findMedianSortedArrays(array1, array2);
console.log(median);

//IIFE Function
(findMedianSortedArrays = function(arr3, arr4){
    const combinedArray1 = arr3.concat(arr4);
    const sortedArray1 = combinedArray1.sort((a, b) => a - b);
  
    const middleIndex1 = Math.floor(sortedArray1.length / 2);
  
    if (sortedArray1.length % 2 === 1) {
      return sortedArray1[middleIndex1];
    } else {
      const median1 = (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
      return median1;
    }
})
const array3 = [1, 3, 5];
const array4 = [2, 4, 6];
const median1 = findMedianSortedArrays(array3, array4);
console.log(median1);

//-----------------------------------------><----------------------------------------------

//7.Remove duplicates from an array
//Anonymous Function
let duplicates = function(arr){
    return [...new Set(arr)];
}
console.log(duplicates(['Hello', 'Hi', 'Hello', 'World', 'Hi']));

//IIFE Function
(function duplicates1(arr){
    console.log([...new Set(arr)])
})
(['Hello', 'Hi', 'Hello', 'World', 'Hi']);

//-----------------------------------------><----------------------------------------------

//8.Rotate an array by k times
//Anonymous Function
let rotateArray = function(arr, k) {
    const rotations = k % arr.length; 
    const removed = arr.splice(-rotations);
    arr.unshift(...removed);
    return arr;
}
const array = [1, 2, 3, 4, 5];
const rotations = 3;
const rotatedArray = rotateArray(array, rotations);
console.log(rotatedArray);

//IIFE Function
(function rotateArray1(arr1, k){
    const rotation1 = k % arr1.length;
    const removed1 = arr1.splice(-rotation1);
    arr1.unshift(...removed1);
    console.log(arr1);
})
([1,2,3,4,5])

//-----------------------------------------><----------------------------------------------

//Programs in Arrow Function
//1.Print odd numbers in an array
let arr3 = [1,2,3,4,5,6,7,8,9,10,11];
var sum = (arr3) => {
    let odds = arr3.filter(n => n%2);
    return(odds);
};
console.log(sum(arr3));

//-----------------------------------------><----------------------------------------------

//2.Convert all the strings to title caps in a string array
var titleCase = (str) => {
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return(str.join(' '));
  }
console.log(titleCase("RISHI IS HERE"));

//-----------------------------------------><----------------------------------------------

//3.sum of all numbers in array
var marks = [30,40,50,60,70];
var add2 = (arr) => {

var sum = 0;
for(var i in marks){    
   sum += arr[0];
   sum += arr[1];
   sum += arr[2];
   sum += arr[3];
   sum += arr[4];
   return(sum);
}
}
console.log(add2([30,40,50,60,70]));

//-----------------------------------------><----------------------------------------------

//4.Return all the prime numbers in an array
let num4 = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result4 = [];
var isPrime = (num4) => {
  if(num4 < 2) return false;

  for (let k = 2; k < num4; k++){
    if(num4 % k == 0){
      return false;
    }
  }
  return true;
}
num4.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//-----------------------------------------><----------------------------------------------

//5.Return all the pallindrome in an array in javascript
var findPalindrome3 = (arr) => {
    const Palindrome3 = [];
    for(let i=0; i<arr.length; i++){
            const word3 = arr[i].toString().toLowerCase();
            const reversedWord3 = word3.split('').reverse().join('');

            if(word3 === reversedWord3){
                Palindrome3.push(word3)
            }
    }
    return Palindrome3;
}
const words3 = ['level', 'Anna', 'Javascript'];
const result3 = findPalindrome(words3);
console.log(result3);

//-----------------------------------------><----------------------------------------------
