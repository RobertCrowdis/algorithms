import { BinaryNode } from '../classes/node';
import { ORDERED_TREE } from '../classes/tree';

let input = process.argv[2];
switch (input) {
  case 'post-order':
    postOrderTraversal(ORDERED_TREE);
    break;
  case 'pre-order':
    preOrderTraversal(ORDERED_TREE);
    break;
  case 'in-order':
    inOrderTraversal(ORDERED_TREE);
    break;
  default:
    console.log('Could not recognize user input. Defaulting to in-order traversal...')
    inOrderTraversal(ORDERED_TREE);
}


// Function definitions

function inOrderTraversal(tree: BinaryNode, depth: number = 0) {
  if (tree.left) { inOrderTraversal(tree.left, depth + 1); }
  console.log(`Visited Node ${tree.value} at depth ${depth}`);
  if (tree.right) { inOrderTraversal(tree.right, depth + 1); }
}

function preOrderTraversal(tree: BinaryNode, depth: number = 0) {
  console.log(`Visited Node ${tree.value} at depth ${depth}`);
  if (tree.left) { preOrderTraversal(tree.left, depth + 1); }
  if (tree.right) { preOrderTraversal(tree.right, depth + 1); }
}

function postOrderTraversal(tree: BinaryNode, depth: number = 0) {
  if (tree.left) { postOrderTraversal(tree.left, depth + 1); }
  if (tree.right) { postOrderTraversal(tree.right, depth + 1); }
  console.log(`Visited Node ${tree.value} at depth ${depth}`);
}

inOrderTraversal(ORDERED_TREE);