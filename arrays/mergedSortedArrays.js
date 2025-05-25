/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
// make pointers 
    let i = m - 1;
    let j = n - 1; 
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) { 
        if (nums1[i] > nums2[j]) { 
            nums1[k] = nums1[i];
            i--; 
        } else { 
            nums1[k] = nums2[j];
            j--;
        }
        k--; 
    }

    while (j >= 0) { 
        nums1[k] = nums2[j];
        j--;
        k--;
    }

// while i and j is greater than and equal to zero

// if array1[i] is greater than array[j] assign array1[k] to array1[i]



}

const nums1 = [2, 4, 6, 0, 0];
const nums2 = [1, 3, 4, 5, 2];

console.log("NUM2 BEFORE MERGE" , nums2);
console.log("NUM1 BEFORE MERGE" , nums1)


merge(nums1, 3, nums2, 5);
console.log("NUMS2 AFTER MERGE" , nums2);
console.log("NUM1 AFTER MERGE" , nums1)


