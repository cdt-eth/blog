---
path: new-computer
date: 2020-12-28T01:22:55.506Z
title: New Computer Setup
description: Everything I installed on my new Mac M1 Pro
---

I upgraded computers from the 2015 Macbok Pro to the new M1 Pro. This is my first time setting up a new computer since I've been coding so I didn't use the Apple Migration Assistant because I wanted to learn how to do this again from scratch. This has the benefit of me learning to do this again, but also, hopefully I won't over-add packages I don't need this time. My last computer definitely had some bloat.

![M1](/../assets/m1.jpg "Mac M1 Pro")

## Mac Apps

I audited all the old apps I installed on my old computer and then watched a couple videos to see what others used. I like [this one](https://www.youtube.com/watch?v=cIJJ6FaqKVM) and [this one](https://www.youtube.com/watch?v=ROIMJ-M21gM). I also [asked the grad school subreddit](https://www.reddit.com/r/OMSCS/comments/kklc1z/new_mac_codingdev_setup/) I'm in and the [iOS Programming subreddit](https://www.reddit.com/r/iOSProgramming/comments/kkld3m/new_mac_codingdev_setup/) for their suggestion to see what I may have not known about but could benefit from.

| APP         | DESCRIPTION | 
| :---        |     ----:   | 
| Alfred      | Better search       | 
| Bartender      | Minimize top bar       | 
| Dashlane   | Password manager        |
| CleanMyMac X      | free up computer space       | 
| Adobe Creative Cloud      | Photoshop & Lightroom       | 
| JPEGMini Pro      | Image resizer       | 
| Hey      | Personal email       | 
| Outlook      | Work email       | 
| XCode      | Swift/C++ IDE       | 
| VSCode      | IDE       | 
| Slack      | Work chat       | 
| Tot      | Mini-notes in the top bar       | 


## Terminal

I installed Homebrew, but using Rosetta since Apple's ARM machines are compatible with Homebrew, yet.

The first thins I did was change my shell from zsh to bash. Then I created a `.bash_profile` and changed it to:
```bash
\[`[ $? = 0 ] && X=2 || X=1; tput setaf $X`\]\h\[`tput sgr0`\]:$PWD\n\$
```
This makes the user green and show's my present working directly when changing into sub-folders.
![bash](/../assets/bash.png "bash")



## VSCode Extensions
I [asked Reddit](https://www.reddit.com/r/vscode/comments/kl3z1l/new_mac_vscode_setup/) for some suggestions and then added some of my own.

| EXTENSION         | DESCRIPTION | 
| :---        |     ----:   | 
| Bracket Pair Colorizer 2      | Color matching brackets       | 
| Prettier       | Code formatter       | 
| Auto Rename Tag       |  Rename opening/closing tags at once      | 
| Python, Jupyter, Pylance       |  Python environment      | 
| ESLint       | Code linting       | 
| Material Icon Theme       | Add icons to files in Explore bar       | 
| Live Server       | Hot reloading in browser       | 

