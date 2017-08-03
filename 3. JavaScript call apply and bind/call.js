
// https://www.youtube.com/watch?v=c0mLRpw-9rI&index=3&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf



var obj = {key:2};

var addToThis = function(a) {

    return this.key + a;
}

console.log(addToThis.call(obj, 3)); //  function_name.call(obj, function_arguments)




var obj = {key:2};

var addToThis = function(a, b, c) {

    return this.key + a + b + c;
}

console.log(addToThis.call(obj, 1, 2, 3)); //  function_name.call(obj, function_arguments)


