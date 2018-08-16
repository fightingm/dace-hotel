
1. 踩过的坑：
  服务端渲染没有处理css,样式是通过客户端渲染js加上去的，所以页面会闪一下

2.使用react-helmet(也就是dace的Head组件)注入script失败
  一开始使用`dangerouslySetInnerHTML`来设置`script`里面的代码，发现不生效
  react-helmet的使用方法是这样的：
  ```html
  <script type="text/javascript">
      {
        `
        (function(doc) {
            var docEl = doc.documentElement;
            docEl.style.fontSize = docEl.clientWidth / 3.75 + 'px';
        })(document);
        `
      }
  </script>
  ```
3.rem布局
  为了兼容yo组件，我们设计在6s的设计稿中，1rem = 100px;
  所以设计稿上面的尺寸要/200，来转换成我们的rem值。
  比如设计稿上有一个元素是375px * 150px， 转换成rem就是1.875rem * 0.75rem

4. sass-loader没有做去重处理，所以项目使用fast-sass-loader来处理scss文件，但是fast-sass-loader中使用alias别名的方式@import会找不到模块，暂时只能用相对路径引入

5.如果是客户端渲染用到了redux异步请求数据，客户端会执行两次render，一次请求成功之前，一次是之后，所以如果依赖异步请求的数据，需要做判断。

## 待解决
1. css文件去重处理
2. 路由动态加载


