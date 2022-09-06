let a=4;
let b=3;

function Rectangle(a,b){
    this.length=a,
    this.width=b,
    this.perimeter=2*(a+b),
    this.area=(a*b)
}

let Another =new Rectangle(a,b)
console.log(Another);