
// https://www.youtube.com/watch?v=c0mLRpw-9rI&index=3&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// bind gives a function which has ability to execute this, its attaches the object and makes addToThis part of the method of the object, and gives back the object in different way



var obj = {key:2};
var obj2 = {key:5};

var addToThis = function(a, b, c) {

    return this.key + a + b + c;
}

var arr = [1, 2, 3];

var bound = addToThis.bind(obj);

bound(1, 2, 3)











//========https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); //