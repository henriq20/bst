type Nullable<T> = T | null;

export class Node {
    data: number;
    left: Nullable<Node>;
    right: Nullable<Node>;
}

export class BST {
    root: Nullable<Node>;
    size: number;

    /**
     * Adds a new node to the tree with the specified value.
     *
     * @param values
     */
    add(...values: number[]): void;

    /**
     * Indicates whether a node exists with the specified value.
     * Optionally takes a `root` node from which to find the value.
     *
     * @param value
     * @param root
     */
    has(value: number, root: Nullable<Node>): boolean;

    /**
     * Finds the maximum value in the tree.
     *
     * @param root
     */
    max(root: Nullable<Node>): number;

    /**
     * Finds the mininum value in the tree.
     *
     * @param root
     */
    min(root: Nullable<Node>): number;

    /**
     * Finds a node with the specified value.
     *
     * @param value
     */
    find(value: number): Nullable<Node>;

    /**
     * Removes a node from the tree.
     *
     * @param values
     */
    remove(...values: number[]): void;

    /**
     * Indicates whether a node with the given value has no sub-children (i.e is a leaf).
     *
     * @param value
     */
    isLeaf(value: number): boolean;
}
