let digits = [1]

//test 1
    //digits =[1,2,3]
//test 2
    //digits = [4,3,2,1]
    1
//test 3
    //digits = [9]

const plusOne=(digits)=>{
    //Initialize for loop
    for (let i=digits.length-1; i>=0; i-- ){
        if((digits[i])<9){
            digits[i] = digits[i]+1;
            return digits;
        }else{
            digits[i]=0;
        }
    }
    digits.unshift(1)
    return digits;

}

console.log(plusOne(digits));