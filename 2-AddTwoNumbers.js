/**
* You are given two linked lists representing
* two non-negative numbers. The digits are stored
* in reverse order and each of their nodes contain
* a single digit. Add the two numbers and return it
* as a linked list.

* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
*/

import {List} from './data-structures'
import assert from 'assert'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const l1Number = extractNumber(l1)
  const l2Number = extractNumber(l2)
  let result = l1Number + l2Number
  const resultList = new List(result % 10)
  result = Math.floor(result / 10)

  while (result > 0) {
    appendToList(resultList, (result % 10))
    result = Math.floor(result / 10)
  }

  return resultList
};

/**
 * @param {ListNode} l
 * @return {Number}
 */
const extractNumber = (l) => {
  let number = l.val
  let mult = 10

  while (l.next !== null) {
    l = l.next
    number = number + (l.val * mult)
    mult = mult * 10
  }

  return number
}

/**
 * @param {ListNode} l
 * @param {Number} l
 * @return {undefined}
 */
const appendToList = (l, val) => {
  if (l.val === null) {
    l.val = val
  } else if (l.next === null) {
    l.next = new List(val)
  } else {
    appendToList(l.next, val)
  }
}

const result = addTwoNumbers(new List(2, 4, 3), new List(5, 6, 4))
const expected = new List(7, 0, 8)

assert.equal(expected.val, result.val)
assert.equal(expected.next.val, result.next.val)
assert.equal(expected.next.next.val, result.next.next.val)

