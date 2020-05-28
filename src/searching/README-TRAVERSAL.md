# Tree Traversal

### In-Order

   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   2. Visit the root.
   3. Traverse the right subtree, i.e., call Inorder(right-subtree)

### Pre-Order

   1. Visit the root.
   2. Traverse the left subtree, i.e., call Inorder(left-subtree)
   3. Traverse the right subtree, i.e., call Inorder(right-subtree)

   Use Pre-Order to create a copy of a tree

### Post-Order

   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   2. Traverse the right subtree, i.e., call Inorder(right-subtree)
   3. Visit the root.

   Use Post-Order when you want to delete a tree.