//typed 5 times as of 6/3 

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums , val) { // 
       let i = 0 ; // increment tracker 
       let k = []; // for valid numbers 
       let back = nums.length - 1; //length of nums 

       while ( i <= back) { 
            if ( nums[i] === val) {
                nums[i] = nums[back] // back value becomes the first value 
                nums[back] = "REMOVED"; 
                back -- // move to the left; 
            } else {
                k.push(nums[i]); 
                i++ 
            }
       }

            let result = k.length; 
            return result; 
//     let i = 0; // track increments 
//     let k = []; // capture length 
//     let back = nums.length - 1; // last elem in nums 

//     while ( i <= back) {
//         if ( nums[i] === val) { 
//             nums[i] = nums[back];
//             nums[back] = "REMOVED"; 
//             back-- 
//         }else { 
//             k.push(nums[i]);
//             i++
//         }
//     }
//     const result = k.length;
//     return result;
}

const practiceArray = [4, 5, 1, 4];
const TestValue = 4;
const testResults = removeElement(practiceArray , TestValue); 
console.log(practiceArray);
console.log(testResults);

