/*You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, 
causing the left and the right side of the deleted substring to concatenate together.
We repeatedly make k duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete. 

Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
*/

const removeDuplicates = (s, k) => {

    let stack = []

    for (let i = 0; i < s.length; i++) {
        let curr = s[i]

        if (stack.length === 0 || curr !== stack[stack.length - 1][0]) {
            stack.push([curr, 1]);
        } else {
            stack[stack.length - 1][1]++
            if (stack[stack.length - 1][1] === k) {
                stack.pop()
            }
        }
    }

    console.log(stack);
    let res = ""
    for (let [char, count] of stack) {
        res += char.repeat(count)
    }
    console.log(res);
    return res

}

removeDuplicates("deeedbbcccbdaa", 3)