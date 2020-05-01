// 二、迭代+双指针🐛🐛🐛🐛🐛🐛
let mergeTwoLists = (l1, l2) => {
    let head = new ListNode(), pre = head
    while (l1 && l2) {
        if(l1.val > l2.val){
            pre.next = l2
            l2 = l2.next
        } else {
            pre.next = l1
            l1 = l1.next
        }
        pre = pre.next
    }
    pre.next = l1 ? l1 :l2
    return head.next
};

// 作者：ofeii
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/chun-zhao-wu-yue-ep01mergetwolistshe-bing-liang-ge/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。