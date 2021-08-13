---
path: disney-plus-plus
date: 2021-8-13T01:22:55.506Z
title: Disney++
description: Disney Plus Clone
draft: true
---

**OVERVIEW** <br/>
I made a Disney+ clone from scratch. The idea was to finally build something completely from scratch, piece-by-piece, with absolutely no tutorial, forked repo, or starter code. I just started with a Create-React-App. My plan was to copy it as 1-to-1 as possible.

---

**TECH STACK** <br/>
**Frontend:** _Typescript, React, React Router_<br/>
I knew I'd want to use React and React Router for routing. I built it all in plain React/Javascript and then when I'd reached a good checkpoint I refactored it in Typescript. I've been trying to level up my Typescript skills for a while now and yes I could just create a new Typescript project or work through a tutorial, but, with the way I like to learn, I like to understand _what_ the added changes do and _why_, in a real project, it benefits us. So having an actual "completed" (we all know no side project is ever **really** finished) project and then slowly changing the JS code to TS code, I'll be able to better understand the tradeoffs, issues, and benefits to using Typescript. I was constantly breaking my code and having to fix it while adding in Typescript really has helped me understand how pieces work and interact with each other well. I loath abstract tutorials of non-real projects so learning by actually working in a real project was super helpful.

**Data:** _The Open Movie Database API_<br/>
Disney doesn't have a public Disney+ API so I was out of luck there. This is really the most obvious difference with my app. However, there's thankfully an amazing API anyone can use from [The Open Movie Database](https://www.omdbapi.com). It's not Disney exclusive so the content will be very different, but the depth of the data you have access to is outstanding. It has everything you could expect and more. There's also an active [forum](https://www.themoviedb.org/talk) with users asking questions and giving updates. It was really helpful and I actually had a question answered myself during building. I was frustrated that the schema didn't include the movie logos and an update was pushed a couple months into building and I was notified via my posted question.

**Auth & Storage:** _Supabase_
