const reverseString = function(string) {
    let stringArray = []
    let stringReversed = ""
    const stringLength = string.length
    for (i = 0; i < stringLength; i++) {
        stringArray.unshift(`${string[i]}`)
    }
    for (i = 0; i < stringArray.length; i++) {
        stringReversed = stringReversed + stringArray[i]
    }
    return(stringReversed)
}

console.log(reverseString("Hello there"))

// Do not edit below this line
module.exports = reverseString;
