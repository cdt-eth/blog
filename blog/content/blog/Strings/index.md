---
path: Strings
date: "2021-03-03T23:47:37.121Z"
title: Strings
description: Leetcode problems about Strings.
---

Leetcode problems about Strings.

#### 20. Valid Parentheses

`I : s = "()[]{}"`<br/>
`O: True`<br/>

- We create an empty stack
- Also, we create a list of our left/opening parentheses
- Next, we iterate over each paren in the string and:
  - first of all append the next paren (`p`) to our stack
  - check to make sure our stack _**isn't**_ empty (len = 0)
  - then check said paren against the next and we have 3 checks to see if it's corresponding closing paren
    - if it's a pair, we pop off the opening paren we added to our stack originally
  - Lastly, once the for loop is done (i.e. we've iterated through the string and seen all parens) we check if the stack is empty (again, meaning the length of the stack = 0)
    - if it's empty it means we found all our pairs and we return `True`
    - if the stack is not empty, it means we have parens left on our stack and we return `False`

```python
def isValid(self, s: str) -> bool:
  stack = []
  open = list("([{")
  for p in s:
    if p in open:
      stack.append(p)
    elif len(stack) <= 0:
      return False
    elif p == ")" and stack.pop() != "(":
      return False
    elif p == "]" and stack.pop() != "[":
      return False
    elif p == "}" and stack.pop() != "{":
      return False
  if len(stack) == 0:
      return True
  return False
```

|           | Big O                       | Why                                                                                                                                        |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Time**  | O(<em>n</em>)               | pass over every paren in the string once, time will grow as <em>n</em> grows                                                               |
| **Space** | O(<em>1</em>)/O(<em>n</em>) | **Best:** `.pop()`/`.push()` are constant so when perfectly "valid", stack doesn't grow.<br/>**Worst:** if stack grows, will grow linearly |

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

|           | Big O         | Why                                                                  |
| --------- | ------------- | -------------------------------------------------------------------- |
| **Time**  | O(<em>n</em>) | looping over string only once                                        |
| **Space** | O(<em>n</em>) | creating temporary space with `.lower()` function before adding back |

#### 151. Reverse Words in a String

`I : s = "the sky is blue"`<br/>
`O: "blue is sky the"`<br/>

- In one line we:
  - split the string (defaults to splitting on whitespaces)
  - reverse the order
  - join the list of strings back using `" ".join`

```python
def reverseWords(self, s: str) -> str:
  return " ".join(reversed(s.split()))
```

|           | Big O         | Why                                                                         |
| --------- | ------------- | --------------------------------------------------------------------------- |
| **Time**  | O(<em>n</em>) | string manipulation time based on number of <em>n</em> characters in string |
| **Space** | O(<em>n</em>) | creates a list and `.join` brings the string back together                  |

#### 1221. Split a String in Balanced Strings

`I : s = "RLRRLLRLRL"`<br/>
`O: 4`<br/>

- We create an empty `balance` and `count` variable, initialized to 0
- Iterate over every character in our string and when:
  - we see an `L` we increment our `balance` by 1
  - we see an `R` we decrement our `balance` by 1
- Then make a check to see if our `balance` is 0
  - it'll only be 0 when an equal (balanced) amount of `L`s & `R`s have been seen
- If that balance is 0 on a pass we'll increment the `counter` by 1
- Lastly, we return the count on "zero balances" we saw (i.e. how many balanced substrings we have)

```python
def balancedStringSplit(self, s: str) -> int:
  balance = 0
  count = 0
  for i in s:
    if i == "L":
      balance += 1
    else:
      balance -= 1
    if balance == 0:
      count += 1
  return count
```

|           | Big O         | Why                                                             |
| --------- | ------------- | --------------------------------------------------------------- |
| **Time**  | O(<em>n</em>) | we make one pass over <em>n</em> number of characters in string |
| **Space** | O(<em>1</em>) | no extra space created                                          |

#### 1662. Check If Two String Arrays are Equivalent

`I : word1 = ["ab", "c"], word2 = ["a", "bc"]`<br/>
`O: True`<br/>

- We join every substring into one string
- Then return true if they're equal

```python
def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
  w1 = "".join(word1)
  w2 = "".join(word2)

  return w1 == w2
```

|           | Big O                    | Why                                                                                         |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| **Time**  | O(<em>n</em>+<em>m</em>) | we make one pass over both <em>n</em> & <em>m</em> number of characters in string           |
| **Space** | O(<em>n</em>+<em>m</em>) | creates a list and `.join` brings the string back together for both <em>n</em> & <em>m</em> |
