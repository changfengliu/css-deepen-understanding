(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{241:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器优先级计算规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器优先级计算规则"}},[t._v("#")]),t._v(" 选择器优先级计算规则")]),t._v(" "),a("p",[t._v("假设存在 "),a("strong",[t._v("a-b-c-d")]),t._v(" 四个位置，一个选择器的优先级计算规则 (规则如下):")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("count 1 if the declaration is from is a 'style' attribute rather than a rule with a selector, 0 otherwise (= a)。")])]),t._v(" "),a("li",[a("p",[t._v("行内样式 a+1")])]),t._v(" "),a("li",[a("p",[t._v("count the number of ID attributes in the selector (= b)。")])]),t._v(" "),a("li",[a("p",[t._v("ID选择器 b+1")])]),t._v(" "),a("li",[a("p",[t._v("count the number of other attributes and pseudo-classes in the selector (= c)。")])]),t._v(" "),a("li",[a("p",[t._v("属性相关的选择器(与html属性相关的选择器)与伪类选择器 c+1")])]),t._v(" "),a("li",[a("p",[t._v("count the number of element names and pseudo-elements in the selector (= d)。")])]),t._v(" "),a("li",[a("p",[t._v("tag选择器与伪元素选择器 d+1")])])]),t._v(" "),a("p",[a("strong",[t._v("a-b-c-d")]),t._v(" 的值确定好后，将它们按数值系统的次序拼接到一块，而后与其它选择器的 "),a("strong",[t._v("a-b-c-d")]),t._v(" 值比较大小以确定优先级，如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=0 d=0 -> 优先级 = 0,0,0,0 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=0 d=1 -> 优先级 = 0,0,0,1 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li::first-line")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul li")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul ol+li")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=0 d=3 -> 优先级 = 0,0,0,3 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1 + *[rel=up]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=1 d=1 -> 优先级 = 0,0,1,1 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul ol li.red")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=1 d=3 -> 优先级 = 0,0,1,3 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li.red.level")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=0 c=2 d=1 -> 优先级 = 0,0,2,1 */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#x34y")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=0 b=1 c=0 d=0 -> 优先级 = 0,1,0,0 */")]),t._v("\n style="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a=1 b=0 c=0 d=0 -> 优先级 = 1,0,0,0 */")]),t._v("\n")])])]),a("h5",{attrs:{id:"示例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例："}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("STYLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#x97z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("STYLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BODY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("P")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x97z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("BODY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v('In the above example, the color of the P element would be green. The declaration in the "style" attribute will override the one in the STYLE element because of cascading rule 3, since it has a higher specificity.')]),t._v(" "),a("p",[t._v("在一个拥有足够大的进制的计数系统中，连接abcd四个数，确定选择器的优先级。\n注：此处如果说，abcd是十进制是不正确的，如果abcd中的某个位置的计数超过9个，则十进制不能满足需求。\n这里 abcd 只是在不同的位置上计数，比较优先级时，优先从高阶位上比较，只要计算大，则确定优先级。 无进位特性。")]),t._v(" "),a("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/stonebreaker/L3xg6n9r/10/embedded/html,result/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),a("p",[t._v("关于 html 样式性属性的优先级")]),t._v(" "),a("p",[t._v("UA可能支持一些样式相关的属性。这些样式上的属性会被转化为优先级为0的CSS规则，插入到开发者提供的样式规则的最前面。所以他们可能会被后续的开发者样式覆盖。如:")]),t._v(" "),a("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/stonebreaker/t7kmynu1/2/embedded/html,result/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),a("p",[t._v("参考：\nhttps://www.w3.org/TR/CSS2/cascade.html#specificity")])])}),[],!1,null,null,null);s.default=n.exports}}]);