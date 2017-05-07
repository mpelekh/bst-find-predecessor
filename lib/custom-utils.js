const BinaryTreeNode = require('./binary-tree-node');

module.exports.addTo = addTo;
module.exports.findPredecessor = findPredecessor;

/*
* Function: addTo
*
* Add into a binary tree.
*
* Parameters:
*     node - the root node
*     value - the value to add into a binary tree.
*
* Returns: undefined.
*
*/
function addTo(node, value) {
    if (value <= node.value) {
        node.left === null
            ? node.left = new BinaryTreeNode(value)
            : addTo(node.left, value)
    } else {
        node.right === null
            ? node.right = new BinaryTreeNode(value)
            : addTo(node.right, value)
    }
}

/*
* Function: findPredecessor
*
* Find the value that preceeds the given value.
*
* Parameters:
*		node - the root node
*		value - the value to find the predecessor for
*
* Returns: the value that preceeds the given value.
*
*/
function findPredecessor(node, value) {
    let currentNode = node;
    let resultValue = null;

    while (currentNode) {
        if (value > currentNode.value) {
            resultValue = currentNode.value;
            currentNode = currentNode.right;
        } else {
            currentNode = currentNode.left;
        }
    }

    return resultValue;
}