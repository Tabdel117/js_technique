# 面试记录

## 腾讯

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

## 秋招

## 🐧csig
一面（❌）
- react hooks的functional component与react class的差别
- XSS, CSRF
- 输入url发生的事情
- JS, CSS, HTML加载、解析的关系
- HTTP协议中GET和POST在实现上的差别
- reflow, repaint（display: none/ visibility: hidden）
- 正则表达式 

## 🐧腾讯视频

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

## 微软

一面

- c++学过吗，讲讲继承、封装、多态分别是什么
- 了解计算机网络吗，常见应用层协议，tcp/udp区别
- 进程和线程的区别
- 实习主要工作
- 数据结构比较熟悉哪一块？来写个深度搜索的题：实现围棋消去（我拿bfs做的），还可以优化吗

```
    X X 0 X X       X X 0 X X
    0 X X X X   =>  0 X X X X
    X 0 X X X       X X X X X
    X X 0 X 0       X X 0 X 0
```

- 有序链表合并

二面

full-stack
- nodejs作为后端语言优点在哪， C#会吗
- webpack做了哪些工作，输出是如何的
- websocket同步可以用什么替代（http2, 长轮询, eventSource）
- 实习最大的收获和难点在哪
- 给定会重复的无序数组`array`，输出所有和为给定值`target`的两元数组下标，时间复杂度O(n)。
如`list=[2,2,3,1,3]; target=4`，输出`[[0,1], [2,3],[3,4]]` 
- js的Map和C++的map/hashmap区别在哪？

三面

- 前两面体验如何
- 为什么不跨专业考计算机的研究生
- 你觉得前端和后端的差别在哪，前端哪些地方需要考虑性能和体验优化
- 最擅长的计算机专业课程
- 数据库、编译原理了解得如何
- 学过的最复杂的算法和数据结构分别是什么，KMP的思路大概是什么
- 招聘季是如何准备的，还投了其他什么公司
- 最近在学习什么东西，举一个证明自己学习能力的例子
- 操作系统了解多少：单核的计算机，为什么要多线程，把多个线程合并为一个大的单线程不可以吗，多线程的标准是什么

  * 关于这点，当时答的是应该要按功能划分（如IO事件/CPU密集/回调），但面试官说那会导致各个程序员的划分标准不同。
  * 我觉得更好的回答应该是，既然线程是调度的最小单位，那么就应该按具体使用时划分，保证其原子性。那么如果将多个线程合成一个大线程，会破坏原子性，后续复用和维护就不方便了

- 举一个开发中需要考虑网络拓扑的例子（需要运用底层网络结构的例子）
- 两个链表，找到最先合并的点`e`。（需要明确是值相同就叫merge还是地址相同）

```
 a -> b -> c -> d
                  \
                    e -> f -> g
                  /
      h -> i -> j
```

- 如何判断链表有没有成环，快慢指针相遇的条件是什么，如何确定环的大小

## 🐻百度

一面

- html attribute和property的区别，动态更改property会更新dom吗
- input标签 disable和readonly的区别，提交时有什么差别
- form提交对input的限制
- 跨域的几种情况，重点问了jsonp
- 同步和异步，如何让一个函数异步执行(promise, setTimeout)，task和microtask的区别
- bfc的场景，float是bfc吗
- 手写嵌套数组打平
- 正则实现字符串驼峰化
- ssr
- absolute和fixed的区别
- bind/apply/call，bind的使用场景
- this，use strict下
- 手写debounce

二面

- 接触过express的异步操作吗，node端同步和异步有什么好处
- 手写fs.readFile的promisify
- 手写实现dialog组件打开和关闭（1）fixed；（2）absolute：避免overflow：hidden切割，实现插入根结点，并允许多个dialog嵌套打开
- 跨域，什么样的请求会跨域（没答出来，结论是立即执行的script不会有跨域问题，ajax，canvas等会取资源的会有跨域问题），cors预检的条件
- http状态码

三面

- 为什么来百度
- 对加班的看法
- 对前端行业未来的看法
- 职业规划
- 本科阶段的规划
- 研究生最难的课程
- 本科和研究生花最多精力学习的三个东西，成果如何
- 最丧的事情
- 说一个打破规则的例子
- 最有代表性的前端项目
- 觉得自己在前端方面还有哪些进步空间
- 平时会用到哪些状态码，301和302的区别
- 平时用哪些js库
