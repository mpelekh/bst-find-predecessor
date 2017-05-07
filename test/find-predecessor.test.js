const assert = require('assert');
const BinarySearchTree = require('../lib/binary-search-tree');

const initialValues = [11, 3, 54, 6, 42, 95, 2, 45, 24, 23, 34];

const bst = new BinarySearchTree();

initialValues.forEach(item => bst.add(item));

assert(bst.findPredecessor(45) === 42, generateStringForError(45, 42));
assert(bst.findPredecessor(100) === 95, generateStringForError(100, 95));
assert(bst.findPredecessor(12) === 11, generateStringForError(12, 11));
assert(bst.findPredecessor(22) === 11, generateStringForError(22, 11));
assert(bst.findPredecessor(3) === 2, generateStringForError(3, 2));

console.log('Tests findPredecessor() passed');

function generateStringForError(valuePassed, valueEqualed) {
    return `Error in findPredecessor(): findPredecessor(${valuePassed}) !== ${valueEqualed}`;
}
