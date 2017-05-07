const BinaryTreeNode = require('./binary-tree-node');
const customUtils = require('./custom-utils');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /*
    * Method: add
    *
    * Add into a binary tree.
    *
    * Parameters:
    *     value - the value to add into a binary tree.
    *
    * Returns: undefined.
    *
    */
    add(value) {
        const root = this.root;

        root
            ? customUtils.addTo(root, value)
            : this.root = new BinaryTreeNode(value);
    }

    /*
    * Method: findPredecessor
    *
    * Find the value that preceeds the given value.
    *
    * Parameters:
    *		value - the value to find the predecessor for
    *
    * Returns: the value that preceeds the given value.
    *
    */
    findPredecessor(value) {
        return customUtils.findPredecessor(this.root, value);
    }
}

module.exports = BinarySearchTree;