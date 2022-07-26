let k=[5,3,1,6,4,2]
let kth=2
const findKth=(k,kth)=>{
    let sorted=k.sort()
    if(k.length>1){
        for(let i=-1; i<k.length; i++){
             return k[i+1]
             break
        }
    }
} 

console.log(findKth(k))
