---
path: react-js-notes
date: 2021-3-19T01:22:55.506Z
title: React & Javascript Notes
description: Concepts I'm learning about React & Javascript
---


### Props
Our `App` component is the parent to `Employee` and we have several ways to pass our props from parent to child. First, we'll just pass `props` in our arrow function and explicitly name each prop like `props.first`, `props.job` etc.

```javascript
import Employee from "./components/Employee";
function App() {
  return (
    <div>
      <Employee first={"Christian"} last={"Turner"} job={"SWE"} />
      <Employee first={"Alexa"} last={"Smith"} job={"ML Ops"} />
      <Employee first={"Brandon"} last={"Flowers"} job={"CTO"} />
      <Employee first={"Stephanie"} last={"Johnson"} job={"Manager"} />
    </div>
  );
}
```
```javascript
const Employee = (props) => {
  return (
    <div>
      <h1> Name: {props.first} {props.last} </h1>
      <h2> Job: {props.job} </h2>
    </div>
  );
};
```
![](./screenshot1.png "code")

Or we can use an [ES6 method called "Destructuring"](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) to assign all our prop types to our props variable and therefore be able to drop the `props.____` everywhere in our JSX. This is done on one line and makes our code a lot more readable. 
```javascript
const Employee = (props) => {
  const { firstname, lastname, age, job } = props;
  return (
    <div>
      <h1> Name: {firstname} {lastname} </h1>
      <h2> Job: {job} </h2>
    </div>
  );
};
```



### Array Destructuring
