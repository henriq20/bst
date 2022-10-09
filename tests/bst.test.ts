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
