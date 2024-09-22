function palindrome(str) {
let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');


const array = cleanedStr.split('');
const reversed = array.reverse();
const newstr = reversed.join('');
console.log(cleanedStr === newstr ? "Palindrome" : "Not a Palindrome");
}


console.log(palindrome("wow"))