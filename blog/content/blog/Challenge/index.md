---
path: challenge
date: 2021-4-15T01:22:55.506Z
title: Challenge
description: Challenges Recap
draft: true
---

I recap of 2 coding challeneges I completed.

### 01 - React: Username Validation

**Prompt:** _Create input box, user adds a username that must be minimum of 4 characters long and unique. To verify it’s unique, I had to hit an API that checked it against their database and returned true vs. false._

My full answer is at the bottom, but I wanted to break down my thoughts as well.

After setting up the project locally, via git, I upgraded the React & React DOM version from `v16.x` to `v17` so that I could use Hooks. I then changed the class component to a functional one and imported `{ useState }`. Then I set up the state I would need. I knew I would need the `username` that the user would input. I also knew I would need the state of whether a username was taken or not. I called it `taken` and I knew we'd be getting back a boolean value, `true` or `false`. I set the state of each to an empty string.

```javascript
const [taken, setTaken] = useState("")
const [username, setUsername] = useState("")
```

Next, I created the `form` in JSX. I started with a wrapped `div` with a simple margin style prop so I can visually see better and not smushed up against the corners of the DOM. So the `form` will have a `handleSubmit` method. Then I created a label for some instructions. Then two `input` fields. One input field of and another button. The first `input` field had the standed `type=text` to define what input we're expecting, and I bound the value of the field to the `username` from our `useState` hook. Then, the `onChange` method that has had the `setUsername` `useState` function to take the input value the user inputs and we're setting that equal to our the state of `username`. Lastly, the submit input is `type=submit` to define its a button type and that's it.

```javascript
<div
  style={{
    margin: 20,
  }}
>
  <form onSubmit={handleSubmit}>
    <br />
    <label>
      Input Username:{" "}
      <input
        type="text"
        placeholder="enter username"
        value={username}
        onChange={e => {
          setUsername(e.target.value)
        }}
      />
    </label>

    <input type="submit" value="Submit" />
  </form>
</div>
```

d

```javascript
```

Below our form, I added this JSX element. It does two things. This is a conditional rendering block. So it will check for the state of taken (i.e. Do we have `taken` state? Is `taken` truthy?). So IF `taken` is true THEN (that's what the `&&` is doing, conditionally checking for the left side to then render the right side) display the `taken` state in an `<h3>` tag.

```javascript
{
  taken && <h3>{taken}</h3>
}
```

#### Full Code

```javascript
import React, { useState } from "react"

export default function App() {
  const [taken, setTaken] = useState("")
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (username && username.length < 4) {
      console.error("ERROR:Username must be at least 4 characters long")
    }

    async function fetchData() {
      const response = await fetch(
        `https://hxj1tck8l1.execute-api.us-east-1.amazonaws.com/default/users/taken?username=${username}`
      )

      const data = await response.json()
      const result = data.taken

      const strResult = result.toString()

      console.log(strResult)
      setTaken(strResult)
    }

    fetchData()
    setUsername("")
  }

  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Input Username:{" "}
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={e => {
              setUsername(e.target.value)
            }}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

      {taken && <h3>{taken}</h3>}
    </div>
  )
}
```

### 02 - Python: Word Histogram

**Prompt:** _Create a histogram of words from given statement._

```python
word = "This line is not the end.\nThis line will be the last!\nOne more thing Tulip is dog-friendly."

def histrogram(word):
  d = {}

  word = word.split()
  print(word)
  for c in word:
    if c in d:
      d[c] += 1
    else:
      d[c] = 1

  for k, v in d.items():
    print(k + " : " + str(v))


histrogram(word)
```
