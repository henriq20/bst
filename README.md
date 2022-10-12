# :deciduous_tree: simple-bst

An implementation of a Binary Search Tree (BST)

## Table of contents
- [simple-bst](#deciduous_tree-simple-bst)
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
    - [Traversing the tree](#traversing-the-tree)
      - [traverse](#traverse)
      - [inorder](#inorder)
      - [preorder](#preorder)
      - [postorder](#postorder)
    - [Utility functions](#utility-functions)
      - [isLeaf](#isleaf)
      - [isBalanced](#isbalanced)
  - [Contributing](#contributing)

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
import { BST, Node } from 'simple-bst';

// also works
// import BST from 'simple-bst';

const tree = new BST();

// Adding and removing nodes
tree.add(5).add(15).add(2).add(new Node(20)).remove(15);

// Shortex syntax
tree.add(8, 72, 95).remove(72, 95);

console.log(tree.size); // 4

// Checking if a node is present
if (tree.has(2)) {
  console.log('The number 2 is present in the tree');
} else {
  console.log('The number 2 is not present in the tree');
}

// Getting the max value
const max = tree.max(); // 20

// Getting the min value
const min = tree.min(); // 2
```

## API

#### add
Adds a node in the tree.

```JavaScript
tree.add(5); // First node becomes the root
tree.add(10);

// Shorter syntax
tree.add(8, 11);

console.log(tree.size); // 4
```

#### remove
Removes a node from the tree.

```JavaScript
tree.add(5, 10, 20, 2, 4, 18);

tree.remove(10, 18);

console.log(tree.size); // 4
```

#### find
Searches for a given value in the tree and returns the node.

```JavaScript
tree.add(5, 10);

const node = tree.find(10);

console.log(node.data); // 10
```

#### has
Indicates whether a value exists. Optionally takes a root node from which to check the value.

```JavaScript
tree.add(5, 10, 15, 9, 7);

console.log(tree.has(5)); // true
console.log(tree.has(14)); // false

const root = tree.find(15);

console.log(tree.has(5, root)); // false
```

#### min
Finds the minimum value in the tree. Optionally takes a root node from which to find the value.

```JavaScript
tree.add(5, 2, 10, 15, 9, 7);

console.log(tree.min()); // 2

const root = tree.find(10);

console.log(tree.min(root)); // 7
```

#### max
Finds the maximum value in the tree. Optionally takes a root node from which to find the value.

```JavaScript
tree.add(5, 2, 3, 1, 10, 15, 9, 7);

console.log(tree.max()); // 15

const root = tree.find(3);

console.log(tree.max(root)); // 2
```

#### height
Gets the height of the tree.

```JavaScript
tree.add(8, 3, 1, 6, 4, 7, 10, 14, 13);

console.log(tree.height()); // 3

// you can also use depth, which is an alias for the height function
console.log(tree.depth()); // 3
```

### Traversing the tree
All traversal functions are generator functions, which return a [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).

#### traverse
Traverses the tree using the specified order.

```JavaScript
tree.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

for (const node of tree.traverse('inorder')) {
  console.log(node.data);
}
```

#### inorder
Traverses the tree from the left subtree to the root, then to the right subtree.

```JavaScript
tree.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

const inorder = Array.from(tree.inorder());

// [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(inorder.map(node => node.data));
```

#### preorder
Traverses the tree from the `root` to the left subtree, then to the right subtree.

```JavaScript
tree.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

const preorder = Array.from(tree.preorder());

// [ 4, 2, 1, 3, 6, 5, 7 ]
console.log(preorder.map(node => node.data));
```

#### postorder
Traverses the tree from the left subtree to the right subtree, then to the root.

```JavaScript
tree.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

const postorder = Array.from(tree.postorder());

// [ 1, 3, 2, 5, 7, 6, 4 ]
console.log(postorder.map(node => node.data));
```

### Utility functions

#### isLeaf
Indicates whether a node has no sub-children (i.e is a leaf).

```JavaScript
tree.add(8, 3, 1, 10, 15, 14);

console.log(tree.isLeaf(8)); // false
console.log(tree.isLeaf(3)); // false
console.log(tree.isLeaf(10)); // false

console.log(tree.isLeaf(1)); // true
console.log(tree.isLeaf(14); // true
```

#### isBalanced
Indicates whether the tree is balanced.

```JavaScript
const balancedTree = new BST([ 3, 1, 4, 2 ]);
const unbalancedTree = new BST([ 1, 2, 3, 4, 5, 6 ]);

console.log(balancedTree.isBalanced()); // true
console.log(unbalancedTree.isBalanced()); // false
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
