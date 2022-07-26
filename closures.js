const expandArray=()=>{
    let myArray=[1,1,1];

    return function() {
       myArray=myArray.push(1)        
    }
}

let final=expandArray()
console.log(final());

//console.log(final);