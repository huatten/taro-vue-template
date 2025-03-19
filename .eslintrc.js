/**
 * @see https://github.com/AlloyTeam/eslint-config-alloy
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['alloy', 'alloy/vue', 'taro/vue3'],
  rules: {
    // 根据项目需求覆盖或调整规则
    // 禁用组件名必须多单词规则
    'vue/multi-word-component-names': 'off',
  },
}
