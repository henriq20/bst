import { BST } from '../src/index';

describe('add', () => {
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
});

describe('has', () => {
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
});

describe('max', () => {
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
});

describe('min', () => {
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
});

describe('find', () => {
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
});

describe('size', () => {
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
});

describe('isLeaf', () => {
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
});

describe('remove', () => {
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
});

describe('constructor', () => {
    it('should initialize the tree with a set of numbers', () => {
        const bst = new BST([ 1, 2, 3, 4, 5 ]);

        expect(bst.root?.data).toBe(1);
        expect(bst.size).toBe(5);
    });
});

describe('height', () => {
    it('should get the height of the tree', () => {
        const bst = new BST();

        bst.add(8, 3, 1, 6, 4, 7, 10, 14, 13);

        expect(bst.height()).toBe(3);
    });

    it('should get the height of a specified node', () => {
        const bst = new BST();

        bst.add(8, 3, 1, 6, 4, 7, 10, 14, 13);

        expect(bst.height(bst.find(6))).toBe(1);
    });

    it('should return -1 when tree is empty', () => {
        const bst = new BST();

        expect(bst.height()).toBe(-1);
    });

    it('should return 0 when tree has one node', () => {
        const bst = new BST();

        bst.add(5);

        expect(bst.height()).toBe(0);
    });
});

describe('isBalanced', () => {
    it.each([
        // True cases
        [ true, [ 3, 1, 4, 2 ] ],
        [ true, [ 10, 20, 5, 1 ] ],
        [ true, [ 30, 17, 11, 19, 10, 37, 31, 38 ] ],

        // False cases
        [ false, [ 1, 2, 3, 4, 5, 6 ] ],
        [ false, [ 40, 70, 35, 39, 30, 34, 20, 10, 5 ] ],
        [ false, [ 10, 8, 2, 1, 6, 4, 3, 5, 11, 14, 13, 16 ] ]
    ])('should return %p when tree has the nodes %p', (expected, nodes) => {
        const bst = new BST();

        bst.add(...nodes);

        expect(bst.isBalanced()).toBe(expected);
    });
});

describe('inorder', () => {
    it.each([
        {
            nodes: [],
            expected: []
        },
        {
            nodes: [ 5 ],
            expected: [ 5 ]
        },
        {
            nodes: [ 4, 2, 1, 3, 6, 5, 7 ],
            expected: [ 1, 2, 3, 4, 5, 6, 7 ]
        },
        {
            nodes: [ 20, 22, 8, 4, 12, 10, 14 ],
            expected: [ 4, 8, 10, 12, 14, 20, 22 ]
        },
        {
            nodes: [ 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ],
            expected: [ 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90 ]
        },
    ])('should traverse the tree inorder and return the numbers in the sequence $expected', ({ nodes, expected }) => {
        const bst = new BST(nodes);

        expect(bst.inorder().map(node => node.data)).toStrictEqual(expected);
    });
});

describe('preorder', () => {
    it.each([
        {
            nodes: [],
            expected: []
        },
        {
            nodes: [ 5 ],
            expected: [ 5 ]
        },
        {
            nodes: [ 4, 2, 1, 3, 6, 5, 7 ],
            expected: [ 4, 2, 1, 3, 6, 5, 7 ]
        },
        {
            nodes: [ 20, 22, 8, 4, 12, 10, 14 ],
            expected: [ 20, 8, 4, 12, 10, 14, 22 ]
        },
        {
            nodes: [ 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ],
            expected: [ 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ]
        },
    ])('should traverse the tree inorder and return the numbers in the sequence $expected', ({ nodes, expected }) => {
        const bst = new BST(nodes);

        expect(bst.preorder().map(node => node.data)).toStrictEqual(expected);
    });
});

describe('postorder', () => {
    it.each([
        {
            nodes: [],
            expected: []
        },
        {
            nodes: [ 5 ],
            expected: [ 5 ]
        },
        {
            nodes: [ 4, 2, 1, 3, 6, 5, 7 ],
            expected: [ 1, 3, 2, 5, 7, 6, 4 ]
        },
        {
            nodes: [ 20, 22, 8, 4, 12, 10, 14 ],
            expected: [ 4, 10, 14, 12, 8, 22, 20 ]
        },
        {
            nodes: [ 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ],
            expected: [ 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25 ]
        },
    ])('should traverse the tree inorder and return the numbers in the sequence $expected', ({ nodes, expected }) => {
        const bst = new BST(nodes);

        expect(bst.postorder().map(node => node.data)).toStrictEqual(expected);
    });
});

describe('traverse', () => {
    it('should traverse the tree using the specified order', () => {
        const bst = new BST([ 4, 2, 1, 3, 6, 5, 7 ]);

        expect(bst.traverse().map(node => node.data)).toStrictEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
        expect(bst.traverse('inorder').map(node => node.data)).toStrictEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
        expect(bst.traverse('preorder').map(node => node.data)).toStrictEqual([ 4, 2, 1, 3, 6, 5, 7 ]);
        expect(bst.traverse('postorder').map(node => node.data)).toStrictEqual([ 1, 3, 2, 5, 7, 6, 4 ]);
    });
});
