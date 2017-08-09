

//Callback function calls anoter function

var x = function() {
    console.log('called from x() inside function');
};

var y = function(callback) {
    console.log('called from y()');
    callback();
};

y(x);