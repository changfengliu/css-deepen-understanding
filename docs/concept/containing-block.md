# Containing Block

The size and position of an element are often impacted by its containing block. **Most often, the containing block is the content area of an element's nearest block-level ancestor, but this is not always the case**. In this article, we examine the factors that deterime an element's containing block.

When a user agent (such as your browser) lays out a document, it generates a box for every element. Each box is divided into four areas:

- Content area
- Padding area
- Border area
- Margin area

![](../assets/box-model2.png)

### Effects of the containing block
Before learning what determines the containing block of an element, it's useful to know why it matters in the first place.

**The size and position of an element are often impacted by its containing block**. Percentage values that are applied to the width, height, padding, margin, and offset properties of an absolutely positioned element (i.e., which has its position set to absolute or fixed) **are computed from the element's containing block**.

### Identifying the containing block
The process for identifying the containing block depends entirely on the value of the element's position property:

1. If the position property is static or relative, the containing block is formed by **the edge of the content box of the nearest ancestor element that is a block container** (such as an inline-block, block, or list-item element) or which establishes a formatting context (such as a table container, flex container, grid container, or the block container itself).

2. If the position property is absolute, the containing block is formed by **the edge of the padding box of the nearest ancestor element that has a position value other than static** (fixed, absolute, relative, or sticky).

3. If the position property is fixed, the containing block is established by **the viewport** (in the case of continuous media) or the page area (in the case of paged media).

4. If the position property is absolute or fixed, the containing block may also be formed by **the edge of the padding box of the nearest ancestor element that has the following:**
	- **A transform or perspective value other than none**
	- **A will-change value of transform or perspective**
	- **A filter value other than none or a will-change value of filter (only works on Firefox)**.

Note: The containing block in which the root element (<html>) resides is a rectangle called ***the initial containing block***. It has the dimensions of the viewport (for continuous media) or the page area (for paged media).

### Calculating percentage values from the containing block
As noted above, when certain properties are given a percentage value, the computed value depends on the element's containing block. The properties that work this way are box model properties and offset properties:

1. The height, top, and bottom properties compute percentage values from the height of the containing block. **If the height of the containing block depends on its contents, these values become 0 when the containing block has a position of relative or static**.

2. The width, left, right, padding, and margin properties compute percentage values from the width of the containing block.

在 CSS2.1 中，很多框的定位和尺寸的计算，都取决于一个矩形的边界，这个矩形，被称作是包含块( containing block )。 一般来说，(元素)生成的框会扮演它子孙元素包含块的角色；我们称之为：一个(元素的)框为它的子孙节点建造了包含块。包含块是一个相对的概念，每个框关于它的包含块都有一个位置，但是它不会被包含块限制；它可以溢出(包含块)。包含块上可以通过设置 ‘overflow’ 特性达到处理溢出的子孙元素的目的。

参考：

1. https://www.w3.org/TR/CSS21/visuren.html#containing-block
2. https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
