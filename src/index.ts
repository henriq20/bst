type Nullable<T> = T | null;

export class Node {
    data: number;
    left: Nullable<Node>;
    right: Nullable<Node>;

    constructor(data: number) {
        this.data = data;
        this.left = this.right = null;
    }
}

export class BST {
    root: Nullable<Node>;
    size: number;

    constructor(collection?: number[]) {
        this.root = null;
        this.size = 0;

        if (collection) {
            this.add(...collection);
        }
    }

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

    max(root: Nullable<Node> = null): number {
        let current = root ?? this.root;

        while (current?.right) {
            current = current.right;
        }

        return current?.data ?? 0;
    }

    min(root: Nullable<Node> = null): number {
        let current = root ?? this.root;

        while (current?.left) {
            current = current.left;
        }

        return current?.data ?? 0;
    }

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

    isLeaf(value: number): boolean {
        const node = this.find(value);

        return !node?.right && !node?.left;
    }

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

    depth(root: Nullable<Node> = this.root): number {
        return this.height(root);
    }

    height(root: Nullable<Node> = this.root): number {
        if (!root) {
            return -1;
        }

        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

}
