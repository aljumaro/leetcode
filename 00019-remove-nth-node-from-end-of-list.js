/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Problem description: Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * 
 * Solution: this is a "one pass" solution.
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = (head, n) => {

    if (head.next == null) {
        return null;
    }

    let first = head;
    let nodes = {};
    let count = 0;

    // We count the total of nodes and map them with their index
    while (head != null) {
        nodes[count] = head;
        head = head.next;
        count++;
    }

    // If previous node does not exist then we are removing the first element of the list
    if (!(count-n-1 in nodes)) {
        return first.next;
    }

    // If the next node exists then we delete it from the list
    let prev = nodes[count-n-1];
    if (count-n+1 in nodes) {        
        let next = nodes[count-n+1];
        prev.next = next;
    // if it doesn't the it is the last and we change the previous pointer to null
    } else {
        prev.next = null;
    }

    return first;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}    

let five = new ListNode(5);
let four = new ListNode(4, five);
let three = new ListNode(3, four);
let two = new ListNode(2, three);
let one = new ListNode(1, two);
let n = 2;
//console.log(removeNthFromEnd(one, n));

one = new ListNode(1);
n = 1;
//console.log(removeNthFromEnd(one, n));

two = new ListNode(2);
one = new ListNode(1, two);
n = 2;
console.log(removeNthFromEnd(one, n));