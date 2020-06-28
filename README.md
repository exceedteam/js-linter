# Requirements

- eslint 5.16

# Instalation

`npm i https://github.com/exceedteam/js-linter.git`

`create file .eslintrc with the following content inside your root project folder`

For the frontend

```
{
  "extends": "linter",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0,
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  }
}
```

For backend

```
{
  "extends": "linter",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0,
    "prefer-promise-reject-errors": "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": [
      "error", { "functions": false, "classes": true, "variables": true }]
  },
  "env": {
    "browser": false,
    "node": true,
    "jasmine": true
  }
}
```
For react 

```
{
  "extends": "eslint-config-linter/react",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  }
}
```

# SETUP WEBSTORM

1. go to Setting(Preferences) -> JS -> Code quality tools -> ESlint
2. set checkbox enabled
3. select used at project node version
4. select installed eslint module (use eslint version 5 for IDE version lower when 2019.2)
5. select Use specific config file and select .eslintrc file inside your root project folder
