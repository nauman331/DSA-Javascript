function reverse(str) {
array = str.split('');
reversed = array.reverse();
newstr = reversed.join('');
return newstr;
}


console.log(reverse("hello"))