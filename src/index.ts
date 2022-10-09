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

    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value: number) {
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

    has(value: number): boolean {
        let current = this.root;

        while(current) {
            if (value === current.data) {
                return true;
            }

            current = value > current.data ? current.right : current.left;
        }

        return false;
    }

    max(root?: Node): number {
        let current = root ?? this.root;

        while (current?.right) {
            current = current.right;
        }

        return current?.data ?? 0;
    }

    min(root?: Node): number {
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

    remove(value: number) {
        this.root = this._remove(this.root, value);
    }

    _remove(root: Nullable<Node>, value: number): Nullable<Node> {
        if (!root) {
            return root;
        }

        if (value > root.data) {
            root.right = this._remove(root.right, value);
            return root;
        }
        if (value < root.data) {
            root.left = this._remove(root.left, value);
            return root;
        }

        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }

        root.data = this.min(root.right);
        root.right = this._remove(root.right, root.data);

        return root;
    }
}
