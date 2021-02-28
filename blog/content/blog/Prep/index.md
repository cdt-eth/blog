---
path: Prep
date: "2021-02-28T23:46:37.121Z"
title: Prep
description: Prep
---

### Overview

Prep.

## Two Pointer

<!-- I solved [`Invert Binary Tree`](https://leetcode.com/problems/invert-binary-tree/). -->

## Hash Tables

#### 1512. Number of Good Pairs

`I = [1,2,3,1,1,3]`<br/>
`O = 4`<br/>

- create dictionary and a `counter` to 0
- loop through list and add frequency count for items in list
- if a number is seen again we'll increase our `counter` and...
- ...

```python
def numIdenticalPairs(self, nums: List[int]) -> int:
        counter = 0
        d = {}

        for n in nums:
            if n in d:
                counter += d[n]
                d[n] +=1
            else:
                d[n] = 1

        return counter
```

#### 961. N-Repeated Element in Size 2N Array

`I = [5,1,5,2,5,3,5,4]`<br/>
`O = 5`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we know only one num is repeated
- search through keys & values and return the _*key*_ that has a _*value*_ greater than 1

```python
def repeatedNTimes(self, A: List[int]) -> int:
    d = {}
    for i in A:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    for k, v in d.items():
        if v > 1:
            return k
```

#### 1365. How Many Numbers Are Smaller Than the Current Number

`I = [8,1,2,2,3]`<br/>
`O = [4, 0, 1, 1, 3]`<br/>

- create dictionary and empty result array
- sort nums and iterate over them
- if we find a unique number, we add it to dictionary (i.e. we skip duplicates)
- the value of that num (key) is i
  - it's 0-based index, the 5th num (key=5) has 4 (value) nums less than it
  - that's why we sorted the array
- dictionary is now `{8: 4, 1: 0, 2: 1, 3: 3}`
- iterate through original, unsorted array
  - append the dictionary's values at array's index to our empty result array

```python
def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
    d = {}
    res = []
    s = sorted(nums)
    for i in range(len(s)):
        if s[i] not in d:
            d[s[i]] = i

    res = []
    for i in range(len(nums)):
        res.append(d[nums[i]])

    return res
```
