# Starter Content

## Tool's & Software

### 1. React

[React](https://reactjs.org/) is a widely-used JavaScript library for building user interfaces, particularly for web
applications. It emphasizes the creation of reusable UI components.

- **Website:** [https://reactjs.org/](https://reactjs.org/)
- **Documentation:** [React Documentation](https://reactjs.org/docs/getting-started.html)

### 2. npm

[npm](https://www.npmjs.com/) (Node Package Manager) is the default package manager for the JavaScript runtime
environment Node.js. It is employed to manage dependencies in JavaScript projects.

- **Website:** [https://www.npmjs.com/](https://www.npmjs.com/)
- **Documentation:** [npm Documentation](https://docs.npmjs.com/)

### 3. npx

[npx](https://www.npmjs.com/package/npx) is a command-line utility included with npm (starting from version 5.2.0). It
facilitates the execution of Node packages without requiring global installation.

- **Website:** [https://www.npmjs.com/package/npx](https://www.npmjs.com/package/npx)
- **Documentation:** [npx Documentation](https://www.npmjs.com/package/npx#npx---npm-exec)

### 4. Node.js

[Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 engine. It allows for the execution of
JavaScript code outside of a browser and is necessary for running npm.

- **Website:** [https://nodejs.org/](https://nodejs.org/)
- **Documentation:** [Node.js Documentation](https://nodejs.org/en/docs/)

### 5. Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS (and Linux) designed to simplify the installation of
software. It is particularly useful for managing system-level dependencies, including Node.js.

- **Website:** [https://brew.sh/](https://brew.sh/)
- **Documentation:** [Homebrew Documentation](https://docs.brew.sh/)

### 6. iTerm2

[iTerm2](https://iterm2.com/) is a terminal emulator for macOS that provides advanced features and customization options
beyond the default Terminal application.

- **Website:** [https://iterm2.com/](https://iterm2.com/)
- **Documentation:** [iTerm2 Documentation](https://iterm2.com/documentation.html)

## Installation Process

1. **Installing Homebrew** (for macOS):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **Installing Node.js (including npm)**:

```bash
brew install node
```

3. **Verification of Installation**:

```bash
node -v
npm -v
```

4. **Installing iTerm2** (for macOS):

```bash
brew install --cask iterm2
```

5. **Installing VS Code**:

```bash
brew install --cask visual-studio-code
```

6. **Installing Jetbrains Toolbox**:

```bash
brew install --cask jetbrains-toolbox
```

## Configuring VS Code

## Creating a New React Project

1. **Creation of a React Application Using Create React App**:

```bash
npx create-react-app my-app
cd my-app
npm start
```

2. **Development Environment**:

- The application will launch on `http://localhost:3000`.
- Modifications can be initiated in the `src/App.js` file to customize the application.

3. **Prettier & ESlint**

- ```bash
  npm install prettier --save-dev
  ```

- ```bash
  npm install eslint --save-dev
  ```

- ```bash
  npm install eslint-config-prettier --save-dev
  ```

- Creating the ".eslintrc.json"...
  ```
  {
    "extends": ["next", "next/core-web-vitals", "prettier"],
    "plugins": [],
    "rules": {}
  }
  ```

- Updating the VSCode settings.json...
  ```
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    }
  }
  ```

## Code Standards in JavaScript/React Projects: ESLint and Prettier

### ESLint

**ESLint** is a static code analysis tool used to enforce coding standards and catch common errors in JavaScript code.

- **Configuration:** Managed via a `.eslintrc` file. It supports built-in rules, plugins, and custom configurations.
- **Integration:** Works with most code editors for real-time linting and can be integrated into CI pipelines.
- **Execution:** Installed and run using the following commands:
  ```bash
  npm install eslint --save-dev
  npx eslint --init
  ```

### Prettier

**Prettier** is an opinionated code formatter that ensures consistent code styling across a project.

- **Configuration:** Minimal, handled through a `.prettierrc` file for custom options.
- **Integration:** Automatically formats code in most editors and can be combined with ESLint.
- **Execution:** Installed and run with:
  ```bash
  npm install prettier --save-dev
  npx prettier --write .
  ```