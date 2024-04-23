# My Vite (React) Template

## How should you/I use this template?

### 0.5 Enable & Update PNPM
```bash
corepack enable pnpm  && pnpm add -g pnpm #I recommend pnpm, but npm commands are provided
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
## Plugins Used

- ### Vite Plugin Pages [Link to GitHub](https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#react)

- ### Unplugin Auto Import [Link to GitHub](https://github.com/unplugin/unplugin-auto-import)

- ### Unplugin Icons [Link to GitHub](https://github.com/unplugin/unplugin-icons)

- ### Unplugin Fonts [Link to GitHub](https://github.com/cssninjaStudio/unplugin-fonts)

- ### Axios [Link to Site](https://axios-http.com/docs/intro)

- ### ESLint Config Prettier [Link to GitHub](https://github.com/prettier/eslint-config-prettier)

## VSCode Extensions

- ### ES7+ React/Redux/React-Native snippets by dsznajder

- ### Tailwind CSS IntelliSense

- ### ESLint

- ### Prettier