//create an object
//count letters in an input phrase
//add each new letter to the object as a property
//add total of each letter as a value
function countLetters(phrase) {
    var letterCount = {};
    var joinedPhrase = phrase.split(" ").join("");
    for (var i = 0; i < joinedPhrase.length; i++) {
        if (!letterCount[joinedPhrase.charAt(i)]) {
            letterCount[joinedPhrase.charAt(i)] = 1;
        } else {
            letterCount[joinedPhrase.charAt(i)] += 1
        }
    }
    return letterCount;
}
console.log(countLetters("Hello World"));
