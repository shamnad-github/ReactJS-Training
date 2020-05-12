//Shallow copy of a list using ES6 feature

let Players = ['Sachin','Sourav','Dravid'];
let shallowCopyArray=[...Players]

Players.push('Sevag');

console.log('Shallow copy of a list using ES6 feature');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(Players);//original array

console.log(shallowCopyArray);//Shallow copy array.


//shallow copy of an object using ES6 feature

let student={
    name:"Zaira Fathima",
    class:"Pre-KG",
    school:"Peace"
};

let ShallowCopyObject = {...student};
StudentObject.name="Zaira";
console.log('shallow copy of an object using ES6 feature');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(student); //original object
console.log(ShallowCopyObject);  //Shallow copy object.