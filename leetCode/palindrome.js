let x=121
x=x.toString()

const isPalindrome=(x)=>{
    let reversed;
    for(let i=x.length; i>1; i--){
        console.log(x[i]);
    }
}


console.log(isPalindrome(x));