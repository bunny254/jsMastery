let s=1234;
const anotherReverse=(s)=>{
    try {
        if(typeof s !=="string"){
            throw new SyntaxError(`s.split is not a function\n ${s}`)
        }else{
            let reversed=[];
            for(let i=s.length -1; i>=0; i--){
                reversed.push(s[i])
            }
            return reversed.join("")
        }
    } catch (error) {
        console.log(error.message)
    }
}

console.log(anotherReverse(s));
