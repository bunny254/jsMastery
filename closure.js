//Lexical Scopes 


//Nested (child) function


//lexical scope is an important part of closure

//global scope
let x =1;

const parentFunction =()=>{
    //local scope
    let myValue =2;
    console.log(x);
    console.log(myValue);

    const childFunction = () =>{
        console.log(x += 5);
        console.log(myValue +=1);
    }

    return childFunction();
}

const result = parentFunction();
console.log(result);


result()