//object literals

const person ={
    alive:false
}

const musician={
    plays:true
}

Object.setPrototypeOf(musician, person);

console.log(musician.plays);

//Extending the proptotype chain => general to specific to more specific 
const guitarist={
    strings:6,
    __proto__:musician
}

console.log(musician.plays);
//missing property => go to person
console.log(musician.alive);
