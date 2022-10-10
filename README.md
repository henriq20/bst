# Binary Search Tree (BST)

This library is an implementation of a BST, it does not have the intent to be as fast as possible, but rather a simple API.

---

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [add](#add)
  - [remove](#remove)
  - [find](#find)
  - [has](#has)
  - [min](#min)
  - [max](#max)
  - [isLeaf](#isLeaf)

## Installation

Use npm or yarn to install this library.

```bash
npm install simple-bst
# or
yarn add simple-bst
```

## Usage

```JavaScript
import { BST } from 'simple-bst';

const bst = new BST();

// Adding nodes
bst.add(5);
bst.add(15);
bst.add(2);
bst.add(20);
bst.add(70);
bst.add(45);

// Removing nodes
bst.remove(15);

// Checking if a node is present
if (bst.has(2)) {
    console.log('The number 2 is present in the tree');
} else {
    console.log('The number 2 is not present in the tree');
}

// Getting the max value
const max = bst.max(); // 70

// Getting the min value
const min = bst.min(); // 2
```

## API

#### add
Adds a node in the tree.

**Example**

```JavaScript
bst.add(5); // First node becomes the root
bst.add(10);

console.log(bst.size); // 2
```

#### remove
Removes a node from the tree.

**Example**

```JavaScript
bst.add(5);
bst.add(10);

bst.remove(10);

console.log(bst.size); // 1
```

#### find
Searches for a given value in the tree and returns the node.

**Example**

```JavaScript
bst.add(5);
bst.add(10);

const node = bst.find(10);

console.log(node.data); // 10
```

#### has
Indicates whether a value exists. Optionally takes a root node from which to check the value.

**Example**

```JavaScript
bst.add(5);
bst.add(10);
bst.add(15);
bst.add(9);
bst.add(7);

console.log(bst.has(5)); // true
console.log(bst.has(14)); // false

const root = bst.find(15);

console.log(bst.has(5, root)); // false
```

#### min
Finds the minimum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bst.add(5);
bst.add(2);
bst.add(10);
bst.add(15);
bst.add(9);
bst.add(7);

console.log(bst.min()); // 2

const root = bst.find(10);

console.log(bst.min(root)); // 7
```

#### max
Finds the maximum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bst.add(5);
bst.add(2);
bst.add(3);
bst.add(1);
bst.add(10);
bst.add(15);
bst.add(9);
bst.add(7);

console.log(bst.max()); // 15

const root = bst.find(3);

console.log(bst.max(root)); // 2
```

#### isLeaf
Indicates whether a node has no sub-children (i.e is a leaf).

**Example**

```JavaScript
bst.add(8);
bst.add(3);
bst.add(1);
bst.add(10);
bst.add(15);
bst.add(14);

console.log(bst.isLeaf(8)); // false
console.log(bst.isLeaf(3)); // false
console.log(bst.isLeaf(10)); // false

console.log(bst.isLeaf(1)); // true
console.log(bst.isLeaf(14); // true
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
