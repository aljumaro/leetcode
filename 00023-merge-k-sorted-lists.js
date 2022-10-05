/**
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example 1:
 * 
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * 
 * Output: [1,1,2,3,4,4,5,6]
 * 
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = (lists) => {
    if (!lists.length) {
        return new ListNode(null);
    }

    while(lists.length > 1) {
        lists.push(mergeTwoLists(lists.splice(0,1)[0], lists.splice(0,1)[0]))
    }    
    return lists[0];
};

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

let l13 = new ListNode(5)
let l12 = new ListNode(4, l13)
let l11 = new ListNode(1, l12);

let l23 = new ListNode(4)
let l22 = new ListNode(3, l23)
let l21 = new ListNode(1, l22);

let l32 = new ListNode(6)
let l31 = new ListNode(2, l32);

let result = mergeKLists([l11, l21, l31]);
while(result != null) {
   console.log(result.val);
   result = result.next;
}