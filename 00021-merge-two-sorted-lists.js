/**
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list. 
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else {
        if (list1.val <= list2.val) {
            return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
        } else {
            return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
        }
    }
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

let l13 = new ListNode(4)
let l12 = new ListNode(2, l13)
let l11 = new ListNode(1, l12);

let l23 = new ListNode(4)
let l22 = new ListNode(3, l23)
let l21 = new ListNode(1, l22);

let result = mergeTwoLists(l11, l21);
while(result != null) {
    console.log(result.val);
    result = result.next;
}