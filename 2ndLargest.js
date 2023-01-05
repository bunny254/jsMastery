/* Given the array ,nums=[2,3,6,5,6] we see that the largest value in the array is 6 and the second largest value is 5. Thus, we return 5 as our answer. */

let nums=[7,3,10,6]

const secondLargest=(nums)=>{
     let sorted=nums.sort((a,b)=>a-b);
     console.log(sorted);
     let clean=[];
     for(let i=0; i<sorted.length; i++){
        if(sorted[i]!== sorted[i+1]){
            clean.push(sorted[i])
        }
     }
        clean.pop();
     return clean[clean.length-1]    
}
console.log(secondLargest(nums))
