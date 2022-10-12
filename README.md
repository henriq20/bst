# Binary Search Tree (BST)

This library is an implementation of a BST in its simplest form.

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
  - [height](#height)
  - [traverse](#traverse)
  - [inorder](#inorder)
  - [preorder](#preorder)
  - [postorder](#postorder)
  - [isLeaf](#isLeaf)
  - [isBalanced](#isBalanced)

## Installation

Install `simple-bst` using npm.

```shell
npm install simple-bst
```

Or install using yarn.

```shell
yarn add simple-bst
```

## Usage

```JavaScript
import BST from 'simple-bst';

// also works
// import { BST, Node } from 'simple-bst';

const bst = new BST();

// Adding and removing nodes
bst.add(5).add(15).add(2).add(20).remove(15);

// Shortex syntax
bst.add(8, 72, 95).remove(72, 95);

console.log(bst.size); // 4

// Checking if a node is present
if (bst.has(2)) {
  console.log('The number 2 is present in the tree');
} else {
  console.log('The number 2 is not present in the tree');
}

// Getting the max value
const max = bst.max(); // 20

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

// Shorter syntax
bst.add(8, 11);

console.log(bst.size); // 4
```

#### remove
Removes a node from the tree.

**Example**

```JavaScript
bst.add(5, 10, 20, 2, 4, 18);

bst.remove(10, 18);

console.log(bst.size); // 4
```

#### find
Searches for a given value in the tree and returns the node.

**Example**

```JavaScript
bst.add(5, 10);

const node = bst.find(10);

console.log(node.data); // 10
```

#### has
Indicates whether a value exists. Optionally takes a root node from which to check the value.

**Example**

```JavaScript
bst.add(5, 10, 15, 9, 7);

console.log(bst.has(5)); // true
console.log(bst.has(14)); // false

const root = bst.find(15);

console.log(bst.has(5, root)); // false
```

#### min
Finds the minimum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bst.add(5, 2, 10, 15, 9, 7);

console.log(bst.min()); // 2

const root = bst.find(10);

console.log(bst.min(root)); // 7
```

#### max
Finds the maximum value in the tree. Optionally takes a root node from which to find the value.

**Example**

```JavaScript
bst.add(5, 2, 3, 1, 10, 15, 9, 7);

console.log(bst.max()); // 15

const root = bst.find(3);

console.log(bst.max(root)); // 2
```

#### height
Gets the height of the tree.

**Example**

```JavaScript
bst.add(8, 3, 1, 6, 4, 7, 10, 14, 13);

console.log(bst.height()); // 3

// you can also use depth, which is an alias for the height function
console.log(bst.depth()); // 3
```

#### traverse
Traverses the tree using the specified order.

**Example**

```JavaScript
bst.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

// [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(bst.traverse('inorder').map(node => node.data));

// [ 4, 2, 1, 3, 6, 5, 7 ]
console.log(bst.traverse('preorder').map(node => node.data));

// [ 1, 3, 2, 5, 7, 6, 4 ]
console.log(bst.traverse('postorder').map(node => node.data));
```

#### inorder
Traverses the tree from the left subtree to the root, then to the right subtree.

**Example**

```JavaScript
bst.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

// [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(bst.inorder().map(node => node.data));
```

#### preorder
Traverses the tree from the `root` to the left subtree, then to the right subtree.

**Example**

```JavaScript
bst.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

// [ 4, 2, 1, 3, 6, 5, 7 ]
console.log(bst.preorder().map(node => node.data));
```

#### postorder
Traverses the tree from the left subtree to the right subtree, then to the root.

**Example**

```JavaScript
bst.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

// [ 1, 3, 2, 5, 7, 6, 4 ]
console.log(bst.preorder().map(node => node.data));
```

#### isLeaf
Indicates whether a node has no sub-children (i.e is a leaf).

**Example**

```JavaScript
bst.add(8, 3, 1, 10, 15, 14);

console.log(bst.isLeaf(8)); // false
console.log(bst.isLeaf(3)); // false
console.log(bst.isLeaf(10)); // false

console.log(bst.isLeaf(1)); // true
console.log(bst.isLeaf(14); // true
```

#### isBalanced
Indicates whether the tree is balanced.

**Example**

```JavaScript
const balancedTree = new BST([ 3, 1, 4, 2 ]);
const unbalancedTree = new BST([ 1, 2, 3, 4, 5, 6 ]);

console.log(balancedTree.isBalanced()); // true
console.log(unbalancedTree.isBalanced()); // false
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
