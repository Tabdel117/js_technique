# 总结

## CSS

### 盒模型

当头部的doc声明缺失的时候，部分IE内核的浏览器则会触发怪异模式

* 标准盒模型`总宽度= width + margin(左右) + padding(左右) + border(左右)`
* 怪异盒模型`总宽度= width + margin(左右)`

```css
box-sizing: content-box || border-box || inherit;
```

clientWidth和clientHeight不包括滚动条（overflow: scroll）的宽度，但包括padding

### 行内元素，块元素

常见的块级元素: div, form, table, p, pre, h1~h6, dl(术语定义), dt, dd, ol, ul 等。

常见的内联元素: span, a, strong(粗体), em(斜体), label, input, select, textarea, img, br 等

```css
display: none
         inline|block|inline-block
         table|flow|flex|grid|ruby|
         run-in 根据下一个元素来决定
```

* display:block
  * block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
  * block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
  * block元素可以设置margin和padding属性。
* display:inline
  * inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
  * inline元素设置width,height属性无效。
  * inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
* display:inline-block
  * 简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。

### 浮动

* `float: left|right|inline-start|inline-end` 指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）

* `clear: left|right|both` 指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面
  * 当应用于非浮动块时，它将非浮动块的边框边界移动到所有相关浮动元素外边界的下方。这个非浮动块的垂直外边距会折叠,浮动元素的垂直外边距将不会折叠
  * 当应用于浮动元素时，它将元素的外边界移动到所有相关的浮动元素外边框边界的下方。这会影响后面浮动元素的布局，后面的浮动元素的位置无法高于它之前的元素。

如果一个元素里只有浮动元素，那它的高度会是0。如果你想要它自适应即包含所有浮动元素，那你需要清除它的子元素。一种方法叫做clearfix，即clear一个不浮动的`::after`伪元素。

```css
#container::after {
  content: "";
  display: block;
  clear: both;
}
```

