type Nullable<T> = T | null;

type TraversalOrder = 'inorder' | 'preorder' | 'postorder';

export class Node {
    /**
     * Gets the value of the node.
     */
    data: number;

    /**
     * Gets the left child of the node or null.
     */
    left: Nullable<Node>;

    /**
     * Gets the right child of the node or null.
     */
    right: Nullable<Node>;

    /**
     * Initializes a new Node.
     *
     * @param data
     */
    constructor(data: number) {
        this.data = data;
        this.left = this.right = null;
    }
}

export class BST {
    /**
     * Gets the root of the tree or null if not set.
     */
    root: Nullable<Node>;

    /**
     * Gets the total amount of nodes in the tree.
     */
    size: number;

    /**
     * Initializes a new Tree.
     * Optionally takes a collection of numbers to add to the tree.
     *
     * @param collection
     */
    constructor(collection?: number[]) {
        this.root = null;
        this.size = 0;

        if (collection) {
            this.add(...collection);
        }
    }

    /**
     * Adds a new node to the tree with the specified value.
     *
     * @param values
     */
    add(...values: number[]) {
        for (const value of values) {
            this._addNode(value);
        }

        return this;
    }

    _addNode(value: number) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            this.size++;
            return;
        }

        let previousNode: Nullable<Node> = null;
        let tempNode: Nullable<Node> = this.root;

        while (tempNode !== null) {
            // If a node with the same value already exists, then don't add it
            if (tempNode.data === value) {
                return;
            }

            previousNode = tempNode;
            tempNode = value > tempNode.data ? tempNode.right : tempNode.left;
        }

        if (previousNode) {
            this.size++;

            if (previousNode.data > value) {
                previousNode.left = node;
                return;
            }

            previousNode.right = node;
        }
    }

    /**
     * Indicates whether a node with the specified value exists.
     * Optionally takes a `root` node from which to find the value.
     *
     * @param value
     * @param root
     */
    has(value: number, root: Nullable<Node> = null): boolean {
        let current = root ?? this.root;

        while (current) {
            if (value === current.data) {
                return true;
            }

            current = value > current.data ? current.right : current.left;
        }

        return false;
    }

    /**
     * Finds the maximum value in the tree.
     *
     * @param root
     */
    max(root: Nullable<Node> = null): number {
        let current = root ?? this.root;

        while (current?.right) {
            current = current.right;
        }

        return current?.data ?? 0;
    }

    /**
     * Finds the mininum value in the tree.
     *
     * @param root
     */
    min(root: Nullable<Node> = null): number {
        let current = root ?? this.root;

        while (current?.left) {
            current = current.left;
        }

        return current?.data ?? 0;
    }

    /**
     * Finds a node with the specified value.
     *
     * @param value
     */
    find(value: number): Nullable<Node> {
        let current = this.root;

        while (current?.data !== value) {
            if (current === null) {
                return null;
            }

            current = value > current.data ? current.right : current.left;
        }

        return current;
    }

    /**
     * Indicates whether a node with the given value has no sub-children (i.e is a leaf).
     *
     * @param value
     */
    isLeaf(value: number): boolean {
        const node = this.find(value);

        return !node?.right && !node?.left;
    }

    /**
     * Removes a node from the tree.
     *
     * @param values
     */
    remove(...values: number[]) {
        for (const value of values) {
            const root = JSON.stringify(this.root);
            this.root = this._removeNode(this.root, value);

            // If root is different from this.root, then a node was removed.
            if (root !== JSON.stringify(this.root)) {
                this.size--;
            }
        }

        return this;
    }

    _removeNode(root: Nullable<Node>, value: number): Nullable<Node> {
        if (!root) {
            return root;
        }

        if (value > root.data) {
            root.right = this._removeNode(root.right, value);
            return root;
        }
        if (value < root.data) {
            root.left = this._removeNode(root.left, value);
            return root;
        }

        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        }

        let successorParent = root;
        let successor = root.right;

        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }

        if (successorParent !== root) {
            successorParent.left = successor.right;
        } else {
            successorParent.right = successor.right;
        }

        root.data = successor.data;

        return root;
    }

    /**
     * Gets the height of the tree.
     * This functions is an alias for the `height` function.
     *
     * @param root
     */
    depth(root: Nullable<Node> = this.root): number {
        return this.height(root);
    }

    /**
     * Gets the height of the tree.
     *
     * @param root
     */
    height(root: Nullable<Node> = this.root): number {
        if (!root) {
            return -1;
        }

        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    /**
     * Indicates whether `root` is balanced.
     */
    isBalanced(root: Nullable<Node> = this.root): boolean {
        const isHeightBalanced = (node: Nullable<Node>): number => {
            if (!node) {
                return 0;
            }

            const leftHeight = isHeightBalanced(node.left);
            if (leftHeight === -1) {
                return -1;
            }

            const rightHeight = isHeightBalanced(node.right);
            if (rightHeight === -1) {
                return -1;
            }

            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            return Math.max(leftHeight, rightHeight) + 1;
        };

        return isHeightBalanced(root) > -1;
    }

    /**
     * Traverses the tree using the specified `order`.
     *
     * @param order The order type.
     * @param root The root node.
     */
    *traverse(order: TraversalOrder = 'inorder', root: Nullable<Node> = this.root): Generator<Node> {
        switch (order) {
            case 'preorder':
                yield* this.preorder(root);
                break;

            case 'postorder':
                yield* this.postorder(root);
                break;

            case 'inorder':
            default:
                yield* this.inorder(root);
        }
    }

    /**
     * Traverses the tree from the left subtree to the `root`, then to the right subtree.
     *
     * @param root The root node.
     */
    *inorder(root: Nullable<Node> = this.root): Generator<Node> {
        if (!root) {
            return;
        }

        const stack = [];
        let node: Nullable<Node> = root;

        while (node || stack.length) {
            // Keeps pushing the leftmost node until it's null
            if (node) {
                stack.push(node);
                node = node.left;
                continue;
            }

            // If node is null, then pops the last added node from the stack
            node = stack.pop() ?? null;

            if (node) {
                // Yields the last node and then sets the node equal to its right child
                yield node;
                node = node?.right ?? null;
            }
        }
    }

    /**
     * Traverses the tree from the `root` to the left subtree, then to the right subtree.
     *
     * @param root The root node.
     */
    *preorder(root: Nullable<Node> = this.root): Generator<Node> {
        if (!root) {
            return;
        }

        const stack = [ root ];
        let node;

        // Removes the last node from the array and yields it until the stack is empty.
        while ((node = stack.pop()) !== undefined) {
            if (node) {
                yield node;

                // Pushes the right and left children to the stack.
                if (node.right) {
                    stack.push(node.right);
                }

                // It's crucial to add the left node after the right one
                // because we want to yield them first
                if (node.left) {
                    stack.push(node.left);
                }
            }
        }
    }

    /**
     * Traverses the tree from the left subtree to the right subtree, then to the root.
     *
     * @param root The root node.
     */
    *postorder(root: Nullable<Node> = this.root): Generator<Node> {
        if (!root) {
            return;
        }

        const stack = [];
        let previousNode: Nullable<Node> = null;

        while (root || stack.length) {
            // Keeps pushing the leftmost node until it's null
            if (root) {
                stack.push(root);
                root = root.left;
                continue;
            }

            root = stack.at(-1) ?? null;

            // If root has no right child or its right child is the previous node,
            // then the right subtree was already traversed
            if (root && (!root?.right || root.right === previousNode)) {
                yield root;

                previousNode = stack.pop() ?? null;
                root = null;
                continue;
            }

            root = root?.right ?? null;
        }
    }
}

export default BST;
