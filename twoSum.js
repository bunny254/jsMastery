//Return the index of two integers in an array that add up to a given target.

let nums = [3, 5, 10, 15];
let target = 20;

const twoSum = (nums, target) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (p2 = p1+1; p2 < nums.length; p2++) {
      if (numToFind === p2) {
        return [p1, p2];
      }
    }
  }
};
