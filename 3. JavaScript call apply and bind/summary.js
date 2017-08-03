
// https://www.youtube.com/watch?v=c0mLRpw-9rI&index=3&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf


var obj = {key:2};

var functionName = function(arg, arg2, arg3) {
   
};


functionName.call(obj, arg1, arg2, arg3);

functionName.apply(obj, [arg1, arg2, arg3]);

var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);
