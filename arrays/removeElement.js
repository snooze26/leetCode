/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums , val) { 
    //create returnin
    let i = 0; 
    let k = []; 
    let back = nums.length - 1
    while ( i <= back) {
        if (nums[i] === val) { 
            nums[i] = nums[back];
            nums[back] = "_";
            back--
        } else {
            k.push(nums[i]);
            i++;
        }
    }
    const result = k.length; 
    return result; 
}

const practiceArray = [4, 5, 1, 4, 2];
const TestValue = 4;
const testResults = removeElement(practiceArray , TestValue); 
console.log(practiceArray);
console.log(testResults);

