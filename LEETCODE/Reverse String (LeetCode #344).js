
const ReverseString = (s) => {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp
    }
    return s;
}

console.log(ReverseString(['h', 'e', 'l', 'l', 'o']));

