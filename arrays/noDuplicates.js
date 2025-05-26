/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
// base check 
    if (nums.length === 0) return 0; 

    let i = 0;

    for (let j = 1; j < nums.length; j++) { 
        if ( nums[j] !== nums[i]) { 
            i++
            nums[i] = nums[j];
        }
    }
    return i + 1; 
}

const practiceArray = [1, 1, 2, 3];
const testResults = removeDuplicates(practiceArray); 

console.log(practiceArray);
console.log(testResults); 
