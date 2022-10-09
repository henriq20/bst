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
