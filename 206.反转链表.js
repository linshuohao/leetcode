/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
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
var reverseList = function(head) {
  let current = head;
  let result = null;
  while (current) {
    let node = new ListNode(current.val);
    node.next = result;
    result = node;
    current = current.next;
  }
  return result;
};
// @lc code=end

