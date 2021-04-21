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

So to the meat. Our `handleSubmit` function is where "everything" happens. First, we call `preventDefault` on our `e` (event). Since forms, by default, submit POST requests, they will reload the page, but we don't use a form for this purpose. Therefore, we want to **_prevent_** it's **_default_** behavior. We'll use our form button to fetch data and therefore don't want our page to reload. Moving on, we do our username validation. The requirements were to check if the `username` was at least 4 characters long. So we're error checking for the opposite. So, with our conditional operator, we say "if there's a `username` AND said length `username` is LESS THAN 4 (characters) then we'll `console.error` our descriptive error message letting our user know that said `username` doesn't meet the given criteria.

```javascript
function handleSubmit(e) {
  e.preventDefault()

  if (username && username.length < 4) {
    console.error("ERROR:Username must be at least 4 characters long")
  }
```

Within our `handleSubmit` function we have an asynchronous fetch function that waits for data back from our API. I used string interpolation to dynamically call the API with whatever the `state`/value of our `username` is (i.e. the username the user input).

We then await our response and call `.json()` which we use to [extract a JSON object from the response data](https://dev.to/kishore007k/using-fetch-with-async-await-54od). This returns a Javascript `Promise` so that's why we have to `await` it. I then clean up the code by creating a variable for the nested data and then I assign the boolen value to a `string`. We're ultimately returning `true` or `false` so to display it, it must be a string. I call the Javscript method `.toString()` on the boolean value and then assign it to `state` using our `setTaken()` hook.

```javascript
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
```

Then, below the function body, we call our async `fetchData` function, and then we'll reset our `username` value in the input field back to an empty string. This does two things, one it will visually reset the field value in the DOM which indicates to the user that they can search again, and secondly, it resets the value in our hook to be ready to receive a new value upon next submit.

```javascript
fetchData()
setUsername("")
```

Below our form, I added this JSX element. It does two things. This is a conditional rendering block. So it will check for the state of taken (i.e. Do we have `taken` state? Is `taken` truthy?). So IF `taken` is true THEN (that's what the `&&` is doing, conditionally checking for the left side to then render the right side) display the `taken` state in an `<h3>` tag. This will display "True" if the `username` that the username IS TAKEN (i.e. not valid) or "False" if the `username` is not taken (i.e. free to use).

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

So by histogram, basically what we want is a frequency counter. We want to parse the sentence and return a list of each word and the number of times that word was "seen" next to it. For instance if the word `"the"` occurs twice in the sentence our program should print out `the : 2`. The prompt also asked us to add that color (`:`) between the word and the occurance count.

So we start with our given sentence and in our function I created an empty dictionary to store our key:value (word:count) pairs. I started by calling `.split()` on the sentence, which splits the sentence up by word, and it'll ignore the newline chracters `\n` so this is a simple way to divvy up the sentence by _actual_ word.

```python
sentence = "This line is not the end.\nThis line will be the last!\nOne more thing Tulip is dog-friendly.

def histrogram(sentence):
  d = {}

  sentence = sentence.split()
```

This is the core logic of our hash map. Basically we're iterating over our list of words in our `sentence` and for word (`w`) in `sentence` we'll assess it and do one of two things. If we don't have this word in our dictionary than we'll add it. That's the `else` case. If we have the word (`w`) in our dictionary (`d`) than we'll add 1 to our count of said word, meaning we've seen it a consecutive time. This will keep a running count of the occurence of each word in the sentence.

```python
for w in sentence:
  if w in d:
    d[w] += 1
  else:
    d[w] = 1
```

The individual **WORDS** are our **_keys_** and the frequency **COUNT** is the **_value_** in our `key:value` pairs. The `d.items()` just allows us to iterate of the pairs. So when we say `for k, v` we're saying "for keys & values in our dictionary..." we want to print the value of `k` (key), which will be the literal word in `sentence` and the concat a space, a colon, and then another space while finally print the count. We convert the number (type `int`) to a string so we can print it to the console.

Lastly, outside the function definition, we call the function and pass the `sentence` into it.

```python
  for k, v in d.items():
    print(k + " : " + str(v))

histrogram(sentence)
```

#### Full Code

```python
sentence = "This line is not the end.\nThis line will be the last!\nOne more thing Tulip is dog-friendly."

def histrogram(sentence):
  d = {}

  sentence = sentence.split()

  for w in sentence:
    if w in d:
      d[w] += 1
    else:
      d[w] = 1

  for k, v in d.items():
    print(k + " : " + str(v))


histrogram(sentence)
```

### 03 - Vue: Search By Ingredient

**Prompt:** _Create a way to filter the pizzas by topping._

The basic overview here is that I was given a program that fetched data from a local `.json` file and rendered it in the broswer. First of all, I was asked to fetch & display all the data from a second `.json` file, which was nested differently. I did that pretty quickly, but I didn't add that code here. After, I went back to the initial pizza template file and then create a search form.

So I created the `form` tag with an `input` field and a `button`. The `form` is where we call our submit function. The `input` has a `v-model` directive so that we can bind the input value with our `data()` value. The `button` is `type=submit` and we'll use that to call the filter function we'll create next.

```html
<form @submit.prevent="filterPizza">
  <input type="text" placeholder="ex. Bacon" v-model="pizzaTopping" />
  <button type="submit">Search</button>
</form>
```

Next, we'll add a `searchTopping` and a `pizzaTopping` data property in our Vue `data()` method. We'll initially set them to an empty string. The `pizzaTopping` is what the user will type into the form field. It's the "request" and the `searchTopping` is what we'll use to filter. More on that later.

```javascript
data() {
  return {
    searchTopping: "",
    pizzaTopping: "",
    pizzas: [],
  }
}
```

In our Vue template (HTML), I added a `v-if` directive. At first, we were displaying **ALL** the pizzas in the `.json` file, but since we _only_ the pizzas that have the ingredient we're searching for, we'll add this `v-if` condition to only render the relevant pizzas. We query the data to check the toppings array in the `JSON` object with `pizza.toppings.` and then we use the Javascript array method `.includes()` and pass it the `searchTopping`. So basically we are only rendering pizzas **_IF_** said pizza's array of toppings contains the exact topping the user input.

```html
<div
  class="panel panel-default"
  v-for="pizza in pizzas"
  v-bind="pizza"
  :key="pizza.name"
  v-if="pizza.toppings.includes(searchTopping)"
></div>
```

The `filterPizza()` function first checks exactly what we just said above. We need to only return when the user inputted query (`pizzaTopping`) equals the pizza's JSON data (`searchTopping`). Then, we reset `pizzaTopping` to an empty string, therefore resetting the input field in the DOM. We have to use two different strings, and then comparing them within the function, because if we just passed the one string then the `v-model` would constantly assess for equality between its value and the JSON data and therefore filter **AS WE TYPE**. However, the prompt asked that we filter **ON CLICK/SUBMIT.**

```javascript
filterPizza() {
  this.searchTopping = this.pizzaTopping
  this.pizzaTopping = ""
}
```

#### Full Code

```html
<template>
  <div>
    <h1>Pizzas!</h1>

    <form @submit.prevent="filterPizza">
      <input type="text" placeholder="ex. Bacon" v-model="pizzaTopping" />
      <button type="submit">Search</button>
    </form>

    <br />

    <div
      class="panel panel-default"
      v-for="pizza in pizzas"
      v-bind="pizza"
      :key="pizza.name"
      v-if="pizza.toppings.includes(searchTopping)"
    >
      <div class="panel-heading">
        <h3 class="panel-title">{{ pizza.name }}</h3>
      </div>
      <div class="panel-body">
        <h4>Toppings</h4>
        <ul>
          <li v-for="topping in pizza.toppings" :key="topping">
            {{ topping }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PizzaList",
    data() {
      return {
        searchTopping: "",
        pizzaTopping: "",
        pizzas: [],
      }
    },
    created() {
      fetch("/pizzas.json")
        .then(response => response.json())
        .then(pizzas => (this.pizzas = pizzas))
    },
    methods: {
      filterPizza() {
        this.searchTopping = this.pizzaTopping
        console.log(this.pizzaTopping)
        this.pizzaTopping = ""
      },
    },
  }
</script>
```
