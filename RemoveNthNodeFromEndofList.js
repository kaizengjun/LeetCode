
//Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 //数组的下标就是顺序，只要找倒数第n个数组元素，把他前一个指向他的后一个
var removeNthFromEnd = function(head, n) {
    var listArr = [];
    var temp = head;
    while (temp) {
        listArr.push(temp);
        temp = temp.next;
    }
    var index = listArr.length - n;
    //异常边界值，没有前一个，没有后一个和链表只有一个元素。
    if (!listArr[index - 1]) {
    	return listArr[1] || [];
    } else if (!listArr[index + 1]) {
    	listArr[index - 1].next = null;
    	return listArr[0];
    } else {
    	listArr[index - 1].next = listArr[index + 1];
    	return listArr[0];
    }
 
};

var printList = function(head) {
	while(head) {
		console.log(head.val);
		head = head.next;
	}
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
//printList(a);
printList(removeNthFromEnd(a, 3));