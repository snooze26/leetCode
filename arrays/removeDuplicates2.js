//typed 6 times as of 6/4/25 
/** 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
    if(nums.length <= 2) return 2; 

    let i = 2;

    for ( let j = 2; j < nums.length; j++) { 
        if(nums[j] !== nums[i-2]) { 
            nums[i] = nums[j]; 
            i++
        }
    }
    return i; 
    // return increment amount 
    
    // if (nums.length <= 2 )return nums.length; // check for 2 because no need to iterate through first two values 

    // let i = 2 // no need to iterate through first two values since they are valid;

    // for ( let j = 2; j < nums.length; j++) {  // loop through nums starting at 
    //     if(nums[j] !== nums[i - 2]) { // check 2 elements previous to see if matching
    //         nums[i] = nums[j]; // set i as unique value  
    //         console.log(nums); // 
    //         i++ // increment i 
    //     }
    // }
    // return i; // return i 
};

const practiceArray = [0,0,1,1,1,1,2,3,3];
const testResults = removeDuplicates2(practiceArray); 

console.log(testResults); 