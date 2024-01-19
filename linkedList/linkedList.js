class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  //  adds a new node containing value to the end of the list
  append(value) {
    if (this.first === null) {
      this.first = new Node(value);
      this.last = this.first;
    } else {
      const newLast = new Node(value);
      this.last.next = newLast;
      this.last = newLast;
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (this.first === null) {
      this.first = new Node(value);
      this.last = this.first;
    } else {
      const newFirst = new Node(value);
      newFirst.next = this.first;
      this.first = newFirst;
    }
  }

  // returns the total number of nodes in the list
  size() {
    var nNodes = 0;
    var currentNode = this.first;
    while (currentNode !== null) {
      nNodes += 1;
      currentNode = currentNode.next;
    }
    return nNodes;
  }

  // returns the first node in the list
  head() {
    return this.first;
  }

  // returns the last node in the list
  tail() {
    return this.last;
  }

  // returns the node at the given index
  at(index) {
    var n = 0;
    var currentNode = this.first;
    while (currentNode !== null) {
      if (n == index) {
        return currentNode;
      }
      n += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // removes the last element from the list
  pop() {
    var current = this.first;
    while (current !== null) {
      var next = current.next;
      if (next.next === null) {
        current.next = null;
        this.last = current;
      }
      current = current.next;
    }
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    var current = this.first;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //  returns the index of the node containing value, or null if not found.
  find(value) {
    var n = 0;
    var currentNode = this.first;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return n;
      }
      n += 1;
      currentNode = currentNode.next;
    }
    return null;
  }

  toString() {
    var stringRepresentation = "";
    var currentNode = this.first;
    while (currentNode !== null) {
      stringRepresentation += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    stringRepresentation += `null`;
    return stringRepresentation;
  }

  //  inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    var n = 1;
    var prevNode = this.first;
    while (currentNode !== null) {
      var currentNode = prevNode.next;
      if (n === index) {
        var newCurrent = new Node(value);
        prevNode.next = newCurrent;
        newCurrent.next = currentNode;
        return;
      }
      prevNode = currentNode;
      n += 1;
    }
    return null;
  }

  // removeAt(index) that removes the node at the given index
  removeAt(index) {
    if (index === 0) {
      this.first = this.first.next;
      return;
    }

    var n = 1;
    var prevNode = this.first;
    while (currentNode !== null) {
      var currentNode = prevNode.next;
      console.log(n, currentNode.value);
      if (n === index) {
        var nextNode = currentNode.next;
        prevNode.next = nextNode;
        return;
      }
      prevNode = currentNode;
      n += 1;
    }
    return null;
  }
}
