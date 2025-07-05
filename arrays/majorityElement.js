/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    //base check  
    if (!nums) return console.error("Please enter a valid array"); 

    let counter = 0; 
    let candidate = null; 

    for(let num of nums) { 
        if(counter === 0) { 
            candidate = num
        }
        if(candidate === num) { 
            counter++; 
        } else {
            counter--; 
        }
    }

    return candidate; 
    // loop through

        // if count drops to 0, choose new candidate
    // if count drops to 0 
    // set candidate to num selecting a new candindate 
    // if the number is the candidate then 
    // add to the majority counter 
    
    // decrement the majoirty counter 
    //return candidate 
}

const testArray = [2, 2, 3, 2, 4, 2, 1, 2, 1,]

const majorityEle = majorityElement(testArray); 
console.log(majorityEle);