---
path: Trees
date: "2021-03-01T23:47:37.121Z"
title: Trees
description: Leetcode problems using tree data structures.
---

Leetcode problems using tree data structures.

#### 100. Same Tree

`I = p = [1,2,3], q = [1,2,3]`<br/>
`O = True`<br/>

- We check our base cases:
  - if there's no `p` node _*and*_ there's not `q` node it's `True`
    - they're **both** _equally_ empty and therfore technically the same
  - if there's no `p` node _*OR*_ there's not `q` node it's `False`
  - then we check the value of `p`'s root and `q`'s root, if the values aren't the same it's `False`
- After those 3 checks, we recursively call the function to run these 3 checks on again on:
  - `p`'s next left node against `q`'s next left node
  - `p`'s next right node against `q`'s next right node
- This will end when we run out of nodes and we'll end with either a `True` or `False` value

```python
def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
  if not p and not q:
      return True
  if not q or not p:
      return False
  if p.val != q.val:
      return False
  return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```

|       | Big O                              | Why                                     |
| ----- | ---------------------------------- | --------------------------------------- |
| Time  | O(<em>n</em>)                      | we visit each node once                 |
| Space | O(log(<em>n</em>)) / O(<em>n</em>) | best case of balanced tree / worst case |

#### 101. Symmetric Tree

`I = [1,2,2,3,4,4,3]`<br/>
`O = True`<br/>

- We use a helper function and pass the first left & right node to it to check our base cases:
  - if there's no `leftNode` node _*and*_ there's not `rightNode` node it's `True`
  - if there's no `leftNode` node _*OR*_ there's not `rightNode` node it's `False`
- After those checks, we recursively call this helper function to run these checks again on:
  - `leftNode`'s **_left_** node against `rightNode`'s _**right**_ node
  - `leftNode`'s **_right_** node against `rightNode`'s _**left**_ node
  - but we verify first that the next node's values are the same
- This will end when we run out of nodes and we'll end with either a `True` or `False` value

```python
def treeHelper(leftNode, rightNode):
    if leftNode is None and rightNode is None:
        return True
    if leftNode is None or rightNode is None:
        return False
    return (leftNode.val == rightNode.val) and
    treeHelper(leftNode.left, rightNode.right) and
    treeHelper(leftNode.right, rightNode.left)


def isSymmetric(self, root: TreeNode) -> bool:
  return treeIsSymmetric(root.left, root.right)
```

|       | Big O         | Why                                     |
| ----- | ------------- | --------------------------------------- |
| Time  | O(<em>n</em>) | we traverse the tree only once          |
| Space | O(<em>n</em>) | recursive method bound by tree's height |

#### 226. Invert Binary Tree

`I = [4,2,7,1,3,6,9]`<br/>
`O = [4,7,2,9,6,3,1]`<br/>

- We check if there's a root to begin with
- Next we swap the left node with the right node
- Then we recursively call the function with each consecutive left & right node
  - invertTree(root.left)
  - invertTree(root.right)
- return the root

```python
def invertTree(self, root: TreeNode) -> TreeNode:
  if root:
      root.left,root.right = root.right, root.left
      invertTree(root.left)
      invertTree(root.right)
  return root
```

|       | Big O         | Why                                     |
| ----- | ------------- | --------------------------------------- |
| Time  | O(<em>n</em>) | we traverse each node only once         |
| Space | O(<em>h</em>) | recursive call stack for height of tree |
