//--------------------------------PART I------------------------------- 

// console.log("nauman", "coding");
// console.log(45 * 2 - 10);
// console.error("some error");
// console.warn("some warning");

// const date = new Date();
// const year = date.getFullYear();
// console.log(year);

// const firstName = "MUHAMMAD";
// const lastName = "NAUMAN";
// console.log(`First_Name: ${firstName} and Last_Name: ${lastName}`);

// var beforeandafter = "Hello";
// console.log(beforeandafter);
// var beforeandafter = "World";
// console.log(beforeandafter);

// console.log(12**2)
// console.log(12*12)
// const squarenumber = Math.pow(12,2)
// console.log(squarenumber)

// const bool = true;
// console.log(typeof bool)

// const age = 20
// console.log(age > 18 ? true : false)

// console.log(100 / 0)


// -------------------PART II---------------------

// let a = 12;
// a = 15
// console.log(a);

// const PI = Math.PI;
// console.log(PI);

// console.log(typeof null);
// var a = "25";
// console.log(typeof a);
// const b = true;
// console.log(typeof b);

// var a;
// console.log(typeof a);
// var b = undefined;
// console.log(typeof b);

// const arr = [1, 2, 3];
// arr = [5, 4, 6];
// console.log(arr);

//-----------------------------PART III-----------------------------

// for(let i = 1; i <= 50; i++){
//     console.log(i); 
// }

// let x = 0;
// let sum = 0;
// while (x < 10) {
//      x++;
//      sum = sum + x;
//     }
// console.log(sum); 

// const a = "JAVASCRIPT"
// for(let value of a){
//     console.log(value);
// }

// for(var i=1; i<=20; i=i+2){
// console.log(i);
// }

// let x=6;
// do {
//     x--;
//     console.log(x);
// } while (x > 1);

// let fact=1
// for(var i=1; i<=5; i++){
//     fact = fact * i
// }
// console.log(fact);

// let hold = 1
// for(var i=1; i<=3; i++){
//     let str = " "
//     for(var j=1; j<=3; j++){
//         str += `${hold} `;
//         hold++;
//     }
//     console.log(str); 
// }

// var arr = [1, 2, 3, 4]
// console.log(arr.reverse());

// var arr = [1, 2, 3, 4, 5]
// for(var i=0; i<Math.floor(arr.length / 2); i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length - i - 1]
//     arr[arr.length - i -1] = temp
// }
// console.log(arr);

// let x = 1;
// do {
//     x++;
//     if(x % 5 === 0){
//         console.log(x);  
//     }
// } while(x<100)

// var obj = {
//     name: "nauman",
//     age: 20,
//     skill: "javascript"
// }
// for(let key in obj){
//     console.log(key);
// }

//---------------------------------PART IV------------------------------

// var movies = ["a", "b", "c", "d", "e"];
// movies.forEach((movie)=>console.log(movie));
// console.log(movies[1]);

// const arr = [3, 4, 5];
// arr.unshift(2);
// arr.unshift(1);
// console.log(arr);

// var arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// console.log(arr);

// var arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0,3));

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(4));

// const arr = ["ali", "hamza", "nauman"];
// console.log(arr.includes("hamza"));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log((arr1.concat(arr2)));

// const arr = [5, 2, 9, 1];
// console.log(arr.sort((a, b) => a-b));
// console.log(arr.sort((a, b) => b-a));

// const arr = [5, 2, 9, 1];
// for (let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - j - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             var temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr]
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [];
// arr.forEach((elem)=>arr2.push(elem));
// console.log(arr2);

// const isEven = (num) => {
//     if(num % 2 === 0){
//         console.log("Even") 
//     } else {
//         console.log("Odd")
//     }
// }
// isEven(6);

// const areaOfCircle = (rad) => {
// return Math.round(2 * Math.PI * rad * rad);
// }
// console.log(areaOfCircle(20));

// const sumArr = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(sumArr([1,2,3]));

// const checker = (str, char) => {
//     return str.toLowerCase().startsWith(char.toLowerCase())
// }
// console.log(checker("Nauman", "n"));

// const max = (a, b) => {
//    return a > b ? a : b
// }
// console.log(max(9,7));

// const fact = (num) => {
//     let fact = 1
//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(fact(3));

// const reverStr = (value) => {
//     return value.split("").reverse().join("");
// }
// console.log(reverStr("ali"));

// const largest = (arr) => {
// var max = 0;
// arr.forEach((val)=> val > max ? max = val : max)
// return max
// }
// console.log(largest([8,5,7,9]));

// const kebab = (str) => {
//     return str.split(' ').join("-")
// }
// console.log(kebab("I am Full Stack Engineer"));
