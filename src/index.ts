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
        const node = this.root;

        if (!node) {
            this.root = new Node(value);
            this.size++;
            return;
        }

        const search = (node: Node): void => {
            if (value > node.data) {
                if (node.right === null) {
                    node.right = new Node(value);
                    this.size++;
                    return;
                }

                return search(node.right);
            }

            if (node.left === null) {
                node.left = new Node(value);
                this.size++;
                return;
            }

            return search(node.left);
        };

        return search(node);
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

        while(current) {
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
    traverse(order: TraversalOrder = 'inorder', root: Nullable<Node> = this.root): Node[] {
        switch (order) {
            case 'preorder':
                return this.preorder(root);

            case 'postorder':
                return this.postorder(root);

            case 'inorder':
            default:
                return this.inorder(root);
        }
    }

    /**
     * Traverses the tree from the left subtree to the `root`, then to the right subtree.
     *
     * @param root The root node.
     */
    inorder(root: Nullable<Node> = this.root): Node[] {
        if (!root) {
            return [];
        }

        return [ ...this.inorder(root.left), root, ...this.inorder(root.right) ];
    }

    /**
     * Traverses the tree from the `root` to the left subtree, then to the right subtree.
     *
     * @param root The root node.
     */
    preorder(root: Nullable<Node> = this.root): Node[] {
        if (!root) {
            return [];
        }

        return [ root, ...this.preorder(root.left), ...this.preorder(root.right) ];
    }

    /**
     * Traverses the tree from the left subtree to the right subtree, then to the root.
     *
     * @param root The root node.
     */
    postorder(root: Nullable<Node> = this.root): Node[] {
        if (!root) {
            return [];
        }

        return [ ...this.postorder(root.left), ...this.postorder(root.right), root ];
    }
}

export default BST;
