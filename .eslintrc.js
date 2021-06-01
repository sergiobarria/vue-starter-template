'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
  },
}
