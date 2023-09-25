# ECL Afterburner

- [Routing](./docs/ROUTING.md)
- [Testing](./docs/TESTING.md)
- [Code Style Guide](./docs/CODE_STYLE_GUIDE.md)

## Getting Started
1. If you have not installed nodejs.
   -The easiest way is through nvm
- Install nvm ```npm install nvm -g```
- Use the correct version outlined in .nvmrc by executing ```nvm use```
2. [Install yarn](https://yarnpkg.com/getting-started/install)
3. Execute  `yarn install` ;
4. For local development
- Start local server ```yarn start```

## Vite 
Afterburner uses [Vite](https://vitejs.dev/) for building the application and a development server.
It has two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

We are using the babel plugin.

## Tailwind
Afterburner will utilize [Tailwind](https://tailwindcss.com/) for all styling of custom components.

Prettier plugin https://github.com/tailwindlabs/prettier-plugin-tailwindcss

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```javascript
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


