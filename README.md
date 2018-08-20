1. 首屏css：
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
因为yo的每一个组件都是可以独立使用的，所以引入的时候每个组件本身都回去加载
变量的重复引入不会有什么问题，最终都会打包成css，但是样式重复引入的话就会有重复的样式，所以考虑在根组件引入通用样式，然后在每个组件内部引入用到的yo的组件样式

5.如果是客户端渲染用到了redux异步请求数据，客户端会执行两次render，一次请求成功之前，一次是之后，所以如果依赖异步请求的数据，需要做判断。

## 待解决
1. 路由动态加载


## 关于组件样式的抽离
'yo-config/core/reset.scss'的样式在每一个组件样式中都会被引入，所以将他抽离到通用样式中。

当我们在引入每个组件的样式的时候，不仅需要引入自己的.scss，还需要以下的scss文件，这些文件包含了一些变量和函数会在组件中被使用。
```less
  @import "yo-config/core/extra";
  @import "yo-style/core/merge-extra";
  @import "yo-config/core/config";
  @import "yo-style/core/merge-config";
  @import "yo-style/core/function";
  @import "yo-style/core/classes";
```
## 功能划分

1.首页：
  地址选择页面
  入离店日期选择页面
  关键词搜索页面

2.列表页：
  地图页面
  位置区域组件
  筛选条件组件

3.详情页：
  酒店图片
  酒店介绍页
  评价页面
  筛选条件
  点击报价弹框
  点击价格展开收缩

4. 通用组件：
    calendar组件
    carousel组件
    range组件
    popup组件
    alert组件
    modal组件
    suggest组件
    转场动画


