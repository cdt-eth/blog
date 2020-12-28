---
path: github-issue
date: 2020-12-28T03:22:55.506Z
title: GitHub Issue
description: Issue I had syncing repos on my new computer
---

![Github](/../assets/github.png "Github")

After setting up a lot of initial things on my computer I now wanted to work on an old project. After some research, I simply zipped up an old repo folder from my other computer and emailed it to myself. I then tried making a change, committing it and the pushing it but I got various errors. They were both me but it wasn't committing as the actual me associated with my GitHub account. It was "counting" as a commit and I got this error (below) so I knew something was off.

![error](/../assets/gh_error.png "error")

I [asked Reddit](https://www.reddit.com/r/github/comments/klizne/sync_old_repo_to_new_computer/) for help and ended up adding my same email from the old comp by the command `git config --global user.email` and then I had to `git pull` and then another `git push` and it finally worked!

