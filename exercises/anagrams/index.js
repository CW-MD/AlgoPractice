// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let alpha = /[^\w]/g
    stringA = stringA.replace(alpha).toLowerCase()
    stringB = stringB.replace(alpha).toLowerCase()
    mapA = {}
    mapB = {}

    if(stringA.length ==stringB.length){
        for(let i = 0; i < stringA.length; i++){
        (mapA[stringA[i]])? mapA[stringA[i]]++ : mapA[stringA[i]]=1;
        (mapB[stringB[i]])? mapB[stringB[i]]++ : mapB[stringB[i]]=1;
            
        }
    }
    else{
        return false
    }

    for(let key in mapA){
        if(mapA[key] !== mapB[key]){
            return false;
        }
    }
    return true


}

module.exports = anagrams;
