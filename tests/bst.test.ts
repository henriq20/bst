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
