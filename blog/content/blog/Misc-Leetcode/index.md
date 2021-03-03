---
path: Misc Leetcode
date: "2021-03-02T23:47:37.121Z"
title: Misc. Leetcode
description: Leetcode problems using non-tradtional algorithms.
---

Leetcode problems using non-tradtional algorithms.

#### 53. Maximum Subarray (Kadane's Algorithm)

`I = [-2,1,-3,4,-1,2,1,-5,4]`<br/>
`O = 6`<br/>

- We initialize a `best` and a `curr` variable
  - `best` tracks our max subarray sum (the goal)
    - we set it to something BIG negative number (`-inf`) as a base to account for an array of all negative numbers
  - `curr` is our running total we're checking again our `best` number
- Next, we iterate over the array and set:
  - `curr` equal to the max of the current number `n` we're assessing of the `curr` plus `n`
    - we're deciding between whether we're going to _extend_ our window or starting a new window at this current index
      - said another way, if `curr` plus the next `n` is greater than said `n` itself we extended
      - if not, that `n` is our new starting point
  - then we'll look at the `curr` sum that comes out of that assessment and compare it against our running `best`, the max between those two is returned
- once we've iterated through the entire array, we return the last `best`

```python
def maxSubArray(self, nums: List[int]) -> int:

    best = float('-inf')
    curr = 0

    for n in nums:
        curr = max(n,curr+n)
        best = max(best,curr)
    return best
```

|       | Big O         | Why                                                                    |
| ----- | ------------- | ---------------------------------------------------------------------- |
| Time  | O(<em>n</em>) | we visit every number once, will grow as <em>n</em> grows              |
| Space | O(<em>1</em>) | space is independent of <em>n</em>, doesn't scale at bigger <em>n</em> |
