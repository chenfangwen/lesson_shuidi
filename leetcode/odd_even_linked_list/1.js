function ListNode(val){
    this.val=val;
    this.next=null;
}
var oddEvenList = function(head) {

};

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1);
reserveList(n1);
console.log(n5);

