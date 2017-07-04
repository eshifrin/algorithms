var deleteNode = function(rootNode, key) {
    
    const lowest = (node) => {
        if (!node.left) {
            return node.val;
        } else {
            return lowest(node.left);
        }
    }

    const removeNode = (node, key) => {
        if (!node) {
            return;
        }
    
        let where = null;
        let direction = node.val > key ? 'left' : 'right'
        if (node[direction] && node[direction].val === key) {
            where = direction;
        } 
        
        if (where) {
            if (!node[where].left && !node[where].right) {
                node[where] = null;
                return;
            } else if (!!node[where].left ^ !!node[where].right) {
                let child = node[where].left ? 'left' : 'right';
                node[where] = node[where][child];
            } else {
                let val = lowest(node[where].right);
                node[where].val = val;
                removeNode(node[where], val);
            }
        } else {
            removeNode(node[direction], key);
        }
        
    }
    
    if (!rootNode) {
        return rootNode;
    }
    else if (rootNode.val === key) {
        let temp = new TreeNode(Infinity);
        temp.left = rootNode;
        removeNode(temp, key);
        let newRoot = temp.left;
        temp.next = null;
        return newRoot;
    } else {
        removeNode(rootNode, key);
        return rootNode;
    }
};

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
let node = require('../helpers').node;

let r = new node(3);
r.left = new node(2);
r.right = new node(4);
r.left.left = new node(1);
let z = new node(0);
console.log(deleteNode(z, 0))



