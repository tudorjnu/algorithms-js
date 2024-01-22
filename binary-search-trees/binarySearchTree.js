const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const removeDuplicates = (array) => {
  // assumes array is sorted
  const newArray = [];
  let lastValue = null;
  for (const value of array) {
    if (value !== lastValue) {
      newArray.push(value);
      lastValue = value;
    }
  }
  return newArray;
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(array) {
    this.root = null;
    if (array) {
      array = array.sort((a, b) => a - b);
      array = removeDuplicates(array);
      this.root = this.buildTree(array);
    }
  }

  buildTree(array) {
    function buildTree(array) {
      const arrayLength = array.length;
      if (array.length === 0) {
        return null;
      }
      const node = new Node();

      const mid = Math.floor(array.length / 2);

      const leftArray = array.slice(0, mid);
      const rightArray = array.slice(mid + 1, arrayLength);

      node.value = array[mid];
      node.left = buildTree(leftArray);
      node.right = buildTree(rightArray);

      return node;
    }

    const root = buildTree(array);

    return root;
  }

  insert(value) {
    function insert(node) {
      if (node === null) {
        return new Node(value);
      }

      if (value < node.value) {
        node.left = insert(node.left);
      } else if (value > node.value) {
        node.right = insert(node.right);
      }
      return node;
    }
    this.root = insert(this.root);
  }

  delete(value) {
    function deleteNode(node, parentNode) {
      if (node.value !== value) {
        if (value < node.value) {
          return deleteNode(node.left, node)
        } else {
          return deleteNode(node.right, node)
        }
      }
    }

  }

  find(value) {
    function find(node) {
      if (node === null) {
        return
      } else if (node.value === value) {
        return node
      } else if (value < node.value) {
        return find(node.left)
      } else if (value > node.value) {
        return find(node.right)
      }
    }
    const node = find(this.root)
    return node
  }

  levelOrder(fn) { }

  inOrder(fn) {
    function inOrder(node = this.root, acc = []) {
      if (node === null) {
        return;
      }

      inOrder(node.left, acc);
      acc.push(node.value);
      inOrder(node.right, acc);
    }

    const stack = [];
    inOrder(this.root, stack);
    return stack;
  }

  preOrder(fn) { }

  postOrder(fn) { }

  height(node) {
    return 0;
  }

  depth(node) {
    return 0;
  }

  isBalanced() {
    return false;
  }

  rebalance() { }
}

// const simpleArraySorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);

prettyPrint(tree.root);

module.exports = { BinarySearchTree };
