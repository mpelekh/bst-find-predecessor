# Simple implementation binary-search tree with `findPredecessor()` method

Using JavaScript implemented a method `findPredecessor()` that on a Binary Search Tree finds the largest value that is smaller than the value passed as a parameter to the method, without using existing tree implementations found in a library.

Example:
  - Values stored in BST: 11, 3, 54, 6, 42, 95, 2, 45, 24, 23, 34
  - Value passed to method: 45
  - Result: 42

Time complexity in big O notation for `findPredecessor()`:
average - `O(log n)`, worst case - `O(n)`.

## Example Start

```bash
git clone https://github.com/nickpeleh/bst-find-predecessor.git
cd bst-find-predecessor
npm test
```
