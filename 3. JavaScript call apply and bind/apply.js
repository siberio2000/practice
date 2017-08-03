
// https://www.youtube.com/watch?v=c0mLRpw-9rI&index=3&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// apply attaches function to array temporarily, runs it and gives the result back



var obj = {key:2};

var addToThis = function(a, b, c) {

    return this.key + a + b + c;
}



var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); //  function_name.call(obj, function_arguments)



// My view: call/apply combines object's value (need to use key's name) with function's argument