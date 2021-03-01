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

- We check our base cases:

  - we know there's a root, so we don't need to check if it's there

  - if there's no `p` node _*and*_ there's not `q` node it's `True`
    - they're **both** _equally_ empty and therfore technically the same
  - if there's no `p` node _*OR*_ there's not `q` node it's `False`
  - then we check the value of `p`'s root and `q`'s root, if the values aren't the same it's `False`

- After those 3 checks, we recursively call the function to run these 3 checks on again on:
  - `p`'s next left node against `q`'s next left node
  - `p`'s next right node against `q`'s next right node
- This will end when we run out of nodes and we'll end with either a `True` or `False` value

```python
def treeIsSymmetric(leftNode, rightNode):
  if not p and not q:
      return True
  if not q or not p:
      return False
  if p.val != q.val:
      return False
  return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```

|       | Big O         | Why                                     |
| ----- | ------------- | --------------------------------------- |
| Time  | O(<em>n</em>) | we traverse the tree only once          |
| Space | O(<em>n</em>) | recursive method bound by tree's height |
