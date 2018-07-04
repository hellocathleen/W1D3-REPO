function countLetters(phrase) {
    var letterCount = {};
    var joinedPhrase = phrase.split(" ").join("");

        for (var i = 0; i < joinedPhrase.length; i++) {
            if (!letterCount[joinedPhrase.charAt(i)]) {
            letterCount[joinedPhrase.charAt(i)] = [i];
            } else { 
               letterCount[joinedPhrase.charAt(i)].push(i);
            }
        }    
    return letterCount;  
}    
console.log(countLetters("lighthouse labs"));