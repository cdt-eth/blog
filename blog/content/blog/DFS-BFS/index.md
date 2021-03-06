---
path: DFS & BFS
date: "2021-03-05T23:47:37.121Z"
title: DFS & BFS
description: Leetcode problems about Depth-First Search & Breadth-First Search.
---

Leetcode problems about Depth-First Search & Breadth-First Search.

#### [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

`I: grid = [ ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"] ]`<br/>
`O: 1`<br/>

- We check our base case if no grid exists
- Initialize our island `count` to 0 to keep track
- Double for loop to iterate over our `n`x`m` grid
  - Check if a grid item is a `1`
  - If it is we call our depth-first search helper function - `dfs()`
    - We pass it our `grid` and our `i` and `j` position
    - Then we increase our `count` by 1 because we encournted an "island"
- Within the `dfs()` function we've passed it out `grid`, `i`, and `j` so we:
  - Check if we're within range our our grid, and that we're searching for other islands (1's) with an if statement:
    - _`if i<0 or j<0 or i>=len(grid) or j>=len(grid[0]) or grid[i][j]!='1':`_
  - After that check we set the current grid item from `1` to `0`
  - Then we recursively called our `dfs()` function in all 4 directions:
    - right = `grid,i+1,j`
    - left = `grid,i-1,j`
    - up = `grid,i,j+1`
    - down = `grid,i,j-1`

```python
def numIslands(self, grid: List[List[str]]) -> int:
  if not grid:
      return 0

  count=0

  for i in range(len(grid)):
    for j in range(len(grid[0])):
      if grid[i][j] == '1':
        self.dfs(grid,i,j)
        count += 1
  return count


def dfs(self, grid,i,j):
  if i<0 or j<0 or i>=len(grid) or j>=len(grid[0]) or grid[i][j]!='1':
    return
  grid[i][j] = '0'
  self.dfs(grid,i+1,j)
  self.dfs(grid,i-1,j)
  self.dfs(grid,i,j+1)
  self.dfs(grid,i,j-1)
```

|           | Big O                      | Why                                                         |
| --------- | -------------------------- | ----------------------------------------------------------- |
| **Time**  | O(<em>n</em> x <em>m</em>) | Double for loop over our (<em>n</em> x <em>m</em>) matrix   |
| **Space** | O(<em>n</em> x <em>m</em>) | We must traverse an entire (<em>n</em> x <em>m</em>) matrix |

#### [51. N-Queens](https://leetcode.com/problems/n-queens/)

`I: N = 4`<br/>
`O: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`<br/>

- We check our base case if no grid exists

```python

```

|           | Big O                      | Why                                                         |
| --------- | -------------------------- | ----------------------------------------------------------- |
| **Time**  | O(<em>n</em> x <em>m</em>) | Double for loop over our (<em>n</em> x <em>m</em>) matrix   |
| **Space** | O(<em>n</em> x <em>m</em>) | We must traverse an entire (<em>n</em> x <em>m</em>) matrix |
