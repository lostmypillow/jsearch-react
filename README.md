# JSearch
A frontend for OMDb API & a random Google API from RapidAPI

[Demo](https://lostmypillow.github.io/jsearch-react)


## Tech Stack
**Vite** with **React(JavaScript)**, styled with **TailwindCSS**


## Recreate this Project

```bash
corepack enable && pnpm install
pnpm run dev
```

## Why PNPM?

It's faster than NPM


## Frontend Concepts Used
- Consume publicly available APIs and display them with React components
- Style website with TailwindCSS
- Push static export ("index.html" instead of a Node.js file) via GitHub Actions to GitHub Pages


## Why not dropdowns for "Movies/Google" selection?
I'm a  firm believer of presenting the user all topions without having them to spend time digging through menus (hamburger menus, ugh!) just to navigate between different search options, so I designed a "toggle" where it's clear A. which search type it is now, and B. what other options they have.


## Where are all the fancy animations?
I'm also a firm believer in performant websites. Time spent on slow, costly and unnecessary animations is time not spent on navigating the website, which is the important thing here. User don't go to a website to admire the fancy animations, they're there to achieve a goal. And the faster a website helps them achieve that goal, the more appreciative they will be. The best tool is the one that gets things done and get out of the way afterwards.


## Future for this Project

### Django Backend
Right now I'm consuming the OMDb API and RapidAPI via the frontend, the API key is exposed in the inspector window, I'm planning to move this to a Django/Django Ninja backend.

### Mobile App
Speaking of backend, another reason for moving API consumption to the backend is for the benefit of the future mobile app version of JSearch

### Dark Mode
Self explanatory.
