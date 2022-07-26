/* LEET CODE
26. Remove Duplicates from Sorted Array */

let nums = [1,1,2];
//console.log(nums[nums.length -1]);
const removeDuplicates=(nums)=>{
    let expectedNums=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=expectedNums[expectedNums.length -1]){
            expectedNums.push(nums[i])
        }
    }
    return expectedNums;
}

console.log(removeDuplicates(nums));