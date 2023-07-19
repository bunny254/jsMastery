const nums = [0,0,1,1,1,2,2,3,3,4]

/*
const removeDupliactes=(nums)=>{
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !=nums[i])
            nums[++i]=nums[j]
    }
    return ++i        
    }

*/

const removeDupliactes=(nums)=>{
    let count=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !=nums[count]){
            nums[++count]=nums[i]
        }
    }
    return ++count;
}


console.log(removeDupliactes(nums));