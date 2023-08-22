//object with getter and setter methods
const car ={
    doors:2,
    seats:"vinyl",
    get seatMaterial(){
        return this.seats;
    },
    set seatMaterial(material){
        this.seats = material
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);

luxuryCar.seatMaterial = "leather"; // 

console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);


//walking up the chain
console.log(luxuryCar.valueOf());