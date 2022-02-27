function validAnagram (a, b) {

    const freqA = {};
    for (let val of a) {
        freqA[val] = ++freqA[val] || 1;
    }

    const freqB = {};
    for (let val of b) {
        freqB[val] = ++freqB[val] || 1;
    }

    console.log(freqA);
    console.log(freqB);

    // for an anagram, each letter in a must exist in b and have the same frequency, order is irrelevant

    for (let key in freqA) {
        // check that each element of a exists in b
        if (!freqB[key]) return false;
        // check that the element of a occurs the same amount in b
        if (freqA[key] !== freqB[key]) return false;
    }
    return true;
}



console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
