# BFC

BFC（Block Formatting context）- 块级格式化上下文。

**可以将它理解为一个箱子（盒子），这个箱子中的元素与外部元素隔离，箱子里的元素不会影响外部的元素，也不受外部元素的影响**（利用这个特性可以消除浮动元素对非浮动的兄弟元素和其子元素带来的影响）。

> 注意：<br/>
> 1. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。<br/>
> 2. 计算BFC的高度时，浮动元素也参与计算。<br/>

#### 如何触发或建立一个BFC?

W3C中定义：
> **浮动元素** 和 **绝对定位元素**，**非块级盒子的块级容器**（例如 inline-blocks, table-cells, 和 table-captions），以及 **overflow 值不为 “visible” 的块级盒子**，都会为他们的内容创建新的 BFC（这时这个元素中的内容就同处在一个BFC中）。

当给某一元素添加以下样式中的任意一个时，就触发了BFC。

1. float: left / right / inherit  也就是除none以外的 **浮动元素**

2. position: absolute / fixed **绝对定位元素**，fixed 是 absolute 的一个子类，也属于绝对定位

3. display: inline-block / table-cell / table-captions
> 需要注意的是:<br/>
> display: table 本身不可以触发 BFC，但是由于 table 会产生匿名盒，而匿名盒的 display: table-cell 特性会触发 BFC，产生新的格式化上下文。<br/><br/>
> 匿名盒：CSS引擎自动生成的盒子，没有名字，不能被 CSS 选择符选中，不能被 CSS 选择符选中意味着不能用样式表添加样式。这意味着所有继承的 CSS 属性值为 inherit ，所有非继承的 CSS 属性值为 initial

4. overflow: hidden / auto / scroll / inherit

##### 示例 - 自适应两栏布局
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/jgv5h01k/5/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### 示例 - 清除内部浮动
<iframe width="100%" height="200" src="//jsfiddle.net/stonebreaker/qjv8xe1a/2/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### 示例 - 防止边距重叠
<iframe width="100%" height="460" src="//jsfiddle.net/stonebreaker/ct7Lp0ew/6/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

参考：
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html
