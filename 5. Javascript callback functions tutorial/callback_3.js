

var plus = function(a, b) {
    return a + b;
};

var multiple = function(a, b) {
    return a * b;
}

var doWhatEver = function(a, b) {
    console.log(`here are two numbers ${5}, ${8}`);
}


var calc = function(num1, num2, callback) {
    if(typeof callback === "function") {
         return callback(num1, num2);
    }
}

calc(1, 3, doWhatEver);