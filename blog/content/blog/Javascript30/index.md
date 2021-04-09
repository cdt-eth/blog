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

    // if letter's key doesn't have an audio track associated, do nothing
    if (!audio) return

    // if you hit a key repeatedly, this will rewind it
    // vs waiting untiil the full sounds plays to play it again
    audio.currentTime = 0
    audio.play()

    // add class to key
    key.classList.add("playing")
  }

  // the function to remove the css class and change styling
  function removeTransition(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("playing")
  }

  // we select all items with key
  const keys = document.querySelectorAll(".key")

  // each key gets an event listener added called "transitionend"
  // when it ends, we remove that event listener
  keys.forEach(key => key.addEventListener("transitionend", removeTransition))

  // the actual key event, when press, run the playSound function
  window.addEventListener("keydown", playSound)
</script>
```

### 02 - CSS + JS CLock:

#### Topics Covered:

- transform & transition CSS properties
- `Date()` API

```html
<script>
  const secondHand = document.querySelector(".second-hand")
  const minsHand = document.querySelector(".min-hand")
  const hourHand = document.querySelector(".hour-hand")

  function setDate() {
    // get current real date & time
    const now = new Date()

    // gets the current second (in real life)
    const seconds = now.getSeconds()

    // converts the second (in time) to a degree number in a circle
    // we add back 90 degrees to offset the initial 90 degrees we set in our CSS transform
    const secondsDegrees = (seconds / 60) * 360 + 90

    // transform the selected class item (second hand in this instance) by dynamic variable in degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    // repeat for minutes
    const mins = now.getMinutes()
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    // repeat for hours
    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }

  setInterval(setDate, 1000)
</script>
```

### 03 - CSS Variables and JS:

#### Topics Covered:

- CSS variables (non-SASS)
- `querySelectorAll` & `setProperty`
- `change` vs `mousemove` events

```html
<script>
  // querySelector returns a "NodeList"
  // NodeList prototype's have forEach property
  // arrays have forEach already but now, we don't have to convert our NL to an array
  // it's native in NodeList now
  const inputs = document.querySelectorAll(".controls input")

  // when its called,
  function handleUpdate() {
    // get the 'data-sizing' custom attribute we add
    // in this case it's "px"
    const suffix = this.dataset.sizing || ""

    // set the "name" variable property to the input's value plus the suffix (px)
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    )
  }

  // loop over each input
  // listen for chagne event
  // when its called, call handleUpdate function
  // -------------------------------------------------
  // THIS: when you lift your finger off the input (i.e. its done moving)
  // and thus a value is selected, that value is our value
  inputs.forEach(input => input.addEventListener("change", handleUpdate))

  // THIS: when the value changes AT ALL as we're sliding around from left to right
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))
</script>
```

### 04 - Array Cardio 1:

#### Topics Covered:

- `filter()`
- `map()`
- `sort()`
- `reduce()`
- `console.table()`

```html
<script>
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(
    inventor => inventor.year >= 1500 && inventor.year <= 1599
  )

  // 2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(
    inventor => `${inventor.first} ${inventor.last}`
  )

  // 3. Sort the inventors by birthdate, oldest to youngest
  const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))

  // 4. How many years did all the inventors live all together?
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
  }, 0)

  // 5. Sort the inventors by years lived
  const oldest = inventors.sort(function(a, b) {
    const last = a.passed - a.year
    const next = b.passed - b.years
    return last > next ? 1 : -1
  })

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const category = document.querySelector(".mw-category")
  // <div class="mw-category">...</div>

  const links = Array.from(category.querySelectorAll("a"))
  // (39) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a]

  const de = links
    .map(link => link.textContent)
    .filter(streetName => streetName.includes("de"))
  // (12) ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"]

  // 7. Sort the people alphabetically by last name
  const alpha = people.sort(function(last, next) {
    const [aLastName, aFirstName] = last.split(", ")
    const [bLastName, bFirstName] = next.split(", ")
    return aLastName > bLastName ? 1 : -1
  })

  // 8. Reduce Exercise: Sum up the instances of each of these
  const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})
</script>
```

### 05 - Flex Panels Image Gallery:

#### Topics Covered:

-

```html
<script></script>
```

### 06 - Ajax Type Ahead:

#### Topics Covered:

-

```html
<script></script>
```

### 07 - Array Cardio 2:

#### Topics Covered:

-

```html
<script></script>
```

### 08 - HTML5 Canvas:

#### Topics Covered:

-

```html
<script></script>
```

### 09 - 14 DevTools Tricks:

#### Topics Covered:

-

```html
<script></script>
```

### 10 - Hold Shift to Check Multiple Checkboxes:

#### Topics Covered:

-

```html
<script></script>
```

### 11 - HTML5 Video Player:

#### Topics Covered:

-

```html
<script></script>
```

### 12 - Key Sequence Detection (KONAMI CODE):

#### Topics Covered:

-

```html
<script></script>
```

### 13 - Slide In on Scroll:

#### Topics Covered:

-

```html
<script></script>
```

### 14 - Objects & Arrays - Reference vs. Copy:

#### Topics Covered:

-

```html
<script></script>
```

### 15 - LocalStorage and Event Delegation:

#### Topics Covered:

-

```html
<script></script>
```

### 16 - CSS Text Shadow Mouse Move Effect:

#### Topics Covered:

-

```html
<script></script>
```

### 17 - Sorting Band Names w/o articles:

#### Topics Covered:

-

```html
<script></script>
```

### 18 - Tally String Times with Reduce:

#### Topics Covered:

-

```html
<script></script>
```

### 19 - Unreal Webcam:

#### Topics Covered:

-

```html
<script></script>
```

### 20 - Native Speech Recognition:

#### Topics Covered:

-

```html
<script></script>
```

### 21 - Geolocation-based Speedometer & Compass:

#### Topics Covered:

-

```html
<script></script>
```

### 22 - Follow Along Links:

#### Topics Covered:

-

```html
<script></script>
```

### 23 - Speech Synthesis:

#### Topics Covered:

-

```html
<script></script>
```

### 24 - Sticky Nav:

#### Topics Covered:

-

```html
<script></script>
```

### 25 - Event Capture, Propogation, Bubbling, and Once:

#### Topics Covered:

-

```html
<script></script>
```

### 26 - Stripe Follow Along Dropdown:

#### Topics Covered:

-

```html
<script></script>
```

### 27 - Click & Drag to Scroll:

#### Topics Covered:

-

```html
<script></script>
```

### 28 - Video Speed Controller UI:

#### Topics Covered:

-

```html
<script></script>
```

### 29 - Countdown Clock:

#### Topics Covered:

-

```html
<script></script>
```

### 30 - Whack-A-Mole Game:

#### Topics Covered:

-

```html
<script></script>
```
