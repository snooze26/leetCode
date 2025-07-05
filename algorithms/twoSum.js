/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}


*/

// the twosum algorithm is used to find the sum of a target number by using two elems within that array 
var twoSum = function(nums, target) {
    if (!nums) return null; 

    let n = nums.length; 
            let k = 1; 


    for (let i = 0; i < n; i++) { 
        for ( let j = i + 1; j < n; j++) { 
            if ( nums[i] + nums[j] === target) { 
                return [i , k]
             }
        }
    };
}    

const testArray = [1, 2, 3, 4, 5, 6]; 
const testTarget = 5;

const result = twoSum(testArray , testTarget);
console.log(result);