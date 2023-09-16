/*
Given the head of a linked list, find all the values that appear more than once in the list and delete the nodes that have any of those values.

Return the linked list after the deletions.

Example 1:

Input: head = [1,2,3,2]
Output: [1,3]
Explanation: 2 appears twice in the linked list, so all 2's should be deleted. After deleting all 2's, we are left with [1,3].
*/

function deleteDuplicates(head) {
    let clone = head
    let map = {}

    while (clone !== null) {
        if (!map[clone.val]) {
            map[clone.val] = 1
        } else {
            map[clone.val]++
        }
        clone = clone.next
    }

    let prev = new ListNode(-1, head)

    clone = head

    while (clone !== null) {
        //check if have next and if the next value is in the map
        while (clone.next && map[clone.next.val] > 1) {
            clone.next = clone.next.next
        }
        clone = clone.next
    }
    return prev.next
}

console.log(deleteDuplicates([1, 2, 3, 2])) // [1,3]