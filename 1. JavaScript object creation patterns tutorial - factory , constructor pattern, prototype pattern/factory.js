
// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// JavaScript object creation patterns tutorial - factory , constructor pattern, prototype pattern



var peopleFactory = function(name, age, state) {
    var temp = {};   // same as ----- var temp = new Object;
   
   //setting properties for the object
   temp.age = age;
   temp.name = name;
   temp.state = state;

   temp.printPerson = function() {
      console.log(this.name + ", " + this.age + ", " + this.state);
   };

   return temp;
};


var person1 = peopleFactory('Roman', 33, 'London');
var person2 = peopleFactory('Jelena', 30, 'Peterborough');

person1.printPerson();
person2.printPerson();