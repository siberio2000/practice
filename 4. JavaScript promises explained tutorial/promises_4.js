
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


Promise.all([cleanRoom(), binGarbage(), getIceCream()]).then(function() {
    console.log('all finished');
});