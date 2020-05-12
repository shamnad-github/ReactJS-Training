//Deep copy of a list without using any third party library

let students = [
    { name: 'Zaira', class: 1, age: 3 },
    { name: 'Zoya', class: 2, age: 6 },
    { name: 'Zeba', class: 3, age: 2 }
];

let deepCopyList = JSON.parse(JSON.stringify(students))
deepCopyList[0].name="Zara";

console.log("Deep copy of a list without using any third party library");
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(students);//original list

console.log(deepCopyList);//Deep copy list.


//Deep copy of an object without using any third partylibrary.

let student={
    name:"Zaira Fathima",
    class:"Pre-KG",
    school:"Peace"
};

let deepCopyObject = JSON.parse(JSON.stringify(student));
deepCopyObject.name="Zoya";

console.log("Deep copy of an object without using any third partylibrary.")
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(student); //original object
console.log(deepCopyObject);  //Deep copy object.