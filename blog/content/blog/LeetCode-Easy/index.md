---
path: leetcode-easy
date: "2020-12-17T23:46:37.121Z"
title: Leetcode - Easy
description: Solving Easy Leetcode Problems
---

### Overview

I'm working through Leetcode problems and will be blogging my results and thoughts from processing these problems. This blog post is solely for the "Easy" level problems that I solve.

# Trees - Python

I solved [`Invert Binary Tree`](https://leetcode.com/problems/invert-binary-tree/), [`Maximum Depth of Binary Tree`](https://leetcode.com/problems/maximum-depth-of-binary-tree/), and [`Minimum Depth of Binary Tree`](https://leetcode.com/problems/minimum-depth-of-binary-tree/) in one sitting. I'm using these easy problems as a way to develop my non-existant Python skills. I tok C++ Data Structures, but C++ is way more verbose compared to Python. I'm amazed by the simplicity of some of these solutions.

# Two Sum - C++

### Prompt

- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
- You may assume that each input would have exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.<br/>

Try the [`Two Sum Problem`](https://leetcode.com/problems/two-sum/) for yourself!

```
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Solution

This one was simple. It was actually the first problem on the Easy difficulty so naturally the solution would've been pretty straight-forward. This is a simple double for loop method. that...

```
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int x=0;
        int y=0;
        int size = nums.size();

        for (int i=0; i<size-1; i++) {
            for (int j=i+1; j<size; j++) {
                if (nums[i] + nums[j] == target) {
                    x=i;
                    y=j;
                }
            }
        }
        return {x, y};
    }
};
```
