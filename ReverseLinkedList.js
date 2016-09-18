/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//非递归
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    var pre = null;
    var next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
//递归
var reverseList = function(head) {
    if (head === null || head.next === null){
        return head;
    } else {
        var newhead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newhead;
    }
};