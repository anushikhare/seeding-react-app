module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  env: {
    jest: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "jest"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/*.test.tsx", "**/*.test.ts", "src/tests/__mocks__/**"] }
    ],
    "comma-dangle": ["error", "never"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    indent: [0, 4],
    "max-len": [2, 120],
    "react/jsx-indent": [2,4],
    "react/jsx-indent-props": [2,4],
    "@typescript-eslint/indent": [2, 4],
    "@typescript-eslint/member-delimiter-style": [2, {
      "multiline": {
          "delimiter": "none",
          "requireLast": false
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false
      }
    }],
    "import/prefer-default-export" : [0],
    "@typescript-eslint/no-empty-interface": [0],
    "react/jsx-props-no-spreading": [0],
    "@typescript-eslint/explicit-function-return-type" : [0],
    "react/destructuring-assignment": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "react/sort-comp": [0],
    "class-methods-use-this": [0],
    "import/no-cycle": [0], // debatable,
    "react/prop-types": [0],
    "no-param-reassign": [0]
  }
};
