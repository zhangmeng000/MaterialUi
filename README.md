# React Transform Boilerplate

## Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Transforms are enabled for files inside `src` (except `index.js`).

window打包时候要做一些更改在打包
1. index.html 里面的路径要变为
```js
<script src="/static/bundle.js"></script>
```
2. .babelrc 里面的要改为
```js
{
  "presets": ["react", "es2015"],
}
```
3. package.json 里面
```js
"build:webpack": "./node_modules/bin/webpack --config webpack.config.prod.js",
```
4. 最后npm run build
   创建分支 该删的删了，上传分支上
