
// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// JavaScript object creation patterns tutorial - factory , constructor pattern, prototype pattern



var peopleDynamicProto = function(name, age, city) {

   this.age = age;
   this.name = name;
   this.city = city;


// if we can't find function, we create our own prototype space 
   if (typeof this.printPerson !== 'function') {
       peopleDynamicProto.prototype.printPerson = function() {
        console.log(this.name + ", " + this.age + ", " + this.city);
    };
   }

};

var person1 = new peopleDynamicProto('Roman', 33, 'London');

person1.printPerson();