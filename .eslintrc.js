/*
 * :file description:
 * :name: /hotel-sass/.eslintrc.js
 * :author: 胡东亮
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-04-15 10:37:43
 * :last editor: 胡东亮
 * :date last edited: 2021-09-01 15:44:49
 */
const umiEslint = require("@umijs/fabric/dist/eslint");

module.exports = {
  // parser: "@typescript-eslint/parser",
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  // plugins: [
  //   "@typescript-eslint",
  //   "@typescript-eslint/tslint"
  // ],
  rules: {
    ...umiEslint.rules,
    "@typescript-eslint/no-use-before-define": 0,
    "no-use-before-define": "off",
    "no-alert": 0, // 禁止使用alert confirm prompt
    "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
    "no-empty": 2, // 块语句中的内容不能为空
    "@typescript-eslint/camelcase": 0,
    "no-nested-ternary": 0,
    "@typescript-eslint/indent": ["error", 2],
    // "@typescript-eslint/explicit-function-return-type": 1,
    "@typescript-eslint/no-invalid-this": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": 0,
    "@typescript-eslint/naming-convention": 0,
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "no-async-promise-executor": 1,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 1,
    semi: ["error", "always"],
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-console": 0,
    "arrow-body-style": 0,
    "array-callback-return": 0,
    "class-methods-use-this": 0,
    "max-len": 0,
    "no-return-assign": 0,
    "import/extensions": 0,
    "no-case-declarations": 0,
    "no-param-reassign": 0, // 禁止给参数重新赋值
    "no-plusplus": 0,
    "prefer-object-spread": 0,
    "guard-for-in": 0,
    "comma-dangle": 0,
    quotes: 0,
    "no-return-await": 0,
    "max-classes-per-file": 0,
    "object-curly-spacing": ["error", "always"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-tag-spacing": 0,
    "react/destructuring-assignment": 0,
    "react/no-unused-state": 0,
    "react/display-name": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-first-prop-new-line": 1,
    "react/jsx-no-target-blank": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", "tsx", "ts"]
      }
    ]
  }
};
