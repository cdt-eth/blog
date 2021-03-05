---
path: Trees
date: "2021-03-01T23:47:37.121Z"
title: Trees
description: Leetcode problems using tree data structures.
---

Leetcode problems using tree data structures.

#### 94. Binary Tree Inorder Traversal - Left, Node, Right

`I: root = [1,null,2,3]`<br/>
`O: [1,3,2]`<br/>

- We create an empty results array (`arr`)
- We create a stack an append the `root`
- While our stack exists we take `root` and assign it to our `node` variable for assessing
- Check if node exists
- Check is it's an instance of our TreeNode sub-class
- Then we append our `node`'s right child, the current `node`'s value, and then the `node`'s left child
  - we add to the stack in the opposite way that the traversal method is assessed
  - when we pop the nodes off the stack they'll then be in order, so must be added in reversed
  - LIFO = Last In, First Out
- Else case once we reach a null left
  - we will add the node, previously added to our stack, and then append to our output array (`res`)
- Return our `res` array

```python
def inorderTraversal(self, root: TreeNode) -> List[int]:
  res = []
  stack = [root]
  while stack:
    node = stack.pop()
    if node:
      if isinstance(node, TreeNode):
        stack.append(node.right)
        stack.append(node.val)
        stack.append(node.left)
      else:
        res.append(node)
  return res
```

|           | Big O         | Why                     |
| --------- | ------------- | ----------------------- |
| **Time**  | O(<em>n</em>) | we visit each node once |
| **Space** | O(<em>h</em>) | bound to height of tree |

#### 100. Same Tree

`I: p = [1,2,3], q = [1,2,3]`<br/>
`O: True`<br/>

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

|           | Big O                              | Why                                     |
| --------- | ---------------------------------- | --------------------------------------- |
| **Time**  | O(<em>n</em>)                      | we visit each node once                 |
| **Space** | O(log(<em>n</em>)) / O(<em>n</em>) | best case of balanced tree / worst case |

#### 101. Symmetric Tree

`I: [1,2,2,3,4,4,3]`<br/>
`O: True`<br/>

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

|           | Big O         | Why                                     |
| --------- | ------------- | --------------------------------------- |
| **Time**  | O(<em>n</em>) | we traverse the tree only once          |
| **Space** | O(<em>n</em>) | recursive method bound by tree's height |

#### 102. Binary Tree Level Order Traversal - (Breadth First Search)

`I: root = [3,9,20,null,null,15,7]`<br/>
`O: [[3],[9,20],[15,7]]`<br/>

- Initialize an empty `result` array for the final result
- Create a queue from Python's `Colletions` data structure containter
- Initialize the queue by addding the root
- Being the while loop, so while the queue is _not_ empty we:
  - Create a `qLen` variable equal to `len(q)` to ensure we iterate 1 level at a time
  - Create an empty `level` array for the current-level node we'll add to it
  - Next we'll iterate over the range of nodes on each level, popping the left once first
  - If there's a node (i.e. not null) we:
    - append that node's value to our `level` array
    - add our left child node and right child node to our queue
  - Then, we check if a `level` even exists in our tree (this accounts for null nodes) before finally appending it to our final `result` array
- Finally, we return our final `result` array

```python
def levelOrder(self, root: TreeNode) -> List[List[int]]:
  res = [] # array for result

  q = collections.deque() # import queue (double-ended queue)
  q.append(root) # add root to queue

  while q: # while queue is non-empty
      qLen = len(q) # ensures we iterate 1 level at a time
      level = [] # with nodes from that level, we add to their own list
      for i in range(qLen): # we add the items from all our lists to the result list for totla
          node = q.popleft() # First In First Out
          if node: # check that its not null
              level.append(node.val) # add node to our curr-level array
              q.append(node.left) # add its children to be added next
              q.append(node.right) # add its children to be added next
      if level: # accounts for null nodes
          res.append(level) # after we've processed all nodes on level, add our level results to our result array
  return res
```

|           | Big O         | Why                                                                                  |
| --------- | ------------- | ------------------------------------------------------------------------------------ |
| **Time**  | O(<em>n</em>) | we visit every node once                                                             |
| **Space** | O(<em>n</em>) | queue at any given time could have up to n/2 elements, which rounds to O(<em>n</em>) |

#### 108. Convert Sorted Array to Binary Search Tree

`I: nums = [-10,-3,0,5,9]`<br/>
`O: [0,-3,9,-10,null,5]`<br/>

- We check if the array `nums` exists
- Then we set a midpoint by diving the length of our array and diving it by 2
  - we use `//` in Python because we want an integer (no decimal points)
- Now our `node` is set to this `mid` tree node
- We recursively call our function with the left child being everything to the left of the `mid` node
  - and the right being everything to the right of the `mid`, starting at 1 node after `mid`, to not include it
- Return `node`

```python
def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
    if not nums:
        return None
    mid = len(nums)//2
    node = TreeNode(nums[mid])
    node.left = self.sortedArrayToBST(nums[:mid])
    node.right = self.sortedArrayToBST(nums[mid+1:])
    return node
```

|           | Big O                        | Why                                                                                                                             |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Time**  | O(<em>n</em>)                | we visit each node once                                                                                                         |
| **Space** | O(<em>n</em>log(<em>n</em>)) | recursion is O(<em>n</em>) but array-splitting is O(log(<em>n</em>)) so total _recursion tree_ is <em>n</em> \* log(<em>n</em>) |

#### 111. Minimum Depth of Binary Tree

`I: root = [3,9,20,null,null,15,7]`<br/>
`O: 2`<br/>

- We check if there's a root to begin with
- Next we check if we're dealing with a [skewed tree](https://www.geeksforgeeks.org/skewed-binary-tree/)
  - if we are then we return the _**max**_ depth of this skewed tree
  - we only have one "wing" so the min is the max (nothing to compare it to)
