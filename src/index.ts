export class Node {
    data: Nullable<number>;
    left: Nullable<Node>;
    right: Nullable<Node>;

    constructor(data: Nullable<number>, left: Nullable<Node> = null, right: Nullable<Node> = null) {
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
        if (!this.root) {
            this.root = new Node(value);
            return this.root;
        }
    }
}
