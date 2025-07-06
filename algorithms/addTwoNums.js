
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let dummyHead = new ListNode(0); 
    let current = dummyHead; 
    let carry = 0; 



    while ( l1 !== null || l2 !== null) { 
        const n1 = l1 ? l1.val : 0; 
        const n2 = l2 ? l2.val : 0; 
        const sum = n1 + n2 + carry; 

        let digit = sum % 10; 
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit); 
        current = current.next; 

        l1 = l1 ? l1.next : null; 
        l2 = l2 ? l2.next : null; 
    }

    if ( carry > 0 ) {
        current.next = new ListNode(carry)
    }


    return dummyHead.next; 
    
};
const testNode6 = new ListNode(6, null ); 
const testNode5 = new ListNode(5 , null); 
const testNode4 = new ListNode(4 , testNode6); 
const testNode3 = new ListNode(3 , testNode5); 
const testNode2 = new ListNode(2 , testNode4); 
const testNode1 = new ListNode(1 , testNode3); 

// l1 = [1 , 3 , 5] l2 = [2 , 4 , 6 ]
// expected = [3 , 7, 1, 1] 
const sum = addTwoNumbers(testNode1, testNode2); 

console.log(sum)

