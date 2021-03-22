---
path: react-js-notes
date: 2021-3-19T01:22:55.506Z
title: React & Javascript Notes
description: Concepts I'm learning about React & Javascript
---

# Props

---

Our `App` component is the parent to `Employee` and we have several ways to pass our props from parent to child. First, we'll just pass `props` in our arrow function and explicitly name each prop like `props.first`, `props.job` etc.

```javascript
import Employee from "./components/Employee"
function App() {
  return (
    <div>
      <Employee first={"Christian"} last={"Turner"} job={"SWE"} />
      <Employee first={"Alexa"} last={"Smith"} job={"ML Ops"} />
      <Employee first={"Brandon"} last={"Flowers"} job={"CTO"} />
      <Employee first={"Stephanie"} last={"Johnson"} job={"Manager"} />
    </div>
  )
}
```

```javascript
const Employee = props => {
  return (
    <div>
      <h1>
        {" "}
        Name: {props.first} {props.last}{" "}
      </h1>
      <h2> Job: {props.job} </h2>
    </div>
  )
}
```

![](./screenshot1.png "code")

### Destructuring Props

Or we can use an [ES6 method called "Destructuring"](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) to assign all our prop types to our props variable and therefore be able to drop the `props.____` everywhere in our JSX. This is done on one line and makes our code a lot more readable.

```javascript
const Employee = props => {
  const { firstname, lastname, age, job } = props
  return (
    <div>
      <h1>
        {" "}
        Name: {firstname} {lastname}{" "}
      </h1>
      <h2> Job: {job} </h2>
    </div>
  )
}
```

### Destructuring Props with Named Parameters (Aliasing)

Another quick not, we can use another [ES6 method called "Named Parameters"](https://exploringjs.com/impatient-js/ch_callables.html#named-parameters) to assign alias's to any/all props by adding a colon after it and then the alias we want to use. We'll then pass the alias down below in the JSX. This is useful, for instance, if we're passing in a of nested props and we have two `id` props or `name` props. As in, say we have a department `name` and and employee `name` parameter, now this is a bad naming convention, but I'm just trying to explain why aliasing could come in handy. We can alias them as `{name: deptName, name: employeeName}` for instance.

```javascript
const Employee = props => {
  const { firstname: first, lastname: last, job: myJob } = props
  return (
    <div>
      <h1>
        {" "}
        Name: {first} {last}{" "}
      </h1>
      <h2> Job: {myJob} </h2>
    </div>
  )
}
```

# useState

---

This is the first React hook we're going over. You'll see inside our component we immediately have [array destructuring](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/). This is common practice with hooks. We have two variable set our initial state. The first variable is going to be our `state` variable and the second is the updapter function. It's common practice to name the updater function a `use` + first state variable name to be explicit with what's going on. For instance: `[count, setCount]`, `[age, setAge]`, `[name, setName]` etc etc. Then, on the right side, we have our actual `useState()` function. Within the parentheses we put in our \***\*initial state\*\***. So for `setCount` in our `Counter` component, it'd be wise to set it to 0 at the start. However, if we were using an input form, we'd pass in an empty string like this `useState('')`. We need the field to be empty in preparation for the user to add in what they want to.

```javascript
const [count, setCount] = useState(0)
const [name, setName] = useState("")
```

### useState & updating State

In the buttons, you'll see we have an empty arrow function that calls `setCount` and mutates state.

```javascript
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>The count is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
```

### useState & Conditinal Rendering

Here's another exmample of `useState` in action. In our `App` component we have a button to toggle the state of our Counter component when we click it. So we `setShowCounter` to `false` initially and then you see when we click that button we have an arrow function to set the state of our `showCounter` state variable to whatever it is not (i.e. if it's false set to true, if true set to false). We do this with the [bang operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT). To be clear, the button's `onClick` only changes the \***\*state\*\***, but it is our job to make sure it's reflected in our UI. So that's what we're doing in this line `{showCounter && <Counter />}`. This is called [conditional rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator). You can see it agin in the button text that changes from "show" to "hide" depending on state using the [ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/). Another form of conditional rendering. The difference is that the ternary operator specifies what it should be in a `true` and `false` scenario. Whereas the "logical and" operator (&&) is basically saying that "if the left side of the `&&` is true, show the right side". So we're not interested in showing anything if false, like we needed to in the button's text. We are only interested in showing the content when true. Two approaches to conditional rendering.

```javascript
function App() {
  const [showCounter, setShowCounter] = useState(false)
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Show Counter" : "Hide Counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  )
}
```

<!--
 ### useState & The Component Lifecycle
 Each component we have will have it's __**own**__ lifecycle and state
```javascript
function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Show Counter" : "Hide Counter"}
      </button>
      {showCounter && <Counter />}
      <Counter />
    </div>
  );
}

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>The count is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
``` -->

# useEffect

---

This hook comprises/replaces 3 old lifecyele methods: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`. This is a very important hook and it's responsible for all of our updating & [side effects](https://dev.to/francodalessio/understanding-react-s-useeffect-hook-lbg#:~:text=Plain%20and%20simple%2C%20useEffect%20lets,side%20effects%20in%20function%20components.&text=Side%20effects%20are%20all%20the,t%20be%20done%20during%20rendering.). This hook take two parameters, a function and array. The function by default is an empty arrow function.

```javascript
useEffect(
  () => {
    // effect
    return () => {
      // cleanup
    }
  } /*[input]*/
)
```

|                   Code                   | cDM | cDU | cWU |                          Notes                          |
| :--------------------------------------: | :-: | :-: | :-: | :-----------------------------------------------------: |
|           useEffect(() => {});           | ✅  |  X  |  X  |                     Runs every time                     |
|         useEffect(() => {}, []);         | ✅  | ❌  | ❌  |             Run on each mount, no on Update             |
|      useEffect(() => {}, [state]);       | ✅  | ✅  | ❌  |              Runs every time state changes              |
| useEffect(() => { return () => {}}, []); | ✅  | ❌  | ✅  | Will run on unmount, not run update because empty array |

<!-- |                                          | useEffect(() => {}, []); | Text | And more |                                 | -->

<!--
|           | Big O         | Why                                                                         |
| --------- | ------------- | --------------------------------------------------------------------------- |
| **Time**  | O(<em>n</em>) | string manipulation time based on number of <em>n</em> characters in stridasfasfng |
| **Space** | O(<em>n</em>) | creates a list and `.join` brings the string back together                  | -->
