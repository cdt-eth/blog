---
path: Two-Pointer
date: "2021-03-01T23:46:37.121Z"
title: Two Pointer
description: Leetcode problems using the two pointer technique.
---

Leetcode problems using the two pointer technique.

#### 11. Container With Most Water

`I = [1,8,6,2,5,4,8,3,7]`<br/>
`O = 49`<br/>

- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our `height` array - 1
- we initialize our max (`mx`) variable to 0 to hold our running max area
- inside our while loop we set a height and updated max area variable
  - `h` is the minimum height of between the left and right index _values_
  - the `mx` _inside_ the while loop will update every "loop"
    - it calculates the max between our running `mx` and the area formula (`h` \* right - left _index_)
- we check, on each loop, if the height of the left pointer (i.e. it's index) is less than the right's
  - if left is smaller, increment it by 1
  - else left is bigger, so we decrement the right pointer by 1
- return the biggest running `mx`

```python
def maxArea(self, height: List[int]) -> int:
    l, r = 0, len(height)-1
    mx = 0

    while l < r:
        h = min(height[l], height[r])
        mx = max(mx, h*(r-l))

        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return mx
```

#### 125. Valid Palindrome

`I = "A man, a plan, a canal: Panama"`<br/>
`O = True`<br/>

- reassign string as said string after each character has been made lowercase and we've removed the non-alphanumeric characters
- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our nums array - 1
- while our left pointer is smaller than our right one...
- ...we check if our leftmost character, `s[l]`, is not equal to the rightmost one, `s[r]`
  - meaning it's automatically not a palindrome since the entire word has to be mirrored
  - we return False and exit
- if they're the same, we increment the left and right index and the while loop continues to the next pair
- we'll return True if we never hit the "not equals" case
  - this means the left and right pointer met, we hit every character pair, and we did not find mismatched letters
  - they're all mirrored so our string is a palindrome

```python
def isPalindrome(s):
    s = [i.lower() for i in s if i.isalnum()]
    l, r = 0, len(s)-1
    while l < r:
        if s[l] != s[r]:
            return False
        l += 1
        r -= 1
    return True
```

#### 167. Two Sum II - Input array is sorted

`I = [2,7,11,15], target = 9`<br/>
`O = [1,2]`<br/>

- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our nums array - 1
- we create a `curr` variable to
- while our left pointer is smaller than our right one we assess if our `curr` sum is less than our `target`
  - if it is, we increment our left pointer by 1 get a bigger number
  - else if `curr` is bigger than our `target`, we decrement our right pointer by 1
- lastly, our else case assumes `curr` and `target` are equal
  - i.e. neither is greater than the other
- we'll return the _index_ of the left and right numbers that comprise our `target`
  - we add 1 to each index because the prompt asked for 1-based indexing
    - vs. traditional 0-based array indexing

```python
def twoSum(self, numbers: List[int], target: int) -> List[int]:
    l, r = 0, len(nums)-1

    while l < r:
        curr = nums[l]+nums[r]
        if curr < target:
            l += 1
        elif curr > target:
            r -= 1
        else:
            print([l+1, r+1])
            return [l+1, r+1]
```

#### 344. Reverse String

`I = ["h","e","l","l","o"]`<br/>
`O = ["o","l","l","e","h"]`<br/>

- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our nums array - 1
- while our left pointer is smaller than our right one...
  - we do this to make sure the two end pointers haven't met because when they do that means we've "seen" every item in our sting
- ...the letter (value) at the left index of the string is now equal to the letter (value) at the right index of the string
  - and vice versa
- then we increment the left pointer by one
- and we decrement the right pointer by one
- return the new string

```python
def reverseString(self, s: List[str]) -> None:
    l, r = 0, len(s)-1

    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
    return s
```

#### 345. Reverse Vowels of a String

`I = "hello"`<br/>
`O = "holle"`<br/>

- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our nums array - 1
- create a list version of our string and a list of all possible vowels, both upper & lowercase
  - we do this because lists allow "item assignment" which we'll need later
- while our left pointer is smaller than our right one...
  - ...we do this to make sure the two end pointers haven't met because when they do that means we've "seen" every item in our sting
- if the left character, `s[l]`, is _*not*_ in our vowels list, we increase the left pointer by 1
  - because we're searching for a vowel, when we find a left one, we'll stop and look for a right to switch it with
- if the right character, `s[r]`, is not a vowel, we decrement the right pointer by 1
- once we find a left vowel and right vowel, we hit our else case, and we assign `s[l]` to `s[r]` and vice versa
- then we increment the left pointer by one
- and we decrement the right pointer by one
- once the parent while case, (l<r), is done we join the list with no space
- then we return the string

```python
def reverseVowels(self, s: str) -> str:
    l, r = 0, len(s)-1
    s = list(s)
    v = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}

    while l < r:
        if s[l] not in v:
            l += 1
        elif s[r] not in v:
            r -= 1
        else:
            s[l], s[r] = s[r], s[l]
            l += 1
            r -= 1
    return ''.join(s)

```

#### 977. Squares of a Sorted Array

`I = [-4,-1,0,3,10]`<br/>
`O = [0,1,9,16,100]`<br/>

- create our left pointer and initialize to 0
- create our right pointer and initialize to the length of our nums array - 1
- create empty `arr` of `None` for each item in our given nums array
- iterate over the original array backwards
  - we do this because
- if the absolute value of the left number is greater than the absolute value of the right number we will square the left number and add it to the `i-th` index of our placeholder `arr` array
  - we do this because negative numbers, when squared, become positive so we need to assess both base numbers _as_ positive numbers
    - i.e. -4 will become bigger than positive 3, when both are squared
    - -4 => 16 // 3 => 9
  - also, since we're iterating _backwards_, we're starting (and thus adding) to the _end_ first
    - i.e. the greatest number in its top-most index
  - then we increment the left pointer by one
- else, if the right number was bigger, we square it and add it to our placeholder `arr` array
  - and decrement our right pointer by one
- this for loop continues for the length of the array so when we're done we'll have all the items sorted in one pass

```python
def sortedSquares(self, nums: List[int]) -> List[int]:
    l, r = 0, len(nums)-1
    arr = [None for i in enumerate(nums)]

    for i in range(len(nums)-1, -1, -1):
        if abs(nums[l]) > abs(nums[r]):
            arr[i] = nums[l] ** 2
            l += 1
        else:
            arr[i] = nums[r] ** 2
            r -= 1
    return arr
```
