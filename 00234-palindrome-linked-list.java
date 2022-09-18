/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head.next==null) return true;
        
        ListNode slow=head;
        ListNode fast=head;
        ListNode temp=head;
		
		//diving the list in two halves
        
        while(fast!=null&&fast.next!=null){
            temp=slow;
            slow=slow.next;
            fast=fast.next.next;
        }
        temp.next=null;
        ListNode prev=null;
        
        //reversing the second list
		
       while(slow!=null){
           ListNode next_node=slow.next;
           slow.next=prev;
           prev=slow;
           slow=next_node;
       }
       
        //comparing the values of nodes to check if palindrome or not
		
        while(head!=null&&prev!=null){
      if(head.val!=prev.val) return false;
            head=head.next;
            prev=prev.next;
        }
        return true;
    }
}