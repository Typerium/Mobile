module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "airbnb", 
      "plugin:flowtype/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "flowtype",
  ],
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": [0],
      "camelcase": [0],
      "import/no-cycle": [0]
  },
  "settings": {
      "import/resolver": {
        "alias": {
          "map": [
            ["components", "./src/components"],
            ["screens", "./src/screens"],
            ["navigation", "./src/navigation"],
            ["utils", "./src/utils"],
            ["assets", "./src/assets"],
            ["store", "./src/store"],
          ],
          "extensions": [".js", ".jsx", ".json"]
        }
      }
    },
};