
//https://www.youtube.com/watch?v=71AtaJpJHw0&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf&index=2

var addTo = function(passed) {
    
    var add = function(inner) {
         return passed + inner;
    };
    return add;

}

var addThree = new addTo(3);

console.log(addThree(1));


// ----> output 3 + 1 = 4
//  Closures are nothing but FUNCTIONS WITH PRESERVED DATA