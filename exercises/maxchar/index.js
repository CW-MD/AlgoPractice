// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dictionary = {}
    let max = 0
    let maxChar = ''
    for(let char of str){
        if(dictionary[char]){
            dictionary[char]++
        }
        else{
            dictionary[char] = 1
        }
    }
    for(let key in dictionary){
        if(dictionary[key] > max){
            max = dictionary[key]
            maxChar = key
        }
    }
    return maxChar
    console.log(dictionary)
}

module.exports = maxChar;
