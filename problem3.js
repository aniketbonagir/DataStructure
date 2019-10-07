
class Node {
   constructor(val, left = null, right = null) {
       this.val = val;
       this.left = left;
       this.right = right;
   }

   toString() {
       return JSON.stringify(this);
   }
};

const serialize = node => node.toString();
const deserialize = string => JSON.parse(string);

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

console.log(deserialize(serialize(node)).left.left.val); // prints "left.left"


