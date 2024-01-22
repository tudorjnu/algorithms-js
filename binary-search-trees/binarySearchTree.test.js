const { BinarySearchTree } = require("./binarySearchTree.js");

const makeRandomArray = (length, max) => {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
};

const simpleSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const simpleUnsorted = [3, 2, 4, 9, 1, 5, 8, 6, 7];
const simpleDuplicates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

describe("Test Initialization", () => {
  test("null", () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  test("simpleSorted", () => {
    const tree = new BinarySearchTree(simpleSorted);
    expect(tree.inOrder()).toStrictEqual(simpleSorted);
  });

  test("simpleUnsorted", () => {
    const tree = new BinarySearchTree(simpleUnsorted);
    expect(tree.inOrder()).toStrictEqual(simpleSorted);
  });

  test("simpleDuplicates", () => {
    const tree = new BinarySearchTree(simpleDuplicates);
    expect(tree.root).not.toBeNull();
    expect(tree.inOrder()).toStrictEqual(simpleSorted);
  });
});

describe("Test insert", () => {
  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  test("insert 1", () => {
    tree.insert(1);
    expect(tree.root.value).toBe(1);
    expect(tree.inOrder()).toStrictEqual([1]);
  });

  test("insert two in order", () => {
    tree.insert(1);
    tree.insert(2);
    expect(tree.inOrder()).toStrictEqual([1, 2]);
  });
  test("insert two out of order", () => {
    tree.insert(2);
    tree.insert(1);
    expect(tree.inOrder()).toStrictEqual([1, 2]);
  });
});

describe("Test Find", () => {
  test("find 1", () => {
    const tree = new BinarySearchTree(simpleSorted);
    expect(tree.find(1).value).toBe(1);
  })
})
