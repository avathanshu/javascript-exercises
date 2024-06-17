let sampleArray = new Array("hey",2,3,4);

const removeFromArray = function(array, ...num) {
    for (i = 0; i < `${num.length}`; i++) {
        while (array.includes(num[i])) {
            let pos = array.indexOf(num[i])
            array.splice(pos, 1)
        }
    }
    
    return array
};

console.log(removeFromArray(sampleArray, "hey"))

// Do not edit below this line
module.exports = removeFromArray;