- if not a skewed tree (i.e. a regular tree), then we add 1 on each function call and recursively call the function passing the next left and right node to it.
- we return that number

```python
def minDepth(self, root: TreeNode) -> int:
    if not root:
        return 0
    if not root.left or not root.right:
        return 1+ max(self.minDepth(root.left), self.minDepth(root.right))
    return 1+ min(self.minDepth(root.left), self.minDepth(root.right))
```

|           | Big O         | Why                                     |
| --------- | ------------- | --------------------------------------- |
| **Time**  | O(<em>n</em>) | we traverse each node only once         |
| **Space** | O(<em>h</em>) | recursive call stack for height of tree |

#### 144. Binary Tree Preorder Traversal - Node, Left, Right

`I: rroot = [1,null,2,3]`<br/>
`O: [1,2,3]`<br/>

- We create an empty results array (`arr`)
- We create a stack an append the `root`
- While our stack exists we take `root` and assign it to our `node` variable for assessing
- Check if node exists
- Check is it's an instance of our TreeNode sub-class
- Then we append our `node`'s right child, the `node`'s left child, and then the current `node`'s value
  - we add to the stack in the opposite way that the traversal method is assessed
  - when we pop the nodes off the stack they'll then be in order, so must be added in reversed
  - LIFO = Last In, First Out
- Else case once we reach a null left
  - we will add the node, previously added to our stack, and then append to our output array (`res`)
- Return our `res` array

```python
def preorderTraversal(self, root: TreeNode) -> List[int]:
  res = []
  stack = [root]
  while stack:
    temp = stack.pop()
    if temp:
      if isinstance(temp, TreeNode):
        stack.append(temp.right)
        stack.append(temp.left)
        stack.append(temp.val)
      else:
        res.append(temp)
  return res
```

|           | Big O         | Why                     |
| --------- | ------------- | ----------------------- |
| **Time**  | O(<em>n</em>) | we visit each node once |
| **Space** | O(<em>h</em>) | bound to height of tree |

#### 145. Binary Tree Postorder Traversal - Left, Right, Node

`I: rroot = [1,null,2,3]`<br/>
`O: [1,2,3]`<br/>

- We create an empty results array (`arr`)
- We create a stack an append the `root`
- While our stack exists we take `root` and assign it to our `node` variable for assessing
- Check if node exists
- Check is it's an instance of our TreeNode sub-class
- Then we append our `node`'s right child, the `node`'s left child, and then the current `node`'s value
  - we add to the stack in the opposite way that the traversal method is assessed
  - when we pop the nodes off the stack they'll then be in order, so must be added in reversed
  - LIFO = Last In, First Out
- Else case once we reach a null left
  - we will add the node, previously added to our stack, and then append to our output array (`res`)
- Return our `res` array

```python
def postorderTraversal(self, root: TreeNode) -> List[int]:
  res = []
  stack = [root]
  while stack:
    temp = stack.pop()
    if temp:
      if isinstance(temp, TreeNode):
        stack.append(temp.val)
        stack.append(temp.right)
        stack.append(temp.left)
      else:
        res.append(temp)
  return res
```

|           | Big O         | Why                     |
| --------- | ------------- | ----------------------- |
| **Time**  | O(<em>n</em>) | we visit each node once |
| **Space** | O(<em>h</em>) | bound to height of tree |

#### 226. Invert Binary Tree

`I: [4,2,7,1,3,6,9]`<br/>
`O: [4,7,2,9,6,3,1]`<br/>

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

|           | Big O         | Why                                     |
| --------- | ------------- | --------------------------------------- |
| **Time**  | O(<em>n</em>) | we traverse each node only once         |
| **Space** | O(<em>h</em>) | recursive call stack for height of tree |

<!-- #### 572. Subtree of Another Tree

`I: [3,4,5,1,2]`<br/>
`O: True`<br/>

- We're told the trees are non-empty so we don't need to check if there's a root
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
|  **Time**   | O(<em>n</em>) | we traverse each node only once         |
|  **Space**  | O(<em>h</em>) | recursive call stack for height of tree | -->

#### 637. Average Levels of Binary Tree

`I: [4,2,7,1,3,6,9]`<br/>
`O: [4,7,2,9,6,3,1]`<br/>

- Initialize an empty `result` array for the final result
- Create a queue from Python's `Colletions` data structure containter
- Initialize the queue by addding the root
- Being the while loop, so while the queue is _not_ empty we:
  - Create a `qLen` variable equal to `len(q)` to ensure we iterate 1 level at a time
  - Create an empty `level` array for the current-level node we'll add to it
  - Next we'll iterate over the range of nodes on each level, popping the left once first
  - If there's a node (i.e. not null) we:
    - append that node's value to our `level` array
    - add our left child node and right child node to our queue
  - Then, we check if a `level` even exists in our tree (this accounts for null nodes) before finally appending the `level`'s average (sum of list divided by length of list) to our final `result` array
- Finally, we return our final `result` array

```python
def averageOfLevels(self, root: TreeNode) -> List[float]:
    res = []
    q = collections.deque()
    q.append(root)

    while q:
        qLen = len(q)
        level = []
        for i in range(qLen):
            node = q.popleft()
            if node:
                level.append(node.val)
                q.append(node.left)
                q.append(node.right)
        if level:
            res.append(sum(level)/len(level))
    return res
```

|           | Big O         | Why                                                                                  |
| --------- | ------------- | ------------------------------------------------------------------------------------ |
| **Time**  | O(<em>n</em>) | we visit every node once                                                             |
| **Space** | O(<em>n</em>) | queue at any given time could have up to n/2 elements, which rounds to O(<em>n</em>) |
