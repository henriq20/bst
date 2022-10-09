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
