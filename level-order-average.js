class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const levelAverages = (root) => {
    let current_level = [root]
    let next_level = []
    let values = []
    let current = root
    if (current === null) return values
    
    while(current_level.length > 0){
      let total = 0
      for(let node of current_level){
        total += node.val
      }
      values.push(total / current_level.length)
      for(let node of current_level){
        if(node.left !== null){
          next_level.push(node.left)
        }
        if(node.right !== null){
          next_level.push(node.right)
        }
      }
      current_level = next_level
      next_level = []
    }
    return values
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
  levelAverages(a);
  
  /*
  take initial value
  [11, 4] [4, -2, 1]
  for node in nodes
    left, right 
  add both left and right of each if they exist to an array
  average thosee
  
  */