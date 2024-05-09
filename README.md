# JSearch
A frontend for OMDb API & a random Google API from RapidAPI

Status: Production Ready


## Tech Stack
Vite with React(JavaScript), styled with **TailwindCSS**


## Frontend Concepts Used



## Recreate this project

### 0.5 Enable & Update PNPM
```bash
corepack enable pnpm  && pnpm add -g pnpm #I highly recommend pnpm, but npm commands are provided, regardless
```

### 1. Install dependencies
```bash
pnpm i #npm install
```
### 2. Initialize TailwindCSS
```bash
pnpm exec tailwindcss init -p #npx tailwindcss init -p
```
### 3. Check conflicting ESLint Rules
```bash
pnpm exec eslint-config-prettier index.js test/index.js legacy/main.js ##npx eslint-config-prettier index.js test/index.js legacy/main.js 
```

### 4. Run dev server
```bash
pnpm run dev #npm run dev
```