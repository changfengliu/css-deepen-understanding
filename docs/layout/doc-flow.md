# 文档流

Block元素：独占一行，默认宽度为父元素的宽度，即100%。
Inline元素：行内元素，宽度随元素的内容而变化。
	width/height无效
	padding-top/padding-bottom/margin-top/margin-bottom不影响文档流，即不产生边距效果。
	不可以容纳Block元素

<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/rj73mnt2/9/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

所谓的文档流(Normal Document Flow)，指的是元素排版布局过程中，元素会自动从左往右，从上往下的流式排列。

脱离文档流，也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。

目前只有绝对定位absolute和浮动float才会脱离文档流。

---部分无视和完全无视的区别？需要注意的是，使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围(可以说是部分无视)。而对于使用absolute position脱离文档流的元素，其他盒子与其他盒子内的文本都会无视它。(可以说是完全无视)





文档流是指html文档加载解析时从上到下，从左向右，但相对于盒子模型来说，浮动后脱离文档流，但是没有脱离文本流。
但是如果设置了绝对定位，元素既会脱离文本流也会脱离文档流。如：
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/jg4Lunw8/4/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>



标准按文件流的规则有：

网页解析顺序 :上 - > 下 左 -> 右
块级元素和行内元素的规则:
空白折叠现象
高矮齐，底边对其
单词写满一行，自动换行。
如果单词没有写完(没有空格)，那么单词不换行。



关于空白折叠：
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/2u1r6tw4/13/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

注意：多个空白折叠成一个空格，有时候是理想情况，有时候这个空格也不想要，此时可以通过 font-size:0/word-spacing:-4px/float等方式实现。【【【有个不中用的 white-space-collapse: discard;  都不支持



腾讯面试官问的一个问题。

谈到float还有position中的absolute和fixed脱离文本流的时候，问到底是脱离文档流还是文本流


文档流是相对于盒子模型讲的
文本流是相对于文子段落讲的
元素浮动之后，会让它跳出文档流，也就是说当它后面还有元素时，其他元素会无视它所占据了的区域，直接在它身下布局。但是文字却会认同浮动元素所占据的区域，围绕它布局，也就是没有拖出文本流。
但是绝对定位后，不仅元素盒子会拖出文档流，文字也会出文本流。那么后面元素的文本就不会在认同它的区域位置，会直接在它后面布局，不会在环绕。
当然你可以使用 index-z 来让底部的元素到上面来，类似于一个图层的概念






哪些CSS不占空间？

这么表述虽然不准确，但却最直观的。如果你阅读面广泛，可能已经看到最近的这篇文章：CSS Things That Don’t Occupy Space 的长篇总结：

1. 绝对定位的元素：即 position:absolute; 以及 position:fixed;
2. 有偏移的相对定位的元素，指的是偏移后的元素不影响布局
3. outlines
4. Transforms变换属性偏移的元素
5. 各种阴影属性
6. 其他杂项：WebKit反射属性/IE私有滤镜/text-decoration/display: none

其实是一个非常有趣的列表，作者甚至把 text-decoration 和 display: none 都包含在内…但其实，就如其所说，“不占空间”的说法是不准确甚至是不正确的。这些元素最多只是不影响流，而且其中很多项是牵强的。

精简一下最主要的应该只剩下 绝对定位/outline/阴影 三者。值得一提的是，虽然定义很早就表明，“阴影不会触发滚动条，也不会增加可滚动区的大小”，但是早期的Firefox在实现的时候是错误的。

不得不承认，这一题其实是拿来凑数的:) 当然多少也为下面本期“最蛋疼”问题做一个小小的铺垫～
