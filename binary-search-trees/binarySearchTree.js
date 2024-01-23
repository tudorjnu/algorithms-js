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
    function deleteNode(node) {
      if (node === null) {
        return node
      }
      if (node.value !== value) {
        if (value < node.value) {
          node.left = deleteNode(node.left)
        } else {
          node.right = deleteNode(node.right)
        }
      } else {
        const isLeftNull = node.left === null
        const isRightNull = node.right === null
        if (isLeftNull && isRightNull) {
          return null
        } else if (isLeftNull) {
          return node.right
        } else if (isRightNull) {
          return node.left
        } else {
          let succParent = node

          let succ = node.right;
          while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
          }

          if (succParent !== node) {
            succParent.left = succ.right;
          } else {
            succParent.right = succ.right
          }

          node.value = succ.value
        }
      }
      return node
    }

    this.root = deleteNode(this.root)

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
      } else {

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

const tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9])

prettyPrint(tree.root);
tree.delete(5)
prettyPrint(tree.root);

module.exports = { BinarySearchTree };
