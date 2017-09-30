// Object destructuring 
//const person = {
//     name:'Sergio',
//     age:25,
//     location:{
//         city:'London',
//         temp:20
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous' , age } = person;

// console.log(`${name} is ${age}.`);

// const { city,temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);


// array destructuring

const address = ['102 studland road','London','Ealing','w73qz'];

const [ ,city,state ] = address;

console.log(`You are in ${city}, ${state}`);


