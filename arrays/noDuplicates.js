//typed 3 times as of 6/3/25 
/**
 * @param {number[]} nums
 * @return {number}
 */

// return the amount of unique elements withina given array 
var removeDuplicates = function(nums) {
    if (nums === 0 ) return 0; 

    let i = 0; 

    for (let j = 1; j < nums.length; j++) { 
        if(nums[j] !== nums[i]) { 
            i++
            nums[i] = nums[j]; 
        }
    }
    return i + 1; 
}
const practiceArray = [1,1,2,3, 4, 5, 5];
const testResults = removeDuplicates(practiceArray); 

console.log(testResults); 
