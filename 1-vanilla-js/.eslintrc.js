// .eslintrc.js
module.exports = {
  // 개발 환경에서 사용하는 환경 정의, 브라우저, node, es6 문법 사용한다는 의미
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    "prettier",
  ],
  extends: [
    "eslint:recommended", 
    "eslint-config-prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  },
}