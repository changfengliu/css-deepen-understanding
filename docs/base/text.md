# CSS基础

#### 样式分类

从定义者角度看，分为：
- 浏览器默认样式
- 用户样式（开发者样式）

从引入方式看，分为：
- 行内样式
- 嵌入样式
- 外部文件
- @import进来的样式

#### UA样式重置

由于浏览器等终端会为元素添加一些默认样式，可使用reset.css使UI风格在不同的环境下，更加一致.

> * CSS 定义元素的样式
> * HTML 从语义的角度定义元素，如 paragraph / list / heading / link / image / form / …


#### CSS 文本处理

**字体(font)**
- font-family
- font-size
- font-style: normal/italic/oblique/inherit
- font-variant: normal/small-caps/inherit
- font-weight

**文本颜色**
- color

**排版**
- 水平
	- text-align: left/center/right/justify/inherit
	- **text-indent**: length(px/em)/percentage(%)/inherit
	- direction: ltr/rtl/inherit

- 垂直
	- line-height
	- vertical-align（specifies the vertical alignment of an inline or table-cell box）

- 空白处理
	- **letter-spacing**
	- word-spacing
	- **white-space**（元素内的空白）:
		* normal
		* pre
		* nowrap（禁止换行）
		* pre-wrap
		* pre-line
		* inhert
	- tab-size：设置pre、textarea等元素的缩进长度

- 折行处理
	- word-break
	- **word-wrap/overflow-wrap**: normal/break-wrod

> 注：word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 overflow-wrap 。 word-wrap 现在被当作 overflow-wrap 的 “别名”。

**装饰**
- text-decoration
- text-shadow

**变换**
- **text-transform**: none/capitalize/uppercase/lowercase/inherit

#### CSS 常用单位

- pixel - px
- percentage - %
- em - 相对于当前元素内文本的字体尺寸。
- rem - 相对于根元素(即html元素)font-size计算值的倍数。
- vw - viewport width，视窗口被均分为100单位的vw。

> 避免使用绝对单位

##### 1.相对单位示例
<iframe width="100%" height="280" src="//jsfiddle.net/stonebreaker/ncrb5w3g/19/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### 2.rem 在移动端的使用
<iframe width="100%" height="960" src="//jsfiddle.net/stonebreaker/2Lozbxj9/3/embedded/js,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### 样式表与行为

##### pointer-events
pointer-events:none 可以阻止元素响应鼠标事件，鼠标可‘穿透’该元素，就好像它不存在一样。

具体用法参考：
- https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
- https://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript/

##### 分页打印
``` CSS
.page-break{
	page-break-before:always;
}
```
