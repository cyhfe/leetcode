class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2) {
    let List = new ListNode();
    let head = List;
    let sum = 0;
    let carry = 0;
    while (l1 || l2 || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
}
