let eatsPlants=false;
let eatsAnimals=false;

let message;
//console.log((eatsPlants? "Herbivore" : eatsAnimals? "Carnivore" : eatsAnimals && eatsPlants? "Omnivoure" : "Undefied"))
//console.log(eatsPlants==true? "Herbivoure": eatsAnimals==true? "Carnivoure": eatsAnimals==eatsPlants?"Undefiened":"Omnivore");

message=eatsAnimals?(eatsAnimals? "Omnivoure": "Herbivoure"):eatsPlants?"Carnivoure":"Undefined"
console.log(message);