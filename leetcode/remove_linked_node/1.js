function ListNode(val){
    this.val=val;
    this.next=null;
}
var removeLinknode = function(head,val){
   const dummy = {   //哨兵节点 假节点 没有val
       next:head
   }
   let cur = dummy;
   while(cur && cur.next){
       let next = cur.next;
       if(next.val===val){
           cur.next = next.next;

       }
       if(next.val!==val){
           cur=next;
       }
   }
   return dummy.next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
const n6 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n4);
removeLinknode(n1,6);
console.log(n4);

