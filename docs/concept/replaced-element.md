# 可替换元素

所谓可替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

例如：浏览器会根据 img 标签的 src 属性的值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；

又例如根据input标签的type属性来决定是显示输入框，还是单选按钮等。

html中的img、input、textarea、select、object都是替换元素。而现在，这个概念已经发生了变化，在新的规范中，html5涉及到的vid，canvas，menu元素也被认为是替换元素。

因此可以把替换理解为嵌入替换元素就可以理解为需要一些外部内容来嵌入它的空间的元素。

而不可替换元素（non-replaced element）就是不需要外部内容来填充它的空间的元素。


参考： https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element
