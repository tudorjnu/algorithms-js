# README for LinkedList Implementation in JavaScript

## Overview

This JavaScript implementation provides a basic structure for creating and manipulating a singly linked list. It includes two classes: `Node` and `LinkedList`.

### `Node`

The `Node` class represents an individual element in the linked list. Each node has two properties:

- `value`: The value stored in the node.
- `next`: A reference to the next node in the list.

### `LinkedList`

The `LinkedList` class offers various methods to perform operations on the linked list, such as adding, removing, and finding nodes.

## Methods

`constructor()`: Initializes a new instance of the `LinkedList` class with no nodes.

`append(value)`: Adds a new node containing `value` to the end of the list.

`prepend(value)`: Adds a new node containing `value` to the start of the list.

`size()`: Returns the total number of nodes in the list.

`head()`: Returns the first node in the list.

`tail()`: Returns the last node in the list.

`at(index)`: Returns the node at the given `index`.

`pop()`: Removes the last element from the list.

`contains(value)`: Returns `true` if the passed in `value` is in the list; otherwise, returns `false`.

`find(value)`: Returns the index of the node containing `value`, or `null` if not found.

`toString()`: Returns a string representation of the list.

`insertAt(value, index)`: Inserts a new node with the provided `value` at the given `index`.

`removeAt(index)`: Removes the node at the given `index`.

## Usage

To use this linked list implementation, include the provided class definitions in your JavaScript file. Create instances of `LinkedList` and use its methods to manipulate the list.

```javascript
const myList = new LinkedList();
myList.append(10);
console.log(myList.toString());
// Output: ( 10 ) -> null
```

## Note

This implementation is for educational purposes and might need modifications for production use, such as error handling and performance optimization.
