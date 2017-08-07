
let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Room is clean now');
    });
};

let binGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + 'Garbage removed now');
    });
};

let getIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + 'You got Ice Cream!');
    });
};


// cleanRoom should be finished in order to run functions below.
cleanRoom().then(function(result){
    return binGarbage(result);
}).then(function(result){
    return getIceCream(result);
}).then(function(result){
    console.log('finished' + result);  
});