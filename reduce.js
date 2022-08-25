let nums = [1,1,1,2,3];
const reduce=(nums)=>{
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if (nums[i] == nums[j]){
                //return [nums[j]]
            }else{
                return [nums[i],nums[j++]]
            }
        }
    }
}

console.log(reduce(nums));