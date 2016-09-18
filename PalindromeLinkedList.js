/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    var slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse after middle
    var relist = reverseList(slow.next);
    while (relist) {
        if (relist.val !== head.val) return false;
        relist = relist.next;
        head = head.next;
    }
    return true;
};
function reverseList(head) {
    var pre = null;
    var next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}