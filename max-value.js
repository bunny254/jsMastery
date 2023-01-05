/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.
*/
let nums=[10,9,3,1]
const maxValue=(nums)=>{
    let b=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>b){
            b=nums[i]
        }else if(b>nums[i]){
            b==b
        } 
    }
    return b;
}
console.log(maxValue(nums));