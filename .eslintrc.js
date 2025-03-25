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
  plugins: ['vue', 'import'],
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
  extends: ['alloy', 'alloy/vue', 'taro/vue3', 'plugin:import/errors', 'plugin:import/warnings', './.eslintrc-auto-import.json'],
  rules: {
    // 根据项目需求覆盖或调整规则
    // 禁用组件名必须多单词规则
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/order': [
      'error',
      {
        // 对导入模块进行分组
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index', 'object', 'type'], 'unknown'],
        // newlines-between 不同组之间是否进行换行
        'newlines-between': 'always',
        // alphabetize 根据字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
