# vue-mobile

-   vue-mobile: 移动端开发模板

1. vw 移动端适配及兼容性处理: 375
    - 插件集合:
        ```yaml
        autoprefixer
        cssnano
        cssnano-preset-advanced
        postcss-aspect-ratio-mini
        postcss-cssnext
        postcss-import
        postcss-preset-env
        postcss-px-to-viewport
        postcss-url
        postcss-viewport-units
        postcss-write-svg
        ```
2. fastclick,viewport、promise 兼容处理(index.html)
3. vant: postcss-px-to-viewport => 375
4. json-server: 简单高效
5. 路由权限管理 auth(全局控制权限开关) router.beforeEach
6. axios 封装: 防止重复提交
7. scss
    - scss-package:
    - style-resources-loader
8. 打包优化: gzip、drop_console、drop_debugger
9. modules 按页面进行分层
10. eslint: eslint-config-alloy => 利用 prettier 自动格式化 Vue 文件
11. VeeValidate 最新版

### 运行

-   项目运行
    -   json-server
        ```yaml
        cd mocks
        yarn
        yarn start
        ```
    -   项目运行
        ```yaml
        yarn
        yarn serve
        ```
    -   项目打包
        ```yaml
        yarn build
        ```
