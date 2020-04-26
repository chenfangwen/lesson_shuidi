var mergeKLists = function(lists) {
    if(!lists || lists.length == 0) return null;
    let arr = [];
    let res = new ListNode(0);
    lists.forEach(list => {
        let cur = list;
        while(cur){
            arr.push(cur.val);
            cur = cur.next;
        }
    })
    let cur = res;
    arr.sort((a,b) => a-b).forEach(val => {
        let node = new ListNode(val);
        cur.next = node;
        cur = cur.next;
    })
    return res.next;
};
