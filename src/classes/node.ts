export class Node {
  public value: any;

  constructor(value = null) {
    this.value = value;
  }
}

/**
 * Node that is contained in a graph that may have 'n' edges.
 */
export class GraphNode extends Node {
  public edges: Array<GraphNode>;
  public visited: boolean = false;

  constructor(value: string, edges: Array<GraphNode> = []) {
    super(value);
    this.edges = edges || [];
  }
}

/**
 * Node that is contained in a Binary Tree.
 */
export class BinaryNode extends Node {
  public left?: BinaryNode;
  public right?: BinaryNode;

  constructor(value: number, left = null, right = null) {
    super(value);
    this.left = left;
    this.right = right;
  }
}
