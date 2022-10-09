import { BST, Node } from '../src/index';

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

it('should find the max value', () => {
    const bst = new BST();

    bst.add(10);
    bst.add(1);
    bst.add(2);
    bst.add(50);
    bst.add(40);

    expect(bst.max()).toBe(50);
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
