---
path: Frontend Masters - Vue
date: 2021-4-01T01:22:55.506Z
title: Frontend Masters - Vue
description: Frontend Masters Courses on Vue
---

Working through Frontend Masters' courses on Vue. I'll be working through _**Intro to Vue 3**_, _**Building Applications with Vue & Nuxt**_, and _**Production-Grade Vue.js**_. Afterwards, there is elective coursework. Courses such as _**Vuex for Intermediate Vue.js Developers**_, and _**Advanced Vue.js Features from the Ground Up**_.

## Intro to Vue 3

---

#### Directives, Modifiers, and Data Rendering:

**v-model Directive** <br/>

- creates relationship between data in form input and the data
- two-way data binding
-

```javascript
<div id="app">
  <input v-model="message" placeholder="edit me">
  <p> {{ message }} </p>
</div>
```

**v-if, v-else, v-show** <br/>

- conditional rendering, based on requirements
- can be buttons, forms, divs, componenets

```javascript
<div id="app">
  <h3>What is your favorite kind of taco?</h3>
  <textarea v-model="tacos"></textarea>
  <br>
  <button v-show="tacos" type="submit">Let us know!</button>
</div>
```

Once there's _some_ data in the field with `v-model`, we will mount the button that has `v-if` or `v-show` on it and vice-versa.

- `v-if`, on toggle, will mount/unmount
  - use for bigger components that you don't want just sitting in the DOM
- `v-show`, on toggle, will `display:none` to keep it ready

  - use for components you'll be conditionally rendering, back and forth, a lot because mounting & unmounting can be expensive in the DOM

- `v-else` & `v-else-if`

  - must be siblings with `v-if`

```javascript
<div id="app">
  <p v-if="tacos === 'yes'">If yes, show this.</p>
  <p v-else-if="tacos === 'no">If no, show THIS.</p>
</div>
```

**v-bind** <br/>

- use `v-bind` or just `:`
- style binding
- create dynamic props

```js
<div id="app">
  <h3>What is your favorite kind of taco?</h3>
  <textarea v-model="tacos"></textarea>

  <button :class="[tacos ? activeClass : '']">
  Let us know!
  </button>
</div>
```

- We toggle the button's active classes by v-binding the state with a ternary operator

**v-for** <br/>

- classic loop
- add a `key` to allow the `v-dom` to track changes

```js
<li v-for="num in 5" :key="num">
```

**v-once** <br/>

- won't update once its rendered
- used for optimized update performance

**v-pre** <br/>

- print out inner text exactly how it is
- use for documentation

**v-on OR @** <br/>

- mean the same thing
- used to bind events
  - click events
  - mounseenter
  - ternarys

```js
<div
  v-on="
  mousedown: doThis, 
  mouseup: doThat
"
></div>
```
