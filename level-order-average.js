class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const levelAverages = (root) => {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
  };
  
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  /*
  take initial value
  [11, 4] [4, -2, 1]
  for node in nodes
    left, right 
  add both left and right of each if they exist to an array
  average thosee
  
  */