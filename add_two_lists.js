class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  // todo

  let current1 = head1
  let current2 = head2
  let carryOver = 0
  let dummyHead = new Node(null)
  let current = dummyHead
  while(current2  || current1 || carryOver > 0){
    let total1 = current1 === null ? 0 : current1.val;
    let total2 = current2 === null ? 0 : current2.val;
    const sum = total2 + total1 + carryOver;
    carryOver = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    dummyHead.next = new Node(digit);
    dummyHead = dummyHead.next;

    if (current2 !== null) current2 = current2.next;
    if (current1 !== null) current1 = current1.next;
  }
  return current.next
};