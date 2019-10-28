# 选择器分类

#### 元素选择器

tag / .class / #id

#### 关系选择器

E F / E>F / E+F / E~F

##### 示例：选择后面的兄弟元素
<iframe width="100%" height="240" src="//jsfiddle.net/stonebreaker/kwe24nqx/15/embedded/css,result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### 属性选择器

~= / ^= / $= / |=

#### 伪类选择器

匹配元素的某种状态，如:
- a:link / a:visited / a:hover / a:active
- E:enabled / E:disabled / E:checked
- E:focus
- ...

##### 示例：E:checked
<iframe width="100%" height="200" src="//jsfiddle.net/stonebreaker/aewx14g8/3/embedded/css,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### 伪元素(伪对象)选择器

匹配元素的一部分(匹配虚拟节点)

##### 示例：修改input placeholder的样式:
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/hqrj910y/16/embedded/css,result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### 示例：修改scrollbar的样式:
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/sjeu67mL/16/embedded/css,result,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### 示例：修改选择的文本的样式:
<iframe width="100%" height="150" src="//jsfiddle.net/stonebreaker/x4uc1r37/4/embedded/css,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

> 参考：https://changfengliu.github.io/blog/2017/03/08/css-tricks/

#### 媒体查询选择器
