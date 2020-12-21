---
title: Two Sum - C++
date: "2020-12-17T23:46:37.121Z"
---

### Overview

I'm working through Leetcode problems and will be blogging my results and thoughts from processing these problems. This one was simple. It was actually the first problem on the Easy difficulty so naturally the solution would've been pretty straight-forward. This is a simple double for loop method that

Try the ([Two Sum Problem](https://leetcode.com/problems/two-sum/)) for yourself!

### Prompt

- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
- You may assume that each input would have exactly one solution, and you may not use the same element twice.
- You can return the answer in any order.

### Solution

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
