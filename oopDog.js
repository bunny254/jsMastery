function Dog (name){
    this.name=name;
    this.talk=function(){
        console.log(`Woof! My name is ${this.name}`);
    }
}

const snoopy=new Dog('Snoopy');

console.log(snoopy.talk());