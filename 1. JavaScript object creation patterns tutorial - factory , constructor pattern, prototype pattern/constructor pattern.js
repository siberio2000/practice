
// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// JavaScript object creation patterns tutorial - factory , constructor pattern, prototype pattern



var peopleConstructor = function (name, age, state) {

    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function() {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };
};


var person1 = new peopleConstructor('Roman', 33, 'London');
var person2 = new peopleConstructor('Jelena', 30, 'Peterborough');

person1.printPerson();
person2.printPerson();