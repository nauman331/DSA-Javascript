function findMissingNumber(nums) {

let totalSum = (nums.length * (nums.length + 1)) / 2;
let arraySum = 0;

for(let i=0; i<nums.length; i++){

arraySum += nums[i];

}

return totalSum - arraySum

}


console.log(findMissingNumber([3, 0, 1]));