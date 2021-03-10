---
path: Backtracking
date: "2021-03-05T23:47:38.121Z"
title: Backtracking
description: Leetcode problems about Backtracking.
---

Leetcode problems about Backtracking.

#### [51. N-Queens](https://leetcode.com/problems/n-queens/)

`I: N = 4`<br/>
`O: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`<br/>

- We check our base case if no grid exists

```python
def solveNQueens(self, n: int) -> List[List[str]]:
  def DFS(queens, xy_dif, xy_sum):
    p = len(queens)
    if p==n:
      result.append(queens)
      return None
    for q in range(n):
      if q not in queens and p-q not in xy_dif and p+q not in xy_sum:
        DFS(queens+[q], xy_dif+[p-q], xy_sum+[p+q])
  result = []
  DFS([],[],[])
  return [ ["."*i + "Q" + "."*(n-i-1) for i in sol] for sol in result]
```

|           | Big O                      | Why                                                         |
| --------- | -------------------------- | ----------------------------------------------------------- |
| **Time**  | O(<em>n</em> x <em>m</em>) | Double for loop over our (<em>n</em> x <em>m</em>) matrix   |
| **Space** | O(<em>n</em> x <em>m</em>) | We must traverse an entire (<em>n</em> x <em>m</em>) matrix |
