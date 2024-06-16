const repeatString = function(string, num) {
    let out = "";
    for (let i = 0; i < num; i++) {
        out = out + string;
    }
    if (Math.sign(num) == -1) {
        return "ERROR";
    }
    else {
        return out;
    }
};

// Do not edit below this line
module.exports = repeatString;
