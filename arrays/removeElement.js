/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums , val) { 
    let i = 0; // track increments 
    let k = []; // capture length 
    let back = nums.length - 1; // last elem in nums 

    while ( i <= back) {
        if ( nums[i] === val) { 
            nums[i] = nums[back];
            nums[back] = "REMOVED"; 
            back-- 
        }else { 
            k.push(nums[i]);
            i++
        }
    }
    const result = k.length;
    return result;
}

const practiceArray = [4, 5, 1, 4, 2, 21, 41, 33, 6, 6, 6, 7];
const TestValue = 6;
const testResults = removeElement(practiceArray , TestValue); 
console.log(practiceArray);
console.log(testResults);

