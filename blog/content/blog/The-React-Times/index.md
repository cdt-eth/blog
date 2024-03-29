---
path: The-React-Times
date: 2021-2-11T01:22:55.506Z
title: The React Times
description: Read stories from the New York Times using Top Stories Technology API
---

### Read stories from the New York Times using Top Stories Technology API

![home](https://user-images.githubusercontent.com/26611339/109046041-4f2c1280-76a2-11eb-85fb-20be1e8502e4.gif)

### [www.TheReactTimes.com](https://thereacttimes.com/)

##### Check out the [GitHub repo](https://github.com/christiandavidturner/The-React-Times) here

### To run the program:

1. `gh repo clone christiandavidturner/The-React-Times`
2. `cd The-React-Times/frontend/`
3. `npm i`
4. `yarn start`
5. open browser window and type in `http://localhost:3000`

### Call-out Features (Design & Function):

- Nested React components (children & grandchildren)
- Data fetching from API with auth key
- Responsive Design
- CSS Grid
- Animated SVG wave element
- GIF logo
- Add setTimeout() to showcase loading animation
- Navigation that fetches new data based on section
- Deployed on Netlify
- Custom domain + configuration
- Desktop only: button micro-interaction on-hover

### Components:

- **Header** - Parent component to `Masthead` and `SVG` (all 3 compromise Nav). <br/>
  └─ **Masthead** - List of sections<br/>
  └─ **SVG** - Animated SVG wave<br/>
- **News** - Fetch data from New York Times API and return `Stories` <br/>
  └─ **Story** - Single story component<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ **Button** - Composable button
- **LoadingBar** - Loading animation taken from [react-loading](https://www.npmjs.com/package/react-loading)
- **Spacer** - Flexible spacer by height
- **Footer** - Copyright year, email, and website

### Challenges:

- map API data to create children components dynamically
- responsive design (css grid)
- optional chaining when fetched data is `null` (conditional rendering)
- string interpolation in fetch request to change section -> `${section}.json`
- implementing new `useState` and `useEffect` hooks

### Future Plans:

- Add Typescript
- Add Tailwind CSS
- Unit Testing with Jest
- End-to-end testing with Cypress
- clean up CSS file
- Refactor `Masthead` component to use React Router
  - eliminate page reload when clicking new section (on-fetching new data)
