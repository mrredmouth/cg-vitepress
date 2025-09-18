## 标题
**Input**
````md
```
# 我是一级标题
## 我是二级标题
### 我是三级标题
#### 我是四级标题
##### 我是五级标题
###### 我是六级标题

我是一级标题
===

我是二级标题
---
```
````


## 强调
1. **粗体**
````md
**粗体1**
````

2. *斜体1*  
````md
*斜体1*
````

3. ~~删除文字~~  
````md
~~删除文字~~
````

4. ==高亮1==

````md
==高亮1==
````
  
5. <mark>高亮2</mark>
````md
<mark>高亮2</mark>
````



## 注释
<!--我是注释1-->
[//]: # (我是注释2)
#### 代码法
    <div style='display:none'>
        哈哈哈哈，看不到我的我隐藏的很深
    </div>
#### html注释语法
    <!--哈哈哈哈，我是注释，不会在浏览器中显示-->
#### markdown注释语法
    [//]: # (注释，不会在浏览器中显示)
    [^_^]: # (我是注释)
    [//]: <> (我是注释)
    [comment]: <> (我是注释)


## 列表
**有序列表**
1. 有序列表1
2. 有序列表2
3. 有序列表3

**无序列表**
* 无序列表
* 无序列表
+ 无序列表
+ 无序列表
- 无序列表
- 无序列表

## 表格
1. github风格表格

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

2. 其他

| <div style="width:300px">修改宽度</div> | 降价 | 说明 | 
| :-----: | --- | --- | 
| / | [Home] | `高亮显示` | 
| /a/ | [a] | README文件位于a子目录中。 | 
| /a/a.1.md | [a - a.1] | a 子目录中的a.1.md文件；注意.md扩展名。 | 
| /a/a.1.html | [a - a.1] | a 子目录中的 a.1.md 文件；注意， .html 扩展名仍然指向 .md 文件 |

3. html标签形式
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>城市</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
      <td rowspan="2">杭州</td> <!-- 合并两行 -->
    </tr>
    <tr>
      <td>李四</td>
      <td>30</td>
      <!-- 城市单元格已由上一行的 rowspan 覆盖 -->
    </tr>
  </tbody>
</table>

## 块
### 引用
**input**
````md
>单行引用

>多行引用
>
>多行引用

>嵌套引用
>>嵌套引用
>>>嵌套引用
````
**output**
>单行引用

>多行引用
>
>多行引用

>嵌套引用
>>嵌套引用
>>>嵌套引用


## Custom Containers 自定义容器

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::


### 折叠块
**input**
````md
::: details
This is a details block.
:::

::: details 代码
``` java
System.out.println("Hello to see U!")
```
:::

<details>
<summary>点我展开</summary>
<pre><code>
System.out.println("Hello to see U!")
</code></pre>
</details>
````

**output**

::: details
This is a details block.
:::

::: details 代码
``` java
System.out.println("Hello to see U!")
```
:::

<details>
<summary>点我展开</summary>
<pre><code>
System.out.println("Hello to see U!")
</code></pre>
</details>

### 代码块


#### 单行代码
     5个空格
`单词`  
``单条语句``
```
多条语句1
多条语句2
```

#### 代码
``` js
export default {
  name: 'MyComponent',
  // ...
}
```

## 链接
### 网址链接
#### 内联方式
[百度](http://www.baidu.com)

+ `尽量使用%20代替空格`
[link](https://www.example.com/my%20great%20page) 

+ 链接即是自己本身
<http://www.baidu.com>

```
[百度](http://www.baidu.com)

+ `尽量使用%20代替空格`
[link](https://www.example.com/my%20great%20page) 

+ 链接即是自己本身
<http://www.baidu.com>
```

#### 引用方式
这是 [百度][1] 和 [雅虎][2] 

[1]: http://www.baidu.com
[2]: https://www.yahoo.com


### 图片
#### 内联方式1
![图片1](/images/Crystal.jpg '描述：内联图片')
#### 内联方式2
<img :src="$withBase('/images/Crystal.jpg')" alt="内联图片img" />

#### 内联方式3
<img :src="('/images/Crystal.jpg')" alt="内联图片img">


#### 引用方式
![图片2][01]

[01]: /images/Crystal.jpg "描述：引用图片"


### 导航
1. 绝对路径  
[跳转到首页](/)  
[跳转到 guide](/guide/)  
[跳转到 markdown](/guide/markdown/) `[跳转到 markdown](/guide/markdown/)`  

2. 相对路径  
[跳转到 emojis](emojis.md) `[跳转到 emojis](emojis.md)`  

3. 跳转到标题  
[跳转到指定标题 代码块](./#代码块) `[跳转到指定标题 代码块](./#代码块)`  
[字体颜色 绝对路径](/guide/markdown/colors.md#字体)   

4. 跳转到本地文件  
[my link](D:\\projects\\ccgProjs\\vue3\\cg-vitepress\\logs\\app.log)

## 转义字符
显示结果	| 描述	|输入	| 实体编号
-- | --- | -- | --
| |空格	|`&nbsp;`	|`&#160;`
<	|小于号|	`&lt;`|	`&#60;`
>	|大于号|	`&gt;`|	`&#62;`
&	|和号	|`&amp;`|	`&#38;`
"	|引号	|`&quot;`|	`&#34;`
'	|撇号|	`&apos;`(IE不支持) |`&#39;`
￠	|分	|`&cent;`	|`&#162;`
£	|镑	|`&pound;`|	`&#163;`
¥	|日圆|	`&yen;`	|`&#165;`
§	|节	|`&sect;`	|`&#167;`
©	|版权|	`&copy;`|	`&#169;`
®	|注册商标	|`&reg;`|	`&#174;`
×	|乘号	|`&times;`	|`&#215;`
÷	|除号	|`&divide;`|	`&#247;`
&radic;||`&radic;`|

#### 不解析转义字符
&radic;
方式一：

     &radic;
方式二：单反引号-单词；双反引号-句子；
`&radic;`
``&radic;``
方式三：三反引号-语句块；
``` html
&radic;
```

## html标签

#### 不解析html标签
``` html
<a>xianshi ```</a>
```
<xmp><a>xianshi xmp</a></xmp>
<pre><textarea><a>woshi textarea</a></textarea></pre>
<pre>&lta&gtwoshi pre&lt/a&gt</pre>


# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```



## 徽标

+ Title1 <Badge type="tip" text="^1.9.0" />
+ Title2 <Badge type="warning" text="beta" />


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
