
let A=[-6]
const findOneDigi=(A)=>{
    let result=[]
    for(let i=0; i<A.length; i++){
        if(A[i]>-10 && A[i]<10){
            result.push(A[i])
        }
    }
     maximum= result.reduce((a,b)=>{
        return Math.max(a,b)
     })
     return maximum;
}
console.log(findOneDigi(A))

