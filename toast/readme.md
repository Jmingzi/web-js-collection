## toast.js

#### 使用
```js
import toast from './toast.js'

toast.info('hello world')
toast.error('hello world', 3000)
toast.success()
toast.default()

// 参数说明：
// 第一个参数为字符
// 第二个为显示时间，默认为3s
```

非es6环境使用
+ 需要将 src下的 源码转化为es5，并加入非CommonJs规范语句，全局引入即可