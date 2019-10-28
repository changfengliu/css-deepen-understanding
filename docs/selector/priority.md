# 选择器优先级计算规则

假设存在 **a-b-c-d** 四个位置，一个选择器的优先级计算规则 (规则如下):

- count 1 if the declaration is from is a 'style' attribute rather than a rule with a selector, 0 otherwise (= a)。
- 行内样式 a+1

- count the number of ID attributes in the selector (= b)。
- ID选择器 b+1

- count the number of other attributes and pseudo-classes in the selector (= c)。
- 属性相关的选择器(与html属性相关的选择器)与伪类选择器 c+1

- count the number of element names and pseudo-elements in the selector (= d)。
- tag选择器与伪元素选择器 d+1

**a-b-c-d** 的值确定好后，将它们按数值系统的次序拼接到一块，而后与其它选择器的 **a-b-c-d** 值比较大小以确定优先级，如下：

```css
 *              {}  /* a=0 b=0 c=0 d=0 -> 优先级 = 0,0,0,0 */
 li             {}  /* a=0 b=0 c=0 d=1 -> 优先级 = 0,0,0,1 */
 li::first-line {}  /* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */
 ul li          {}  /* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */
 ul ol+li       {}  /* a=0 b=0 c=0 d=3 -> 优先级 = 0,0,0,3 */
 h1 + *[rel=up] {}  /* a=0 b=0 c=1 d=1 -> 优先级 = 0,0,1,1 */
 ul ol li.red   {}  /* a=0 b=0 c=1 d=3 -> 优先级 = 0,0,1,3 */
 li.red.level   {}  /* a=0 b=0 c=2 d=1 -> 优先级 = 0,0,2,1 */
 #x34y          {}  /* a=0 b=1 c=0 d=0 -> 优先级 = 0,1,0,0 */
 style=""           /* a=1 b=0 c=0 d=0 -> 优先级 = 1,0,0,0 */
```

##### 示例：

```html
<HEAD>
	<STYLE type="text/css">
	  #x97z { color: red }
	</STYLE>
</HEAD>
<BODY>
	<P ID="x97z" style="color: green">
</BODY>
```

In the above example, the color of the P element would be green. The declaration in the "style" attribute will override the one in the STYLE element because of cascading rule 3, since it has a higher specificity.

在一个拥有足够大的进制的计数系统中，连接abcd四个数，确定选择器的优先级。
注：此处如果说，abcd是十进制是不正确的，如果abcd中的某个位置的计数超过9个，则十进制不能满足需求。
这里 abcd 只是在不同的位置上计数，比较优先级时，优先从高阶位上比较，只要计算大，则确定优先级。 无进位特性。

<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/L3xg6n9r/10/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

关于 html 样式性属性的优先级

UA可能支持一些样式相关的属性。这些样式上的属性会被转化为优先级为0的CSS规则，插入到开发者提供的样式规则的最前面。所以他们可能会被后续的开发者样式覆盖。如:

<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/t7kmynu1/2/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

参考：
https://www.w3.org/TR/CSS2/cascade.html#specificity
