/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    //1.遍历s的所有节点，看那个节点和t的根节点相等
    //2.相等则继续遍历下去，匹配余下节点，知道t树遍历完
    if(!s&&t){
        return false;
    }
     let linkNode = function(node,target){
         if(!node&&target)return false;
         if(node&&!target)return false;
         if(!node&&!target) return true
         if(node.val===target.val){
             return linkNode(node.left,target.left)&&linkNode(node.right,target.right)
         }else{
             return false
         }
     }
   return linkNode(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t)
};

// 作者：hu-zhi-wu
// 链接：https://leetcode-cn.com/problems/subtree-of-another-tree/solution/js-by-hu-zhi-wu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。