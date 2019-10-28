# 过渡效果(时间轴)

CSS transitions 提供了一种在更改CSS属性时控制动画速度的方法。 其可以**让属性变化成为一个持续一段时间的过程，而不是立即生效的**。

比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS transitions 后该元素的颜色将逐渐从白色变为黑色，按照一定的曲线速率变化。并且这个过程可以自定义。

##### Transitions相关属性
	0. transition :
	1. transition-property
	2. transition-duration
	3. transition-timing-function
	4. transition-delay

###### 示例 1：
<iframe width="100%" height="400" src="//jsfiddle.net/stonebreaker/htgw5das/1/embedded/css,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

###### 注意：
> 并非所有的属性都可以定义动画，可动画属性列表是一个有限集合。参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties

###### 示例 2：结合transition 可让 JavaScript 效果更平滑
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/py4x1wf9/4/embedded/result,css,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

##### TransitionEnd事件

transitionend 事件会在 CSS transition 结束后触发.

###### 示例 2：
<iframe width="100%" height="310" src="//jsfiddle.net/stonebreaker/fL6dwkba/10/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

###### 注意：
>1. 当transition完成前移除transition时，如移除css的transition-property属性，事件将不会被触发.
>2. 在transition完成前设置 display为 "none"，事件不会被触发。
