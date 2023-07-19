/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true */

let nums = [1];
const hasDuplicates = (nums) => {
  for(let i= 0; i<=nums.length; i++) {
    //console.log(nums[i]);
    for(let j= i+1; j<=nums.length; j++){
        //console.log(nums[j]);
        if(nums[i]== nums[j]){
            return true
        }
    } return false
    //console.log('-----------------');
  }
};

console.log(hasDuplicates(nums));
