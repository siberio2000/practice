
let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Room is clean now');
    });
};

let binGarbage = function(p) {
    return new Promise(function(resolve, reject) {
        resolve('Garbage removed now');
    });
};

let getIceCream = function(p) {
    return new Promise(function(resolve, reject) {
        resolve('You got Ice Cream!');
    });
};


// cleanRoom should be finished in order to run functions below.
cleanRoom().then(function(){
    return binGarbage();
}).then(function(){
    return getIceCream();
}).then(function(){
    console.log('finished');  
});