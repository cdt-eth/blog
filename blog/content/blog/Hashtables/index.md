---
path: HashTables
date: "2021-02-28T23:46:37.121Z"
title: Hash Tables & Dictionaries
description: Leetcode problems using hash tables & dictionaries.
---

Leetcode problems using hash tables & dictionaries.

#### 136. Single Number

`I = [4,1,2,1,2]`<br/>
`O = 4`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we check `key:value` pairs
  - if a `value` is equal to 1
  - return that value's `key`

```python
def singleNumber(self, nums: List[int]) -> int:
    d = {}

    for i in nums:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1

    for k, v in d.items():
        if v == 1:
            return k
```

#### 137. Single Number II

`I = [2,2,3,2]`<br/>
`O = 3`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we check `key:value` pairs
  - if a `value` is not equal to 3
  - return that value's `key`

```python
def singleNumber(self, nums: List[int]) -> int:
    d={}

    for i in nums:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1

    for k, v in d.items():
        if v != 3:
            return k
```

#### 202. Happy Number

`I = 19`<br/>
`O = True`<br/>

- create set
- while loop over number
- if we haven't seen this number before we add it
  - if we see it again, we're in a cycle, Happy Number fails
- while loop _while_ `n` _not_ in `seen` set
  - said another way, while we're processing a **_new_** number
  - that number equals the sum of the it's individual squared numbers
- return True if we loop back to the number 1

```python
def isHappy(self, n: int) -> bool:
    seen = set()
    while n not in seen:
        seen.add(n)
        n = sum([int(x) **2 for x in str(n)])
    return n == 1
```

#### 204. Count Primes

`I = 10`<br/>
`O = 4`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we check `key:value` pairs
  - if any `value`

```python
 def countPrimes(self, n: int) -> int:
    if n == 0 or n==1: return 0
    d = {}

    for i in nums:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    for k, v in d.items():

```

#### 217. Contains Duplicate

`I = [1,2,3,1]`<br/>
`O = True`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we check `key:value` pairs
  - if any `value` is greater than 1 we know a duplicate exists
    - return False
  - else return True

```python
def containsDuplicate(self, nums: List[int]) -> bool:
    d = {}

    for i in nums:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1
    for k, v in d.items():
        if v > 1:
            return True
    return False
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

#### 1207. Unique Number of Occurrences

`I = [1,2,2,1,1,3]`<br/>
`O = True`<br/>

- create dictionary
- loop through list and add frequency count for items in list
- we can add the values (frequencies) to a set to get "unqiue" amounts
- we only want to return True if the number (length) of raw values is equal to the number (length) of the set of values
  - meaning if there were 2 nums with frequency of 2, only one "2" would get added to the list
  - so the length of the set version of the nums would be one less
    - meaning we don't have a unique numbers of occurences

```python
def uniqueOccurrences(self, arr: List[int]) -> bool:
    d = {}
    for i in arr:
        if i in d:
            d[i] += 1
        else:
            d[i] = 1

    return len(set(d.values())) == len(d.values())
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

#### 1512. Number of Good Pairs

`I = [1,2,3,1,1,3]`<br/>
`O = 4`<br/>

- create dictionary and a `counter` to 0
- loop through list and add frequency count for items in list
- we add every unique num to dictionary
- if a number is seen again we'll increase our `counter`
- return counter

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

#### 1748. Sum of Unique Elements

`I = [1,2,3,2]`<br/>
`O = 4`<br/>

- create empty dictionary and initilize count variable to 0
- iterate over nums and make dictionary count frequencies
- then iterate again and if the num showed up once (i.e. it's value in key:value was 1)
- add that number to our `count`
- return count

```python
   def sumOfUnique(self, nums: List[int]) -> int:
        d = {}
        count = 0

        for i in nums:
            if i in d:
                d[i] += 1
            else:
                d[i] = 1

        for j in d:
            if d[j] == 1:
                count += j
        return count

```
