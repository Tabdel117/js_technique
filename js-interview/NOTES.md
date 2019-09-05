# 面试记录

## 腾讯

### 春招

🐧一面：
- JS数据类型,symbol
- React Dom diff
- 事件代理（冒泡,捕获）event
- 盒子模型
- 跨域
- 深浅拷贝
- 手写快排
- 清除float
- 垂直居中
- 判断类型（instanceOf, toString)

🐧二面：
- 通讯录实现,如果数据很多前后端分别如何处理
- 小程序的两个线程,小程序与微信通信方式,小程序开发时遇到的问题
- XSS, CSRF
- 输入url发生什么事？哪些过程最影响性能？如何优化？

🐧三面：
- 前两轮面试的收获
- 对事业群有什么了解
- 实习时间安排

## 携程

✈️一面：
- 自我介绍
- 浏览器下载文件的方式(content-type：attachment)
- 为什么用react框架
- 如何设计样式可能任意的倒计时组件
- 重绘和回流,absolute会导致回流吗
- 数组去重 O(n)复杂度, 区别字符串1和数字1
- es6 promise在非网络请求上的应用场景
- this
- node端实现打印
- git rebase
- js文件延迟加载, async 和 defer 的差别, setTimeOut 如何操作 dom 节点
- blob
- 未来技术规划
- 1000瓶酒10个人,怎么分配找出毒酒

## 头条
💥一面：
- 手写超大整数相乘
- 手写 react 实现 a 标签（text-decorator: underline, target: blank, parent, visited）
- 数据库优化有哪些（除索引外）
- 数据库连接池
- 为什么操作锁不用缓存
- orm 的 model 如何判断何时该更新数据库（update, 缓存）
- 数据库分页
- react hooks

💥二面：
- DNS查询具体过程,向上查询是域名层级还是服务器层级
- .com和.cn区别在哪
- CSRF, XSS
- React的底层原理（ diff 按层, key 查找如何优化,如 1, 2, 3 变为 0, 2, 1, 3,如何检查保证节点3不 move）
- 为什么 electron 要用打包方式,用网页会有什么问题（面试官说可能会有本地 electron 版本和网页功能不一致的问题）
- electron 在系统调用层级上的拓展
- session 和cookie, 可以拿到别的网站的 cookie 吗
- 三次握手,四次挥手（为什么要三次、四次,如果握手第三次丢了会怎样）
- react 按什么原则对 setState 进行合并操作
- 数据库索引,多字段索引,如何增加索引命中率（对时间和状态两个状态加索引后,查询某时间内对某状态时,索引都会生效吗）

💥三面：
- 不用 async 实现 getResponse(urls, callback) (用while和递归两种)
- 项目中遇到的问题
- react hooks具体如何使用
- 超大整数相加

### 秋招

🐧csig
一面（❌）
- react hooks的functional component与react class的差别
- XSS, CSRF
- 输入url发生的事情
- JS, CSS, HTML加载、解析的关系
- HTTP协议中GET和POST在实现上的差别
- reflow, repaint（display: none/ visibility: hidden）
- 正则表达式 

🐧腾讯视频
一面
- xss,csrf
- websocket会自动断开吗，如何再次连接

二面
- websocket多机转发
- node多进程（？）
- 首屏时间如何算
- 长列表组件如何计算性能
- es6 proxy
- csrf token
- 精准的时钟
- 实习工作， H5如何优化性能
