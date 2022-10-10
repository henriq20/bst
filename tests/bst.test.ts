import { BST } from '../src/index';

it('should define the first added value as the root', () => {
    const bst = new BST();

    bst.add(1);

    expect(bst.root?.data).toBe(1);
});

it('should add the value to the right if it is greater than root', () => {
    const bst = new BST();

    bst.add(5);
    bst.add(10);

    expect(bst.root?.right?.data).toBe(10);
});

it('should add the value to the left if it is less than root', () => {
    const bst = new BST();

    bst.add(5);
    bst.add(1);

    expect(bst.root?.left?.data).toBe(1);
});

it('should add multiple values', () => {
    const bst = new BST();

    bst.add(5, 1, 10, 14, 70);

    expect(bst.size).toBe(5);
});

it('should check whether a node is present in the tree', () => {
    const bst = new BST();

    bst.add(5);
    bst.add(1);
    bst.add(10);

    expect(bst.has(1)).toBe(true);
    expect(bst.has(10)).toBe(true);
    expect(bst.has(2)).toBe(false);
    expect(bst.has(8)).toBe(false);
});

it('should check whether a node is present in a specified root', () => {
    const bst = new BST();

    bst.add(50);
    bst.add(40);
    bst.add(30);
    bst.add(10);
    bst.add(15);
    bst.add(5);

    const root = bst.find(10);

    expect(bst.has(50, root)).toBe(false);
    expect(bst.has(30, root)).toBe(false);
    expect(bst.has(15, root)).toBe(true);
});

it('should find the max value', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(1);
    bst.add(2);
    bst.add(50);
    bst.add(40);

    expect(bst.max()).toBe(50);
});

it('should find the max value in the specified root', () => {
    const bst = new BST();

    bst.add(50);
    bst.add(40);
    bst.add(42);
    bst.add(48);
    bst.add(30);
    bst.add(20);
    bst.add(43);
    bst.add(44);

    const root = bst.find(42);

    expect(bst.max(root)).toBe(48);
});

it('should find the min value', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(1);
    bst.add(2);
    bst.add(50);
    bst.add(40);

    expect(bst.min()).toBe(1);
});

it('should find the min value in the specified root', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(15);
    bst.add(14);
    bst.add(11);
    bst.add(20);
    bst.add(25);
    bst.add(30);

    const root = bst.find(15);

    expect(bst.min(root)).toBe(11);
});

it('should find a node', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(1);
    bst.add(2);
    bst.add(50);
    bst.add(40);

    expect(bst.find(50)?.data).toBe(50);
    expect(bst.find(40)?.data).toBe(40);
    expect(bst.find(1)?.data).toBe(1);
});

it('should increase the size as nodes are added to the tree', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(5);
    bst.add(8);
    bst.add(1);

    expect(bst.size).toBe(4);
});

it('should decrease the size when a node is removed', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(5);
    bst.add(8);
    bst.add(1);
    bst.remove(1);

    expect(bst.size).toBe(3);
});

it('should not decrease the size when no node was removed', () => {
    const bst = new BST();

    bst.add(10);
    bst.remove(11);

    expect(bst.size).toBe(1);
});

it('should tell whether a node is a leaf', () => {
    const bst = new BST();

    bst.add(8);
    bst.add(3);
    bst.add(1);
    bst.add(10);
    bst.add(15);
    bst.add(14);

    expect(bst.isLeaf(8)).toBe(false);
    expect(bst.isLeaf(3)).toBe(false);
    expect(bst.isLeaf(10)).toBe(false);

    expect(bst.isLeaf(1)).toBe(true);
    expect(bst.isLeaf(14)).toBe(true);
});

it('should remove a node from the tree when the node is a leaf', () => {
    const bst = new BST();

    bst.add(8);
    bst.add(3);
    bst.add(1);

    bst.remove(1);

    expect(bst.has(1)).toBe(false);
});

it('should remove a node from the tree when the node has one child', () => {
    const bst = new BST();

    bst.add(50);
    bst.add(20);
    bst.add(40);
    bst.add(60);
    bst.add(100);

    bst.remove(20);

    expect(bst.has(20)).toBe(false);
    expect(bst.root?.left?.data).toBe(40);
});

it('should remove a node from the tree when the node has two children', () => {
    const bst = new BST();

    bst.add(50);
    bst.add(40);
    bst.add(70);
    bst.add(60);
    bst.add(80);

    bst.remove(50);

    expect(bst.has(50)).toBe(false);
    expect(bst.root?.data).toBe(60);
    expect(bst.root?.left?.data).toBe(40);
    expect(bst.root?.right?.data).toBe(70);
});

it('should remove multiple values', () => {
    const bst = new BST();

    bst.add(50);
    bst.add(40);
    bst.add(70);
    bst.add(60);
    bst.add(80);

    bst.remove(50, 40, 70);

    expect(bst.size).toBe(2);
});

it('should initialize the tree with a set of numbers', () => {
    const bst = new BST([ 1, 2, 3, 4, 5 ]);

    expect(bst.root?.data).toBe(1);
    expect(bst.size).toBe(5);
});
