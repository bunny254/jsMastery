/* LEET CODE
26. Remove Duplicates from Sorted Array */

let nums = [1,1,1,2,3];
//console.log(nums[nums.length -1]);
const removeDuplicates=(nums)=>{
    for(let p1=0; p1<nums.length; p1++){
        for(let p2=p1+1; p2<nums.length; p2++){
            if(nums[p1]==nums[p2]){
                break;
            }else{
                return [nums[p1],nums[p2]]
            }
        }
    }
}

console.log(removeDuplicates(nums));