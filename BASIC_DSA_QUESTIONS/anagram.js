function anagram(str1,str2){
    let sortedstr1 = str1.split('').sort().join('');
    let sortedstr2 = str2.split('').sort().join('');

    return sortedstr1 === sortedstr2 ? "Anagram" : "Not an anagram"
}


console.log(anagram("listen", "silent"));
