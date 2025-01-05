module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off'
  }
}