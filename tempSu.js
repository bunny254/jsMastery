let nums=[1,2,3,4,5,6,7]
/*
const findSum=(nums)=>{
    let total=0;
    for(let i=0; i<nums.length; i++){
        total=total+nums[i]
    }
    return total;
}
console.log(findSum(nums));
*/
const findSum=(nums)=>{
    let total=nums.reduce((a,b)=>{
        return a + b
    })
    return total;
}
console.log(findSum(nums))