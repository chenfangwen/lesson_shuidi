var mergeTwoLists = function(l1, l2) {
    if(l1 &&!l2) return l1;
    if(!l1 && l2) return l2;
    if(!l1 && !l2) return l1;
    let s = Math.min(l1.val,l2.val);
    if(l1.val<=l2.val){
        l1 = l1.next
    }else{
        l2 = l2.next
    }
    let pNode = new ListNode(s);
    let cNode = pNode;
    while(l1 && l2){
        if(l1.val<=l2.val){
            let a = l1.val;
            let dNode = new ListNode(a);
            cNode.next = dNode;
            cNode = cNode.next;
            l1 = l1.next
        }else{
            let a = l2.val;
            let dNode = new ListNode(a);
            cNode.next = dNode;
            cNode = cNode.next;
            l2 = l2.next;
        }
    } 
    if(l1) cNode.next = l1;
    if(l2) cNode.next = l2;
    return pNode;
};

// 作者：yan-shi-san
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/ji-jian-he-bing-liang-ge-you-xu-lian-biao-by-yan-s/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。