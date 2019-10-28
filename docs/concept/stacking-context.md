# The Stacking Context

The stacking context is **a three-dimensional conceptualization（3D概念）** of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage.

HTML elements occupy this space in priority order based on element attributes.


Using z-index, the rendering order of certain elements is influenced by their z-index value. This occurs because these elements have special properties which cause them to form a stacking context.

A stacking context is formed, anywhere in the document, by any element in the following scenarios:

- Root element of document (HTML根节点).
- Element with a position value **"absolute" or "relative" and z-index value other than "auto"**.
- Element with a position value **"fixed" or "sticky"** (sticky for all mobile browsers, but not older desktop).
- Element that is a child of a flex (flexbox) container, with z-index value other than "auto".
- Element with a **opacity value less than 1** (See the specification for opacity).
- Element with a mix-blend-mode value other than "normal".
- Element with any of the following properties with value other than "none":
	- transform
	- filter
	- perspective
	- clip-path
	- mask / mask-image / mask-border
- Element with a isolation value "isolate".
- Element with a -webkit-overflow-scrolling value "touch".
- Element with a will-change value specifying any property that would create a stacking context on non-initial value (see this post).

Within a stacking context, child elements are stacked according to the same rules previously explained. Importantly, the z-index values of its child stacking contexts only have meaning in this parent. Stacking contexts are treated atomically as a single unit in the parent stacking context.

In summary:

- Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.
- Each stacking context is completely independent from its siblings: only descendant elements are considered when stacking is processed.
- Each stacking context is self-contained: after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context.


Note: The hierarchy of stacking contexts is a subset of the hierarchy of HTML elements, because only certain elements create stacking contexts. We can say that elements that do not create their own stacking contexts are assimilated by the parent stacking context.

参考：
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
