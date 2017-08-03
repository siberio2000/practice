
// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// JavaScript object creation patterns tutorial - factory , constructor pattern, prototype pattern


// Prototype allows me to set default values if existing did not work



// prototype requires to create EMPTY object
var peopleProto = function() {
   // .......
};

// These are default values

peopleProto.prototype.age = 0;  
peopleProto.prototype.name = 'no name';
peopleProto.prototype.city = 'no city';


peopleProto.prototype.printPerson = function() {
        console.log(this.name + ", " + this.age + ", " + this.city);
    };

// if one of the values below won't work prototype will fire default value

var person1 = new peopleProto();
person1.name = 'Roman';
person1.age = 33;
person1.city = 'London';

console.log('name' in person1);  // this one checks property 'name' in person1 (true/false)

console.log(person1.hasOwnProperty('name')); // this one checks if property exists for person1.
// if you comment **person1.name = 'Roman';** for instance - it'll say false

person1.printPerson();