
let promiseToCleanTheRoom = new Promise(function(resolve /*true*/, reject /*false*/){

   //function

   let isClean = true; /*true by default - goes to resolve() below*/

   if(isClean) {
       resolve('clean');
   } else {
       reject('not clean'); // this will executes if let isClean = false;
   }

});

// promiseToCleanTheRoom should be finished in order to run functions below.
promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is ' + fromResolve); // will gives a 'clean' by default
}).catch(function(fromReject) {
    console.log('the room is ' + fromReject);
});