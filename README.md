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
npm install simple-bsc
# or
yarn add simple-bsc
```

## Usage

```JavaScript
import { BSC } from 'bsc';

const bsc = new BSC();

// Adding nodes
bsc.add(5);
bsc.add(15);
bsc.add(2);
bsc.add(20);
bsc.add(70);
bsc.add(45);

// Removing nodes
bsc.remove(15);

// Checking if a node is present
if (bsc.has(2)) {
    console.log('The number 2 is present in the tree');
} else {
    console.log('The number 2 is not present in the tree');
}

// Getting the max value
const max = bsc.max(); // 70

// Getting the min value
const min = bsc.min(); // 2
```

## API

#### add
Adds a node in the tree.

**Example**

```JavaScript
bsc.add(5); // First node becomes the root
bsc.add(10);

console.log(bsc.size); // 2
```

#### remove
Removes a node from the tree.

**Example**

```JavaScript
bsc.add(5);
bsc.add(10);

bsc.remove(10);

console.log(bsc.size); // 1
```

#### find
Searches for a given value in the tree and returns the node.

**Example**

```JavaScript
bsc.add(5);
bsc.add(10);

const node = bsc.find(10);

console.log(node.data); // 10
```

#### has
Indicates whether a value exists. Optionally takes a root node from which to check the value.

**Example**

```JavaScript
bsc.add(5);
bsc.add(10);
bsc.add(15);
bsc.add(9);
bsc.add(7);

console.log(bsc.has(5)); // true
console.log(bsc.has(14)); // false

const root = bsc.find(15);

console.log(bsc.has(5, root)); // false
```

#### min
Finds the minimum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bsc.add(5);
bsc.add(2);
bsc.add(10);
bsc.add(15);
bsc.add(9);
bsc.add(7);

console.log(bsc.min()); // 2

const root = bsc.find(10);

console.log(bsc.min(root)); // 7
```

#### max
Finds the maximum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bsc.add(5);
bsc.add(2);
bsc.add(3);
bsc.add(1);
bsc.add(10);
bsc.add(15);
bsc.add(9);
bsc.add(7);

console.log(bsc.max()); // 15

const root = bsc.find(3);

console.log(bsc.max(root)); // 2
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
