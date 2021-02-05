---
path: learning-python
date: 2021-1-5T03:22:55.506Z
title: Learning Python
description: Reflections on my Python coding assignments
---
<!-- 
<style>
h5 { margin-bottom: 0 }
h6 { margin-top: 15px }
</style> -->

![Python](/../assets/py.gif "Python")

I'm currently in my last semester of _pre-requisite_ classes before I start grad school in the fall. I'll be pursuing a Master's of Computer Science from Georgia Tech with a [Computing Systems specializtion](https://omscs.gatech.edu/specialization-computing-systems). I was not a Computer Science undergrad so I've taken 4 classes now (currently in my 5th) to just get ready to apply and get in to this program. I've taken:
 ```
 - C++ Computer Science 
 - Discrete Mathematics
 - C++ Data Structures
 - Database Management
 - Objects & Algorithms
```
This last class _Objects & Algorithms_ allows you to pick whatever language you want between C++, Java, and Python. I've never learned Python so I'm using this class to finally pick it up since I know the OMSCS program will be heavy in Python and some C++.

I'll be documenting so of the challenges I've overcome from my assignments here so I can both refer back to it later if I need and/or just track my progress.

* * *

<h5 style="margin-bottom: 0">Exercise 1 - Two Sum</h5>
<h6 style="margin-top: 15px">This assignment</h6>
`test`

I had a couple takeaways from this first Python assignment. I learned how to read input files and write outputs files. However, the input files were given and names _in1.txt, in2.txt, in3.txt..._ until 5 and I was tasked with opening them, reading the data, running the data through an algorithm, and then writing the answer to a new (and non-existent) output file. 
```python
inPrefix = "in"
outPrefix = "out"
for i in range(1, 6):
    inFile = inPrefix + str(i) + ".txt"
    outFile = outPrefix + str(i) + ".txt"
```
So this for loop read `in` + `1` + `.txt` and and changed `in` for `out` when creating the outfile. Then `1` was incremented to `2` by the for loop, and henceforth the new output file would be `out2.txt`, which is the desired result.

Another unique Python trick I learned was `format`. So when a text file contains numbers, those numbers are technically strings. So I read the numbers, converted them to integers using
- `arr = fileLines[2]`
    - read the 2nd line (array of numbers) and save to `arr` variable
- `num_arr = [int(j) for j in arr.split()]`
    - list comprehension to convert every element in array from a string to an integer

Then my if statement can take an integer and if I found an integer match, I converted that number to a stringified verion of that number and saved it to a variable `answer` so I can write that answer to the output file. It's important to remember that you cannot write integers to files, only string versions _OF_ said integer(s).
```python
if num_arr[a]*2 == target:
    a = str(num_arr[a])
    target = str(target)
    answer = "{}+{}={}".format(a,a,target)
```
So format is cool because I create a placeholder for a variable with parentheses inside a string `{}`, and the with a `.format()` I can add as many variables as I have parentheses. I did this, instead of hard-coding a string answer because I need to to be dynamic. That's the whole point of the program. I want to write my string answer to my output file _*no matter*_ what set of numbers my program takes in! So my output string has variable placeholders and I use `.format()` and the placeholder parentheses to insert my dynamic answer(s) into my program's output.

* * *

<h5 style="margin-bottom: 0">Exercise 2 - Counting Sort Integers</h5>
<h6 style="margin-top: 15px">This assignment</h6>

So one of my big struggles with this class has been I/O (file input & file output) since I'm not used to it. So this assingment asks us to read this text file, store the first line as a variable then sort the rest of the file as one list. Seems okay at first, but the issue, for me, was figuring out how to read the numbers (which are technically strings since its a TEXT file), reading them as ONE line (since there's newlines) and removing extraneous punctuation marks and then converting them to integers.
```
10000
777 548 3432 7834 9186 9070 9472 2196 1669 94 
9989 6331 3533 1408 4729 4973 8992 225 5546 723 
2789 4753 2626 1047 1273 7008 3126 778 4430 7861 
6163 5483 3278 2775 3642 4517 1117 1264 176 9281 
3651 9589 9451 1426 94 3830 5023 8808 5733 4714 
6795 27 550 5424 6640 9713 5613 9746 5651 3827 
3281 2317 8695 5109 1135 2401 6767 6670 1315 4581 
4551 9934 684 9496 8394 2959 4272 375 6784 9274 
4048 1569 6018 4383 6847 5349 4039 2737 1316 3103 
1636 2504 6691 6291 2792 9851 4724 2375 94 996
```
<br/>
I tried this, but it only removed whitespace so thats not what i wanted. It wasn't enough.

```python
for line in fin:
    A.append(line.strip())
print(A)
```
`['10000', '3651 1112 9448 1426 94 383 9881 8808 573 4714']`
<br/>
<br/>
Then I tried a list comprehension method. It did convert them to integers, which I wanted, but it didn't make a continugous array. It was split into an array of arrays based on the line.

```python
A = [[int(x) for x in line.split()] for line in fin]        
print(A)
```
`[[10000], [777, 548, 3432, 7834, 9186, 9070, 9472, 2196, 1669, 94], [9989, 6331, 3533, 1408, 4729, 4973, 8992, 225, 5546, 723], [2789, 4753, 2626, 1047, 1273, 7008, 3126, 778, 4430, 7861], ...`
<br/>
<br/>
After trying several things I got this to work. I did use list comprehension again. I knew that was a good idea, but this time I created a new array, split and converted the strings to integers and then append each number to my new array. The <strong><code>arr += result_ints</code></strong> is what I was missing. Full disclosure I had to reach out to an more experienced dev for this answer. I was close on my own but not quite there.

```python
arr = []
for line in fin:
    result_ints = [int(x) for x in line.split()]
    arr += result_ints
```

* * *

<h5 style="margin-bottom: 0">Lab 2 - Counting Sort Strings</h5>
<h6 style="margin-top: 15px">This assignment</h6>
