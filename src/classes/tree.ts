import { BinaryNode } from './node';
export { BinaryNode };

export class BinarySearchTree {
  public root: BinaryNode;

  constructor() { }

  /**
   * Adds a numerical valued Node to the Binary Search Tree
   *
   * @param value Number to add (as a Node) to the Binary Search Tree
   */
  public add(value: number): void {
    if (!this.root) {
      this.root = new BinaryNode(value);
      return;
    }

    let current = this.root;

    while (true) {
      // check for right
      if (value > current.value) {
        // add right
        if (!current.right) { current.right = new BinaryNode(value); break; }
        current = current.right;

        // check for left 
      } else if (value < current.value) {
        // add left
        if (!current.left) { current.left = new BinaryNode(value); break; }
        current = current.left;
      } else {
        // if it's the same ignore
        break;
      }
    }
  }

  /**
   * Determines if the Binary Search Tree holds a Node with a given value.
   *
   * @param value Number to look for in the Binary Search Tree
   * 
   * @returns True if the value exists, false if it does not.
   */
  public contains(value: number): boolean {
    let current = this.root;

    while (current) {
      if (current.value == value) {
        return true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

/**
 * Visual representation of the map below being generated
 *
 *           1
 *        /    \
 *       2       3
 *       \     /  \
 *        4   /     \
 *         \ 5 - - - 6
 * 
 */
const mn1 = new BinaryNode(1)
const mn2 = new BinaryNode(2)
const mn3 = new BinaryNode(3)
const mn4 = new BinaryNode(4)
const mn5 = new BinaryNode(5)
const mn6 = new BinaryNode(6)

mn1.left = mn2;
mn1.right = mn3;
mn2.right = mn4;
mn3.left = mn5;
mn3.right = mn6;
mn4.right = mn5;
mn5.right = mn6;

export const BASIC_MAP = mn1;

/**
 * Visual representation of the tree below being generated
 *
 *          1
 *        /   \
 *       2     3
 *      / \   /  \
 *     4   5 6    7
 *    / \ 
 *   8   9
 */
export const ORDERED_TREE = new BinaryNode(1,
  new BinaryNode(2,
    new BinaryNode(4,
      new BinaryNode(8),
      new BinaryNode(9),
    ),
    new BinaryNode(5),
  ),
  new BinaryNode(3,
    new BinaryNode(6),
    new BinaryNode(7),
  ),
)