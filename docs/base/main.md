# CSS 是什么

CSS: 层叠样式表(**Cascading Style Sheets**), 是一种为 **Web文档/WebApp** 添加样式的一种简单方式。它描述了Web内容, 如HTML、SVG、XML等在不同的终端媒体上如何渲染。

> CSS定义Web内容的样式，不仅可修饰HTML的样式，也可以修饰 SVG、XML的样式。

> 参考：
> - https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS
> - https://www.w3.org/Style/styling-XML.en.html
> - https://www.w3cplus.com/svg/styling-svg-use-content-css.html

CSS 由 W3C 规范进行标准化。目前 CSS1 现已废弃, CSS2.1 是推荐标准, CSS3 分成多个小模块且正在标准化中。

CSS 可以作为一个用在桌面电脑、移动设备、平面印刷等领域的通用样式语言

##### CSS示例
<iframe width="100%" height="540" src="//jsfiddle.net/stonebreaker/ucomfrjp/12/embedded/html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### CSS的主要特征
- **声明式** - 简单易学
- **继承** - 子元素继承父元素的样式 (注意，不是所有的样式都可以继承，如padding)
- **层叠(级联,串连)** - 层叠意味着：继承、权重、优先级、覆盖。即由于样式的来源有多种，样式冲突时，依预定义的优先级规则计算出最终样式.

> 阅读:
> - Computed value: https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value
> - Used value：https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
> - Resolved value: https://developer.mozilla.org/en-US/docs/Web/CSS/resolved_value

#### CSS的缺陷

目前CSS的缺陷主要体现在:
- 全局性，不易模块化，代码管理困难，各种副作用。
- 静态声明式，不能抽取公用变量，代码重复冗余。
- 无逻辑, 无基础函数库，缺乏运行时动态计算能力.
- 与JS隔离，不能共享变量.
- 选择器不能根据子元素匹配父元素，如选择包含span的所有div/p。
- 各种兼容性问题

CSS的副作用主要体现在:
* 样式冲突
* 命名冲突

> 参考：https://philipwalton.com/articles/side-effects-in-css/
