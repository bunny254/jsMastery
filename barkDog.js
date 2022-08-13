function Bark (age,weight,name){
    this.age=age;
    this.weight=weight;
    this.name=name;
}
Bark.prototype.sound=function(){
    console.log(`${this.name} says woof!`);
}

dog=new Bark(3,65,"Snoopy");

console.log(dog.sound());