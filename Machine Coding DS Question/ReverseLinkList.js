// Reverse a singly linked list.
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL


function myFunction() {
  console.log(reverseList(genrateList()));
}

var reverseList = function(head) {
    console.log(head)
    let prev = null;
    let cur = head;
    while(cur != null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
        console.log(prev)
    }
    
    return prev;
};

function genrateList() {
  let ar = [1,2,3,4,5];
  let head = new ListNode(ar[0]);
  let cur = head;
  for(let i = 1; i<ar.length; i++) {
    cur.next = new ListNode(ar[i]);
    cur = cur.next;
  }
  console.log(head);
  return head;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
