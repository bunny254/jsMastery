function Human (name){
    this.name=name;
}

function Kimmy (name){
    Human.call(this.name);
    this.works="SBM Bank";
}

let kimberly=new Kimmy('Bae')

console.log(kimberly);