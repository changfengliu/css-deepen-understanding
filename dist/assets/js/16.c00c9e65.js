(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{223:function(t,e,l){"use strict";l.r(e);var r=l(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"bfc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),l("p",[t._v("BFC（Block Formatting context）- 块级格式化上下文。")]),t._v(" "),l("p",[l("strong",[t._v("可以将它理解为一个箱子（盒子），这个箱子中的元素与外部元素隔离，箱子里的元素不会影响外部的元素，也不受外部元素的影响")]),t._v("（利用这个特性可以消除浮动元素对非浮动的兄弟元素和其子元素带来的影响）。")]),t._v(" "),l("blockquote",[l("p",[t._v("注意："),l("br")]),t._v(" "),l("ol",[l("li",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。"),l("br")]),t._v(" "),l("li",[t._v("计算BFC的高度时，浮动元素也参与计算。"),l("br")])])]),t._v(" "),l("h4",{attrs:{id:"如何触发或建立一个bfc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#如何触发或建立一个bfc"}},[t._v("#")]),t._v(" 如何触发或建立一个BFC?")]),t._v(" "),l("p",[t._v("W3C中定义：")]),t._v(" "),l("blockquote",[l("p",[l("strong",[t._v("浮动元素")]),t._v(" 和 "),l("strong",[t._v("绝对定位元素")]),t._v("，"),l("strong",[t._v("非块级盒子的块级容器")]),t._v("（例如 inline-blocks, table-cells, 和 table-captions），以及 "),l("strong",[t._v("overflow 值不为 “visible” 的块级盒子")]),t._v("，都会为他们的内容创建新的 BFC（这时这个元素中的内容就同处在一个BFC中）。")])]),t._v(" "),l("p",[t._v("当给某一元素添加以下样式中的任意一个时，就触发了BFC。")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("float: left / right / inherit  也就是除none以外的 "),l("strong",[t._v("浮动元素")])])]),t._v(" "),l("li",[l("p",[t._v("position: absolute / fixed "),l("strong",[t._v("绝对定位元素")]),t._v("，fixed 是 absolute 的一个子类，也属于绝对定位")])]),t._v(" "),l("li",[l("p",[t._v("display: inline-block / table-cell / table-captions")])])]),t._v(" "),l("blockquote",[l("p",[t._v("需要注意的是:"),l("br"),t._v("\ndisplay: table 本身不可以触发 BFC，但是由于 table 会产生匿名盒，而匿名盒的 display: table-cell 特性会触发 BFC，产生新的格式化上下文。"),l("br"),l("br"),t._v("\n匿名盒：CSS引擎自动生成的盒子，没有名字，不能被 CSS 选择符选中，不能被 CSS 选择符选中意味着不能用样式表添加样式。这意味着所有继承的 CSS 属性值为 inherit ，所有非继承的 CSS 属性值为 initial")])]),t._v(" "),l("ol",{attrs:{start:"4"}},[l("li",[t._v("overflow: hidden / auto / scroll / inherit")])]),t._v(" "),l("h5",{attrs:{id:"示例-自适应两栏布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例-自适应两栏布局"}},[t._v("#")]),t._v(" 示例 - 自适应两栏布局")]),t._v(" "),l("iframe",{attrs:{width:"100%",height:"300",src:"//jsfiddle.net/stonebreaker/jgv5h01k/5/embedded/result,html,css/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),l("h5",{attrs:{id:"示例-清除内部浮动"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例-清除内部浮动"}},[t._v("#")]),t._v(" 示例 - 清除内部浮动")]),t._v(" "),l("iframe",{attrs:{width:"100%",height:"200",src:"//jsfiddle.net/stonebreaker/qjv8xe1a/2/embedded/result,html,css/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),l("h5",{attrs:{id:"示例-防止边距重叠"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#示例-防止边距重叠"}},[t._v("#")]),t._v(" 示例 - 防止边距重叠")]),t._v(" "),l("iframe",{attrs:{width:"100%",height:"460",src:"//jsfiddle.net/stonebreaker/ct7Lp0ew/6/embedded/result,html,css/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),l("p",[t._v("参考：\nhttps://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context\nhttp://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html")])])}),[],!1,null,null,null);e.default=s.exports}}]);