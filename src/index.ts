export class Node {
    data: number;
    left: Nullable<Node>;
    right: Nullable<Node>;

    constructor(data: number, left: Nullable<Node> = null, right: Nullable<Node> = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {
    root: Nullable<Node>;

    constructor() {
        this.root = null;
    }

    add(value: number) {
        const node = this.root;

        if (!node) {
            this.root = new Node(value);
            return;
        }

        const search = (node: Node): void => {
            if (value > node.data) {
                if (node.right === null) {
                    node.right = new Node(value);
                    return;
                }

                return search(node.right);
            }

            if (node.left === null) {
                node.left = new Node(value);
                return;
            }

            return search(node.left);
        };

        return search(node);
    }

    has(value: number) {
        let current = this.root;

        while(current) {
            if (value === current.data) {
                return true;
            }

            current = value > current.data ? current.right : current.left;
        }

        return false;
    }

    max() {
        let current = this.root;

        while (current?.right) {
            current = current.right;
        }

        return current?.data;
    }

    min() {
        let current = this.root;

        while (current?.left) {
            current = current.left;
        }

        return current?.data;
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
}
