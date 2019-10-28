# HTML 属性

HTML 属性为 HTML元素提供附加信息。

属性名称的规范写法：小写，加双引号。如：
```html
<img title="test" alt="css,html" src="./css.png" />
```
注意：大写的属性名是允许的，但通过dom接口attributes访问到的是转化为小写的形式。

#### 有些HTML属性描述关联关系

##### for: 关联label与form control

分显式关联与隐式关联:

显式的联系：
``` html
<label for="SSN">Social Security Number:</label>
<input type="text" name="SocSecNum" id="SSN" />
```
隐式的联系：
``` html
<label>Date of Birth: <input type="text" name="DofB" /></label>
```

参考：http://www.w3school.com.cn/tags/att_label_for.asp

##### form: 关联form control与form，且其优先级高于form control与form的默认关联.
参考：https://www.impressivewebs.com/html5-form-attribute/



#### 内容属性与IDL属性(Content versus IDL attributes)
In HTML, most attributes have two faces: the content attribute and the IDL attribute.
大多数的 HTML 属性拥有两面性：内容属性与IDL属性。

The **content attribute** is the attribute as you set it from the content (the HTML code - 在 html 中声明的属性) and you can set it or get it via **element.setAttribute()** or **element.getAttribute()**. The content attribute is always a string even when the expected value should be an integer (类型始终为 String). For example, to set an &lt;input&gt; element's maxlength to 42 using the content attribute, you have to call setAttribute("maxlength", "42") on that element.

The **IDL attribute** is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like **element.foo**(DOM 接口定义的属性). The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. ***In other words, the IDL attributes, in essence, reflect the content attributes***.

**Most of the time, IDL attributes will return their valules as they are really used**. For example, the default type for &lt;input&gt; elements is "text", so if you set input.type="foobar", the &lt;input&gt; element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the type IDL attribute will return the string "text".

**IDL attributes are not always strings;** for example, input.maxlength is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so input.maxlength is always going to return a number and when you set input.maxlength ,it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.

IDL attributes can reflect other types such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow the rules laid out in the specification, but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes  behave oddly (select.size, for example) and you should read the specifications to understand how exactly they behave.

参考：
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes
