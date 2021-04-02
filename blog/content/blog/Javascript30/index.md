---
path: javascript30
date: 2021-4-01T01:22:55.506Z
title: Javascript30
description: 30 Javascript Challenges
---

This is my first big Vue project I'm building.

**Repo: [Javascipt30](https://github.com/christiandavidturner/Javascript30) ** <br/>
**Lessons: ["Javascript30" by Wes Bos](https://javascript30.com/) **

### 01 - Javascript Drum Kit:

#### Topics Covered:

- key events
- playing audio
- listening for transition end events
- transition CSS

```html
<script>
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return

    //if you hit in succession, rewind it
    audio.currentTime = 0
    audio.play()

    // add class to key
    key.classList.add("playing")
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("playing")
  }

  // we select all items with key
  const keys = document.querySelectorAll(".key")

  // each key gets an event listener added called "transitionend"
  // when it ends, we remove that event listener
  keys.forEach(key => key.addEventListener("transitionend", removeTransition))

  window.addEventListener("keydown", playSound)
</script>
```