也可以利用 `overflow: hidden`, 参考[bfc](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

### [响应式布局](https://juejin.im/post/5caaa230e51d452b672f9703)

* 使用视图的meta标签来进行重置

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

* 媒体查询

```css
@media（条件1）and (条件2) { 样式 }
@media（条件1),  (条件2) { 样式 }
```

* 宽度、字体等使用百分比、`rem`，图片使用`srcset`或background-image
* `vm`,`vh`表示相对于视图窗口的宽度和高度

### [居中](https://mp.weixin.qq.com/s/UxY7VWqMMOjvgE6L_dlixA)

### 省略号

* 单行

```css
white-space: nowrap;//不换行
text-overflow: ellipsis;//省略号
overflow: hidden;
```

* 多行

```css
display: -webkit-box;//必须
-webkit-box-orient: vertical;//排列方式，必须
-webkit-line-clamp: 3;//行数
text-overflow: ellipsis;
```

### 样式继承

* 不可继承的：display、margin、border、padding、background、height、width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after(分页符)、page-break-before和unicode-bidi。
* 所有元素可继承：visibility、cursor。
* 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
* 块状元素可继承：text-indent(首行缩进)、text-align。
* 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
* 表格元素可继承：border-collapse。

### 样式

* 内联

```html
<p style=“color: red” />
```

* 外部样式表

```html
<link rel=“stylesheet” type=“text/css” href=“style.css”>
```

* 内部样式表

```html
<head>
    <style type="text/css">
        body { background-color: red }
        p { margin-left: 20px }
    </style>
</head>
```

内联定义最高、内部CSS次之、外部CSS优先级最低

[link与@import](https://www.jianshu.com/p/dd108656da2b)

### 三角形

```css
 .triangular {
    width: 0;
    height: 0;
    Border-top: 5px solid red;
    Border-left: 5px red transparent;
    Border-right: 5px red transparent;
  }
```

### 其他特别属性

* caret-color 光标颜色
* text-overflow: visible|clip|ellipsis|custom string
* text-decoration: line-though|underline|overline|wavy|dotted|blink
* text-transform 如何将元素的文本大写 capitalize|uppercase|lowercase|none|full-width
* text-align: left|right|center|justify(文字向两侧对齐)|start|end|match-parent

### 选择器

优先级 important>内联 >#ID>.类 >标签 |伪类|属性选择 >伪对象 >继承 >通配符

|选择器|选择的元素|
|-----|---------|
|A E|元素A的任一后代元素E (后代节点指A的子节点，子节点的子节点，以此类推)|
|A > E|元素A的任一子元素E(也就是直系后代)|
|E:first-child|任一是其父母结点的第一个子节点的元素E|
|B + E|元素B的任一下一个兄弟元素E|
|B ~ E|B元素后面的拥有共同父元素的兄弟元素E|

### less

* css 的缺憾：
  * 语法不够强大，比如无法嵌套书写导致模块化开发中需要书写很多重复的选择器；
  * 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护。
* Less 受 Sass 的影响非常大，以「 *.less 」为扩展名
  * 变量：就像写其他语言一样，免于多处修改。
  * 混合：class 之间的轻松引入和继承。
  * 嵌套：选择器之间的嵌套使你的 less 非常简洁。
  * 函数&运算：就像 js 一样，对 less 变量的操控更灵活

## html

`Url: protocol://域名(host):port/path/to/file?参数=值&参数2=值2#锚`

### 事件

捕获—到达目标—冒泡

* 鼠标 click, dblclick, contextmenu, mouseover, mouseout, mousedown, mouseup, mousemove. 左键单击：mousedown-mouseup-click
* 表单 submit, focus
* Document: DOMContentLoaded
* CSS: transitioned

不冒泡的事件：blur、focus、load、unload

* Focus/blur
  * 不可以通过在 onblur 事件处理器里调用 event.preventDefault() 来“阻止失去焦点”，因为 onblur 事件处理器是在元素失去焦点的之后运行的
  * 使用tabindex让不可以聚焦的div/span等可以聚焦（0最后一个，-1忽略）
  * 不支持冒泡 -> 解决办法：1）捕获阶段可以向下传递，因此可以form.addEventListener("focus", () => form.classList.add('focused'), true);其中最后一个参数true表明放置在捕获阶段 2）改用可以冒泡的focusin,focusout

### [全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)

* [drag & drop](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
* dir 文字方向
* data-*
* tabindex

### manifest

离线缓存 **deprecated**

* 建议使用[service worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)代替

### [web worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)

* 主线程和 worker 线程相互之间使用`postMessage()`方法来发送信息(数据的交互方式为传递副本，而不是直接共享数据)
* 长轮询：浏览器只需启动一个HTTP请求，其连接的服务器会“hold”住此次连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的Http请求

### 上传

* 表单

```html
  <form method="POST" action="example/url" enctype="multipart/form-data">
    <input type="file" id="upload" onchange="getFullName()">
  </form>
  <script>
    function getFullName() {
      …document.getElementById(‘upload’).value
    }
  </script>
```

* 文件

### [加载和解析](https://juejin.im/post/5b88ddca6fb9a019c7717096)

CSS加载阻塞JS执行和dom的渲染（不阻塞dom的解析），JS加载阻塞CSS加载

|类型|顺序|DOMContentLoaded|
|---|---|----------------|
|async|加载优先顺序。脚本在文档中的顺序不重要 —— 先加载完成先运行|无关紧要。可能在文档还未完全下载前加载执行。如果脚本很小或者来自于缓存，同时文档又足够长，就会发生这种情况|
|defer|文档顺序（它们在文档中的位置）|在 DOMContentLoaded 之前且在文档加载解析之后执行（可能需要等待）|

[aysnc和defer](http://zh.javascript.info/script-async-defer)

* 延迟加载js
  * defer 立即下载，但脚本会被延迟到整个页面都解析完毕之后再执行。脚本执行有上下顺序
  * async 不让页面等待脚本下载和执行，从而异步加载页面其他内容。（同时进行html解析和js下载，但js下载完成后立即停止html解析）脚本执行无上下顺序，先下载的先执行
  * 动态创建dom：代码放在`</body>`前
  * settimeout
  * 让js最后加载：把js外部引入的文件放到页面底部，来让js最后引入，从而加快页面加载速度

```html
<script src=“text.js” defer=“defer”></script>
<script src=“text.js” async></script>
```

### load

* window.onload

默认情况下，它会在整个页面加载时触发，包括其内容(图像，css，脚本等)

在一些浏览器中，它现在接管document.onload的作用，并在DOM准备好时触发。

* document.onload

DOM准备就绪时调用，可以在加载图像和其他外部内容之前

Img, link, script都提供load和error事件来跟踪加载，只有iframe无论成功与否都会执行onload

### 回流和重绘

```
Html —parse-> dom   -|
Css —parse-> cssom  -|—attach——> render tree  ——>layout——> paint
```

回流：当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程。

重绘：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘

position为absolute的节点，不在正常流内（无论他的参考系是root还是relative的节点），因此对其进行改变不会导致reflow

### cookie

* `expires`, `max-age`
* cookies 是基于域名的，它们不是通过协议来区分的。设置secure，保证只在https协议下传送
* 设置`samesite`防止xsrf
* 子域访问： 明确写`document.cookie = "user=John; domain=site.com"`

### localstorage/sessionstorage

不会过期,用于同源的不同窗口交换消息 onstorage事件

|localStorage|sessionStorage|
|------------|--------------|
|同源的所有标签页和窗口之间共享数据|作用域在一个浏览器标签下，包括同源的 iframes|
|浏览器重启后数据仍然保留|页面刷新后数据仍然保留（不包括标签页关闭）|

### H5新标签

[参考](https://medium.com/@emmawedekind/10-html-tags-you-didnt-know-you-needed-2f9d288707ec)

article nav header footer source audio

### 鉴权

1. HTTP basic authentication

```html
发：     Get /index.html HTTP/1.0
        Host:www.google.com
                \|/
收：     HTTP/1.0 401 Unauthorized
        Server: SokEvo/1.0
        WWW-Authenticate: Basic realm=”google.com”
        Content-Type: text/html
        Content-Length: xxx
                \|/
                登陆
发：     Get /index.html HTTP/1.0
        Host:www.google.com
        Authorization: Basic d2FuZzp3YW5n  ->加密后的用户名及密码
                \|/
收：        所请求资源
```

2. Session-cookie（需要cookie配合）

* 服务器在接受客户端首次访问时在服务器端创建session，然后保存session然后给这个session生成一个唯一的标识字符串,然后在响应头中种下这个唯一标识字符串。
* 签名。这一步只是对sid进行加密处理，服务端会根据这个secret密钥进行解密。（非必需步骤）
* 浏览器中收到请求响应的时候会解析响应头，然后将sid保存在本地cookie中，浏览器在下次http请求头中会带上该域名下的cookie信息
* 服务器在接受客户端请求时会去解析请求头cookie中的sid，然后根据这个sid去找服务器端保存的该客户端的session，然后判断该请求是否合法。

3. token验证（因此客户端不一定是浏览器）

* 客户端使用用户名跟密码请求登录
* 服务端收到请求，去验证用户名与密码
* 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
* 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
* 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
* 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据

4. OAuth开放授权

允许用户授权第三方网站访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方网站或分享他们数据的所有内容，为了保护用户数据的安全和隐私，第三方网站访问用户数据前都需要显式的向用户征求授权。（如QQ，微信）

* 用户访问应用程序；
* 应用程序提示用户通过Facebook/Google/Twitter方式登陆；
* 用户被重定向到了认证服务器，同时应用程序附加自己的client id给认证服务器；
* 用户在认证服务器上登陆，登陆成功之后提示用户是否Grant应用程序访问资源，用户允许后被重定向到应用程序；
* 当回到应用程序后，认证服务器将用户导向到redirect URI，同时附加authorization code；
* 当redirect URI被访问后，应用程序和认证服务器就直接相连了，应用程序向认证服务器发送authorization code、client id、client password；
* 认证服务器接受这些信息后，返回access token；
* 应用程序之后通过access token访问资源信息；

### XSS, CSRF

* XSS:Cross-Site Scripting，跨站脚本攻击。代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等
  * 存储型XSS: 注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。
  * 反射型XSS: 当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web服务器将注入脚本，比如一个错误信息，搜索结果等 返回到用户的浏览器上。浏览器会执行这段脚本。因为它认为这个响应来自可信任的服务器。
  * 基于DOM的XSS: 被执行的恶意脚本会修改页面脚本结构。

  * 防护策略：输入过滤，转义html，尽量使用 .textContent、.setAttribute()

* CSRF: 诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

  * GET类型 `<img src="http://bank.example/withdraw?amount=10000&for=hacker" >`
  * 链接型 `<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank"> 重磅消息！！ <a/>`
  * POST类型（表单）
  * 防护策略: 1) 阻止不明外域的访问: 同源检测|Samesite Cookie; 2) 提交时要求附加本域才能获取的信息: CSRF Token|双重Cookie验证

```html
<form action="http://bank.example/withdraw" method=POST>
    <input type="hidden" name="account" value="xiaoming"/>
    <input type="hidden" name="amount" value="10000"/>
    <input type="hidden" name="for" value="hacker"/>
</form>
<script>document.forms[0].submit(); </script>
```

* 点击挟持攻击：在button上覆盖透明的iframe。

### 缓存

* 请求头/响应头
  * Pragma 通用头
  * max-age（不带这个信息则寻找expire）
  * Expires 响应头
  * Cache-Control: private/public 通用头
  * Last-Modified 响应头
  * If-Modified-Since 请求头
  * ETag 响应头
  * If-None-Match 请求头
* 强缓存：命中直接读取 expire之内或cache-control 的max-age之内
* 协商缓存：强缓存未命中则发http，询问协商请求有没有命中。请求附加If-none-match. 若收到 304 not modified则表示缓存新鲜

有些情况下仅判断最后修改日期来验证资源是否有改动是不够的

* 存在周期性重写某些资源，但资源实际包含的内容并无变化；
* 被修改的信息并不重要，如注释等；
* Last-Modified无法精确到毫秒，但有些资源更新频率有时会小于一秒。

## js

### 函数原型 F.prototype

意味着F上有一个名为`prototype`的常规属性。仅在 new F 调用时使用，它为新对象的`[[Prototype]]`赋值

如果在创建之后`F.prototype`属性有了变化，那么 new F 创建的新对象也将随之拥有新的`[[Prototype]]`。但已经存在的对象将保持旧有的值。

默认的`prototype`是一个只有属性`constructor`的对象，它指向函数本身。`F.prototype = { constructor: F };`。 为了确保正确的`constructor`，我们可以选择添加/删除属性到默认 `prototype` 而不是将其整个覆盖

```javascript
function Rabbit() {}
Rabbit.prototype.jumps = true
```

### [原型链](http://zh.javascript.info/native-prototypes) Object.prototype

```javascript
arr.__proto__ === Array.prototype
arr.__proto__.__proto__ === Object.prototype
arr.__proto__.__proto__.__proto === null

function f() {}
f.__proto__ == Function.prototype
f.__proto__.__proto__ == Object.prototype

class Animal {}
class Rabbit extends Animal {}

Rabbit.__proto__ === Animal // 对于静态属性和静态方法
Rabbit.prototype.__proto__ === Animal.prototype // 对于普通方法
```

### 原型方法

* Object.create(proto, descriptors) —— 利用 proto 作为 `[[Prototype]]` 和可选的属性描述来创建一个空对象。
* Object.getPrototypeOf(obj) —— 返回 obj 对象的 `[[Prototype]]`。
* Object.setPrototypeOf(obj, proto) —— 将 obj 对象的 `[[Prototype]]` 设置为 proto。

* Object.getOwnPropertyNames(obj) —— 返回包含所有字符串属性名的数组，包括非可枚举属性
* obj.hasOwnProperty(key) —— 区分继承属性

* instanceof typeof 原理
* constructor

Object.create和new的区别：通过Object.create() 创建的对象竟然无法访问对原来的对象属性

```javascript
function _create (obj) {
    let F = function () {}
    F.proptotype = obj;
    return new F();
}
function _new () {
    let args = [].slice.call(arguments);
    let constructor = args.shift();
    let context = Object.create(constructor.proptotype);
    let result = constructor.apply(context, args);
    return (typeof result === ‘object’ && result !== null) ? result : context;
}
```

判断一个类：constructor.name, toString, instanceOf

### 属性(http://zh.javascript.info/property-descriptors)

对象的属性--默认为`true`

* 数据属性
  * value
  * writable 是否只读
  * enumerable 是否可在循环`for in`中列出
  * configurable 属性是否可删除
* 访问器
  * get 一个没有参数的函数，在读取属性时工作，
  * set 带有一个参数的函数，当属性被设置时调用，
  * enumerable 与数据属性相同，
  * configurable 与数据属性相同

* 通过`Object.getOwnPropertyDescriptor(obj, propertyName)`获取
* 通过` Object.defineProperty(obj, propertyName, descriptor)`定义或更新(一个不可配置的属性不能被删除或修改)，没有提供的标志默认为`false`

```javascript
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});
```

### 数据类型

* undefined 和 null，typeof null， null存在哪里

https://juejin.im/entry/584918612f301e005716add6

* JSON.Stringify有什么缺陷

如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；

如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；

如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；

如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null 

JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；

Nul和undefined区别

* null转为数值0
* undefined转为NaN

| |null|undefined|
|---|----|--------|
|含义|"没有对象"，即该处不应该有值|"缺少值"，就是此处应该有一个值，但是还没有定义|
|典型用法| 作为函数的参数，表示该函数的参数不是对象；作为对象原型链的终点|变量被声明了，但没有赋值时，就等于undefined；调用函数时，应该提供的参数没有提供，该参数等于undefined；对象没有赋值的属性，该属性的值为undefined；函数没有返回值时，默认返回undefined。|

```javascript
Object.getPrototypeOf(Object.prototype) // null
```

### Date

Date 自世界标准时间（UNIX epoch time）1970年1月1日起的毫秒数（当地时间）

UTC世界协调时/GMT格林尼治时间

Date.length 7 (任何一个function的length指的是其参数个数，Date的length包括year, month, day, hour, minute, second, millisecond共七个，month从0开始，其他从1开始)

```javascript
Date.now()自标准时间经过的毫秒数
    .parse()解析日期字符串，返回毫秒数
    .UTC()
```

原型方法有

* getDate() 1-31
* getDay() 0-6
* getFullYear()  可以改为set，如setFullYear；可以再加UTC，如getUTCFullYear
* getHours/getMilliseconds/getMonth/getSeconds
* getTime 返回从UTC的世界标准时间到该日期毫秒数
* getTimezoneOffset

### nodejs内置模块

* `http` http.createServer().listen()
* `url` url.parse
* `fs` fs.readFile fs.readFileSync
* `querystring` qs.stringify qs.parse
* `events` event.on event.emit event.removeAllListeners
* `express` app=express(); app.use app.get

### for循环

* `For (let i = 0; i < 5; i ++) {}`
* `For in` 遍历原型链上的属性
* `forEach`
* `For of` 遍历数组

### 全局函数

* decodeURI()
* decodeURIComponent()
* encodeURI()
* encodeURIComponent()
* escape() 对字符串进行编码。
* eval()
* isFinite()
* isNaN()
* Number()
* parseFloat()
* parseInt()
* String()
* unescape() 对由 escape() 编码的字符串进行解码。

### [浏览器的线程和进程](https://segmentfault.com/a/1190000012925872)

* js引擎线程
* GUI渲染线程
* 事件触发线程

### 浏览器事件循环

事件循环可以简单描述为

* 函数入栈，当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空;
* 在此期间WebAPIs完成这个事件，把回调函数放入CallbackQueue中等待;
* 当执行栈为空时，Event Loop把CallbackQueue中的一个任务放入Stack中,回到第1步。

* 宏任务（多个）：setTimeout，setInterval，setImmediate，I/O，UI rendering
* 微任务（单个）：process.nextTick，promises
每次event loop循环执行栈完成宏任务后，会继续执行完相应的微任务

关键：函数执行时永远不会被抢占

* 栈： 函数调用形成了栈帧（frame）
* 堆：对象被分在堆中（一大块非结构化的内存区域）
* 队列：一个 js运行时包含了一个待处理的消息队列。每一个消息都关联着一个用以处理这个消息的函数。在事件循环期间的某个时刻，运行时从最先进入队列的消息开始处理队列中的消息。函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。

setTimeout 两个参数：待加入队列的消息和一个延迟（可选，默认为 0）。这个延迟代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间

### [nodejs事件循环](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

* 定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数。
* 待定回调：执行延迟到下一个循环迭代的 I/O 回调。
* idle, prepare：仅系统内部使用。
* 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 setImmediate() 排定的之外），其余情况 node 将在此处阻塞。
* 检测：setImmediate() 回调函数在这里执行。
* 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。

### 垃圾回收

引用计数，标记-清除，可达性

### 闭包

通过函数闭包来保护私有属性并提供公用接口

### XMLHttpRequest

```javascript
xhr.open(method, URL, async, user, password)
xhr.send([body])
xhr.abort(); // terminate the request
xhr.timeout = 10000;
```

事件

* loadstart — 请求开始。
* progress — 浏览器接收数据包（会进行多次）。
* abort — 通过 xhr.abort() 中止请求。
* error — 出现网络错误，请求失败。
* load — 请求成功，未发生错误。
* timeout — 请求因超时取消（如果设置了 timeout）。
* loadend — 请求完成（有无错误皆可）。
* readystatechange — 请求状态发生改变（后面会提到）。

### 浮点数计算不精确

* 原因

### 防抖和节流

* 节流throttle：指定间隔内只会执行一次任务。如果在间隔内再次触发，会执行第一次的。

```javascript
function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}
```

* 防抖debounce：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。若在间隔内再次触发，会重新计时（由于clearTout了）

```javascript
function debounce(fn, interval = 300) {
    let timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, interval);
    };
}
```

## 网络

### DNS

1. DNS系统中，常见的资源记录类型有

* 主机记录（A记录）：用法于名称解析的重要记录，它将特定的主机名映射到对应主机的IP地址上。
* 别名记录（CNAME记录）: 用于将某个别名指向到某个A记录上
* IPv6主机记录（AAAA记录）: 与A记录对应，用于将特定的主机名映射到一个主机的IPv6地址。
* 服务位置记录（SRV记录）: 用于定义提供特定服务的服务器的位置，如主机（hostname），端口（port number）等。
* NAPTR记录：提供了正则表达式方式去映射一个域名

2. DNS作用：主机名->IP的映射

* 主机别名
* 邮件服务器别名
* 负载分配

3. DNS缓存

4. prefetch: 空闲时解析dns的ip

* prefetch：在浏览器空闲时下载用户指定需要的内容放在缓存内（由于http1.1的并发数限制，prefetch太多可能阻塞script）
* preload：声明当前页面需要哪些资源

### [get和post](https://www.zhihu.com/question/28586791/answer/767316172)

### 请求头

* connect: upgrade用于升级协议，如http升级到websocket
* referer：前一个页面（导致了现在这个请求）
* content-disposition：下载文件用，如`content-disposition: attachment, filename =“”` 
* location：用来进行重定向
* content-type：浏览器根据该值确定如何显示返回的内容。
  * [MIME](https://zh.wikipedia.org/wiki/多用途互聯網郵件擴展)
* application/x-www-form-urlencoded（使用HTTP的POST方法提交的表单）
* multipart/form-data（同上，但主要用于表单提交时伴随文件上传的场合）
  * multipart和application的区别是，前者可以传各种类型数据，后者只能传二进制

Type/subtype

如type有：text, application, multipart, image, audio, video

### [状态码](https://www.restapitutorial.com/httpstatuscodes.html)

* 1xx Informational
  * 100 Continue
  * 101 Switching Protocols
  * 102 Processing (WebDAV)
* 2xx Success
  * 200 OK
  * 201 Created
  * 202 Accepted
  * 203 Non-Authoritative Information
  * 204 No Content
  * 205 Reset Content
  * 206 Partial Content
  * 207 Multi-Status (WebDAV)
  * 208 Already Reported (WebDAV)
  * 226 IM Used
* 3xx Redirection
  * 300 Multiple Choices
  * 301 Moved Permanently
  * 302 Found
  * 303 See Other
  * 304 Not Modified
  * 305 Use Proxy
  * 306 (Unused)
  * 307 Temporary Redirect
  * 308 Permanent Redirect (experimental)
* 4xx Client Error
  * 400 Bad Request
  * 401 Unauthorized
  * 402 Payment Required
  * 403 Forbidden
  * 404 Not Found
  * 405 Method Not Allowed
  * 406 Not Acceptable
  * 407 Proxy Authentication Required
  * 408 Request Timeout
  * 409 Conflict
  * 410 Gone
  * 411 Length Required
  * 412 Precondition Failed
  * 413 Request Entity Too Large
  * 414 Request-URI Too Long
  * 415 Unsupported Media Type
  * 416 Requested Range Not Satisfiable
  * 417 Expectation Failed
  * 418 I'm a teapot (RFC 2324)
  * 420 Enhance Your Calm (Twitter)
  * 422 Unprocessable Entity (WebDAV)
  * 423 Locked (WebDAV)
  * 424 Failed Dependency (WebDAV)
  * 425 Reserved for WebDAV
  * 426 Upgrade Required
  * 428 Precondition Required
  * 429 Too Many Requests
  * 431 Request Header Fields Too Large
  * 444 No Response (Nginx)
  * 449 Retry With (Microsoft)
  * 450 Blocked by Windows Parental Controls (Microsoft)
  * 451 Unavailable For Legal Reasons
  * 499 Client Closed Request (Nginx)
* 5xx Server Error
  * 500 Internal Server Error
  * 501 Not Implemented
  * 502 Bad Gateway
  * 503 Service Unavailable
  * 504 Gateway Timeout
  * 505 HTTP Version Not Supported
  * 506 Variant Also Negotiates (Experimental)
  * 507 Insufficient Storage (WebDAV)
  * 508 Loop Detected (WebDAV)
  * 509 Bandwidth Limit Exceeded (Apache)
  * 510 Not Extended
  * 511 Network Authentication Required
  * 598 Network read timeout error
  * 599 Network connect timeout error

### 跨域

1. Jsonp: 允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。
2. iframe

* document.domain：用于同一个主域下不同子域之间的跨域请求。把两个页面的document.domain都指向主域就可以了，比如`document.domain='foo.com'`;。
设置好后父页面和子页面就可以像同一个域下两个页面之间访问了。父页面通过`ifr.contentWindow`就可以访问子页面的window，子页面通过`parent.window`或parent访问父页面的window
* window.name：在浏览器不关闭情况下
* location.hash：把传递数据附在url上
* Window.navigator
* postMessage
  * .postMessage(message, targetOrigin)参数说明: message:是要发送的消息，类型为 String、Object ;targetOrigin: 是限定消息接收范围，不限制请使用 '*'
  * 'message', function(e)回调函数第一个参数接收 Event 对象，有三个常用属性:data: 消息;origin: 消息来源地址;source: 源 DOMWindow 对象

3. cors
4. Websocket

### 负载均衡

* HTTP重定向
* 基于DNS->在DNS服务器配置多个A记录
* 反向代理->工作在http层，转发http请求
* 基于IP>工作在传输层，将IP报文转发到整个集群的某台服务器中去
  * Round Robin（轮询）：为第一个请求选择列表中的第一个服务器，然后按顺序向下移动列表直到结尾，然后循环。
  * Least Connections（最小连接）：优先选择连接数最少的服务器，在普遍会话较长的情况下推荐使用。
  * Source：根据请求源的 IP 的散列（hash）来选择要转发的服务器。这种方式可以一定程度上保证特定用户能连接到相同的服务器。

### websocket

 基于tcp GET onopen onmessage onclose onerror

```
GET / HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: example.com
Origin: http://example.com
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```

|WebSocket|EventSource|
| --------|----------|
|双向（Bi-directional）：客户端和服务端都能修改消息| 单向（ One-directional）：仅服务端能发送消息|
|二进制和文本数据|仅文本数据|
|WebSocket 协议|普通 HTTP 协议|

* websocket传文件
用fileReader，将文件分片成blob或arrayBuffer,可以跨源

事件onopen, enclose, onmeassage, onerror

### https

* 非对称加密

### tcp

面向连接、可靠。采用校验和、确认和重发。滑动窗口机制。

* 三次握手 目的是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息
  * 第一次握手(SYN=1, seq=x): 客户端发送一个 TCP 的 SYN 标志位置1的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号(Sequence Number)字段里。发送完毕后，客户端进入 SYN_SEND 状态。
  * 第二次握手(SYN=1, ACK=1, seq=y, ACKnum=x+1): 服务器发回确认包(ACK)应答。即 SYN 标志位和 ACK 标志位均为1。服务器端选择自己 ISN 序列号，放到 Seq 域里，同时将确认序号(Acknowledgement Number)设置为客户的 ISN 加1，即X+1。 发送完毕后，服务器端进入 SYN_RCVD 状态。
  * 第三次握手(ACK=1，ACKnum=y+1)：客户端再次发送确认包(ACK)，SYN 标志位为0，ACK 标志位为1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写ISN的+1。发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED状态，TCP 握手结束。

* 四次挥手
  * 第一次挥手(FIN=1，seq=x)：假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为1的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。发送完毕后，客户端进入 FIN_WAIT_1 状态。
  * 第二次挥手(ACK=1，ACKnum=x+1)：服务器端确认客户端的 FIN 包，发送一个确认包，表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接。发送完毕后，服务器端进入 CLOSE_WAIT 状态，客户端接收到这个确认包之后，进入 FIN_WAIT_2状态，等待服务器端关闭连接。
  * 第三次挥手(FIN=1，seq=y)服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为1。发送完毕后，服务器端进入 LAST_ACK 状态，等待来自客户端的最后一个ACK。
  * 第四次挥手(ACK=1，ACKnum=y+1)：客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入 TIME_WAIT状态，等待可能出现的要求重传的 ACK 包。服务器端接收到这个确认包之后，关闭连接，进入 CLOSED 状态。客户端等待了某个固定时间（两个最大段生命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务器端的 ACK ，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入 CLOSED状态。

## 工程

### react/redux

* provider
* context
* dom diff分层比较
* React fiber:将要执行的 JS 做拆分，保证不会阻塞主线程（Main thread）
* Middleware : store => next => action 
* Selector: export const getCargo = createSelector( );
* Reducer: （store = defaultStore, action） => {} 用combineReducer合并多个reducer
* Store = createStore( reducer, initialState, enhancer) 在根元素上（router外）包一层provider，这样内部的组件均能拿到store
* redux-thunk使其可以发函数
* react-router

函数组件，容器组件（新react hooks的usestate实现有state的函数组件）

给子组件加props

* Functional Component

```typescript
interface ProvidesHeightProps {
  children: (props: ProvidesHeightInjectedProps) => React.ReactElement<any>;
}
interface ProvidesHeightInjectedProps {
   height: number;
}
const ProvidesHeight: React.SFC<ProvidesHeightProps> = ({ children }) => 
 (
  <View>
    {children({ height: 400 })}
  </View>
);
<ProvidesHeight>
  {({ height }) => (
    <NeedsHeight height={height} />
  )}
</ProvidesHeight>
```

* react.cloneElement
  * Parent component更新时，子类也强制re-render（以该组件为根的组件树全部重新render）。这时可以用react.memo来进行缓存
  * react.memo只使用functionalComponent，不适用class（还用shouldComponentUpdate）
  * 相应事件最好用React.useCallback包裹起来，保证不会重新render
  * redux connect后ref失效, 需要用forwardRef然后通过wrappedInstance取到

### 小程序

* 页面
  * onLoad 生命周期函数--监听页面加载
  * onReady 生命周期函数--监听页面初次渲染完成
  * onShow 生命周期函数--监听页面显示
  * onHide 生命周期函数--监听页面隐藏
  * onUnload 生命周期函数--监听页面卸载
  * onPullDownRefresh 页面相关事件处理函数--监听用户下拉动作
  * onReachBottom 页面上拉触底事件的处理函数
  * onShareAppMessage 用户点击右上角转发
  * onPageScroll 页面滚动触发事件的处理函数
  * onTabItemTap  当前是 tab 页时，点击 tab 时触发

* 组件
  * created 组件实例刚刚被创建
  * attached  组件实例进入页面节点树
  * ready 组件在视图层布局完成后
  * moved 组件实例被移动到节点树另一个位置时
  * detached 组件实例被从页面节点树移除时
  * error

### webpack

* webpack tree-shaking
* [webpack构建优化](https://molunerfinn.com/Webpack-Optimize/)

常用配置devtool、entry、 output、module、resolve、plugins、externals

* loader：一个导出为functon的node模块，可以链式传递。常用的loader
  * 样式：style-loader（将css内容输出到页面的style标签中）、css-loader（遍历所有require的css文件，输出文件内容）、less-loader、sass-loader等
  * 文件：raw-loader、file-loader 、url-loader等
  * 编译：babel-loader、coffee-loader 、ts-loader等
  * 校验测试：mocha-loader、jshint-loader 、eslint-loader等
* plugin：一个具有apply方法的js对象，实现loader无法实现的其他事。需要传入new的实例

主要区别

* loader 用于加载某些资源文件。 因为webpack 本身只能打包commonjs规范的js文件，对于其他资源例如 css，图片，或者其他的语法集，比如 jsx， coffee，是没有办法加载的。 这就需要对应的loader将资源转化，加载进来。从字面意思也能看出，loader是用于加载的，它作用于一个个文件上。
* plugin 用于扩展webpack的功能。它直接作用于 webpack，扩展了它的功能。当然loader也变相的扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载。

### babel

babel可以转移语法syntax（箭头函数，class，async），但不可以转移新api（promise，map，set）；polyfill相反。

常用配置presets,包括react，electron等的转码规则

### electron

BrowserWindow, ipcRenderer, download, menu, reload

### [性能优化](https://juejin.im/post/59e1bbc9f265da430f311fb1)

* CSS
  * 避免使用table布局。
  * 尽可能在DOM树的最末端改变class。
  * 避免设置多层内联样式。
  * 将动画效果应用到position属性为absolute或fixed的元素上。
  * 避免使用CSS表达式（例如：calc()）。
* JavaScript
  * 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
  * 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
  * 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
  * 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
  * 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

* 加载优化：
  * 合并css，js
  * 合并小图片，使用雪碧图
  * 缓存(DNS缓存、CDN部署与缓存，http缓存)
  * 使用外联式引用css和js
  * 压缩 gzip
  * 使用首屏加载
  * 按需加载lazy load
  * 滚屏加载
  * 增加loading进度条
  * 减少cookie
  * 避免重定向
  * 异步加载
* css优化
  * Css写在头部，js写在尾部（保证解析DOM的同时解析css文件）
  * 避免图片和iframe的空src
  * 比年重设图片大小
  * 避免在标签中些style
  * 避免css表达式
  * 移除空的css规则
  * 不滥用float
  * 不声明过多的font-size
  * 值为0时不需要单位
  * 避免让选择器看起来像正则表达式
* 图片优化
  * 使用css3，svg，iconfont代替图片
  * 使用srcset
* 脚本优化
  * 减少重绘和回流
  * 缓存dom选择与计算
  * 增加缓存列表长度
  * 尽量使用事件代理，避免批量绑定事件
  * 尽量使用id选择器
  * 使用touchstart，touchend代替click
* 渲染优化
  * html使用viewpoint
  * 减少dom节点
  * 尽量使用css3动画
  * 合理使用requestAnimationFrame代替setTimeout，
  * 适当使用canvas
  * touchmove，scroll会导致多次渲染
  * 使用css3 transition，3D transform， opacaity， webGl，video触发gpu渲染

### 模块化

* commonJS(module, exports, require, global)
    同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。
* AMD(require.config, require，define）
    异步方式加载模块，依赖前置、提前执行
* CMD
    依赖就近、延迟执行

ES6（export，import）

1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

### [MVC](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

* MVC
  * model（数据保存）、 view（用户界面）、controller（业务逻辑）
  * 接受指令可以由view（DOM事件）直接要求model改变；或由controller（改变url触发hashchange事件）要求model改变，此时controller仅为路由
  * view比较复杂
* MVP：presenter
  * view和model间无关系，都通过presenter连接。
  * presenter比较复杂
* MVVM：viewmodel
    采用双向绑定（view改变直接改变了viewmodel）

### 遇到的问题

* scroll

## 算法

### 哈希算法

MD5 SHA1 Hmac AES 公钥算法
