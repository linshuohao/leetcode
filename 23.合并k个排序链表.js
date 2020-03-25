/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const len = lists.length;
  const merge2Lists = (l1, l2) => {
    let head = new ListNode(0);
    let curr = head;
    while(l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    if (l1) {
      curr.next = l1
    }
    if (l2) {
      curr.next = l2
    }
    return head.next
  }
  switch (len) {
    case 0:
      return null
    case 1:
      return lists[0];
    case 2:
      return merge2Lists(lists[0], lists[1]);
    default:
      const middle = Math.floor(len / 2);
      return merge2Lists(mergeKLists(lists.slice(0, middle)),mergeKLists(lists.slice(middle)))
  }
};
// @lc code=end

