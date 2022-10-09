/* Write a JS function to find the largest number in an array given as the parameter*/

LargestNum = (nums) => {
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

console.log(LargestNum([8, 12, 4, 6]))