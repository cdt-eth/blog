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

#### 268. Missing Number

`I = [3,0,1]`<br/>
`O = 2`<br/>

- Create a dictionary to store every item in our given `nums` array
  - we'll set the `key`/`value` pairs to the same passed number
- Next we'll iterate of the length of the `nums` array
  - we add 1 because we're _including_ that last `i` as well
    - "it's inclusive of 0 to `n`"
- In each loop, we check if each `i` is contained within our dictionary (`d`)
  - if so, we continue
  - if not, that's our missing number and we return it

```python
def missingNumber(self, nums: List[int]) -> int:
  d = {i:i for i in nums}

  for i in range(len(nums)+1):
      if i in d:
          continue
      else:
          return i
```

|       | Big O         | Why                                                                          |
| ----- | ------------- | ---------------------------------------------------------------------------- |
| Time  | O(<em>n</em>) | We make one pass over the range <em>n</em> of our array                      |
| Space | O(<em>n</em>) | We create a new dictionary for it's legnth and iterate over our entire array |

#### Version 2 - Gauss's Sum (constant space)

`I = [3,0,1]`<br/>
`O = 2`<br/>

- We will assess two variables:
  - `exp`: is our _expected_ sum of all the numbers in that range, we'll use the [Gauss's Sum](https://math.stackexchange.com/questions/1917510/gauss-formula-to-add-number-of-sequence-for-arbitrary-range)
    - this will give us the sum of all the consecutive numbers in that array's length
  - `act`: is the _actual_ sum of our `nums` array
- Take the difference between our exepected sum and our actual sum to give us the difference
  - that difference **_IS_** the `n` we're missing

```python
def missingNumber(self, nums: List[int]) -> int:
  n = len(nums)
  exp = int(n * (n+1) / 2)
  act = sum(nums)

  return (exp-act)
```

|       | Big O         | Why                                                              |
| ----- | ------------- | ---------------------------------------------------------------- |
| Time  | O(<em>n</em>) | we have to compute ever `n` items, will grow as `n` grows        |
| Space | O(<em>1</em>) | we're only performing computations, not iterating over `n` items |
