a=0
for(a=1;a<100;a++){
    if(a%15==0){
        console.log(a+"FizzBuzz");
    }
    else if(a%5===0){
        console.log(a+"Buzz");
    }
    else if(a%3===0){
        console.log(a+ "Fizz");
    }
    else{
        console.log(a);
    }
}