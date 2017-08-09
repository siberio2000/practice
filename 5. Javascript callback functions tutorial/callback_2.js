

var plus = function(a, b) {
    return a + b;
};

var multiple = function(a, b) {
    return a * b;
}


var calc = function(num1, num2, callback) {
   return callback(num1, num2);
}

calc(1, 3, plus);