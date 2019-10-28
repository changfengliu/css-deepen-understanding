# 元素定位

定位类型（Types of positioning）
1. A **positioned element** is an element whose computed position value is either relative, absolute, fixed, or sticky. (In other words, it's anything except static.)
2. A **relatively positioned element** is an element whose computed position value is relative. The top and bottom properties specify the vertical offset from its normal position; the left and right properties specify the horizontal offset.
3. An **absolutely positioned element** is an element whose computed position value is absolute or fixed. The top, right, bottom, and left properties specify offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.) If the element has margins, they are added to the offset.
4. A **stickily positioned element** is an element whose computed position value is sticky. It's treated as relatively positioned until its containing block crosses a specified threshold (such as setting top to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.

Most of the time, absolutely positioned elements that have height and width set to auto are sized so as to fit their contents. However, non-replaced, absolutely positioned elements can be made to fill the available vertical space by specifying both top and bottom and leaving height unspecified (that is, auto). They can likewise be made to fill the available horizontal space by specifying both left and right and leaving width as auto.

Except for the case just described (of absolutely positioned elements filling the available space):

- If both top and bottom are specified (technically, not auto), top wins.
- If both left and right are specified, left wins when direction is ltr (English, horizontal Japanese, etc.) and right wins when direction is rtl (Persian, Arabic, Hebrew, etc.).


### 可选值：

#### static
The element is positioned according to the **normal flow** of the document.
*The top, right, bottom, left, and z-index properties have no effect*.
This is the default value.

#### relative
The element is positioned according to the **normal flow** of the document, and then offset relative to itself based on the values of top, right, bottom, and left.
**The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.**
This value **creates a new stacking context** when the value of z-index is not auto. Its effect on table-\*-group, table-row, table-column, table-cell, and table-caption elements is undefined.

#### absolute
The element is removed from the normal document flow, and no space is created for the element in the page layout.
It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.
This value creates a new stacking context when the value of z-index is not auto. The margins of absolutely positioned boxes do not collapse with other margins.

#### fixed
The element is removed from the normal document flow, and no space is created for the element in the page layout.
It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none (see the CSS Transforms Spec), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with perspective and filter contributing to containing block formation.) Its final position is determined by the values of top, right, bottom, and left.
This value always creates a new stacking context. In printed documents, the element is placed in the same position on every page.

#### sticky
The element is positioned according to the **normal flow** of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left.

The offset does not affect the position of any other elements.

This value always creates a new stacking context. Note that a sticky element "sticks" to its nearest ancestor that has a "scrolling mechanism" (created when overflow is hidden, scroll, auto, or overlay), even if that ancestor isn't the nearest actually scrolling ancestor. This effectively inhibits any "sticky" behavior.



相对定位的元素：

<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/t0nv3mkr/3/embedded/result,css,html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

sticky定位1
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/np985r73/17/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

sticky定位2
<iframe width="100%" height="300" src="//jsfiddle.net/stonebreaker/g946vjsb/10/embedded/result,html,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

参考：
https://developer.mozilla.org/en-US/docs/Web/CSS/position
