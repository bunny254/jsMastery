let a=-12;
const checkNegative=(a)=>{
    try {
        if(a>0){
            return "YES"
        }
        else if(a==0){
            throw new SyntaxError("Zero Error")
        }else{
            throw new SyntaxError("Negative Error")
        }
    } catch (error) {
        return error.message
    }
}

console.log(checkNegative(a));