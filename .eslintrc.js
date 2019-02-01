// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-floating-decimal': 'off',
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-useless-return": "error",
    "no-undefined": "error",
    "no-undef-init": "error",
    "no-eq-null": "error",
    "eqeqeq": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-shadow": "error",
    "no-new-func": "error",
    "default-case": "error",
    "comma-spacing": "error",
    "no-shadow-restricted-names": "error",
    "no-path-concat": "error",
    "no-use-before-define": "error",
    "no-duplicate-imports":"error",
    "no-useless-rename":"error",
    "space-in-parens":"error",
    "no-multiple-empty-lines": ["error", {"max":2, "maxEOF": 0, "maxBOF":1}],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "max-params":["error", 5],
    "key-spacing":"error",
    "strict": ["error", "global"],
    "prefer-promise-reject-errors":"error",
    "camelcase": ["error", { "properties": "never" }],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used"}],
    "max-len": [
      "error",
      160,
      {
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreRegExpLiterals": true
      }
    ],
    //"no-mixed-spaces-and-tab": ["error", "smart-tabs"],
    "no-console": 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    //ES6 specific
    "arrow-spacing": "error",
    "template-curly-spacing": "error",

    //Rules to tighten below
    "complexity": ["error", 10], //Want to up this to like 5
    "arrow-body-style": ["off", "as-needed", {"requireReturnForObjectLiteral" : true}],
    "no-regex-spaces": "off",
    "no-var":"off",
    "prefer-arrow-callback": "off",
    "indent": [
      "off",
      "tab"
    ]
  }
};
