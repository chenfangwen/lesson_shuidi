## 一、flex容器基础概念

flex-container —— flex容器
flex-item —— 子元素
水平方向上有一条轴线（主轴） —— main axis
垂直方向上有一条轴线（十字轴） —— cross axis
先准备一下初始化代码， 只有三个文件。
1、index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="basic.css">
  <link rel="stylesheet" href="style.css">
  <title>flex</title>
</head>
<body>
  <div class="container">
    <div class="item item-1"><span> 1 </span></div>
    <div class="item item-2"><span> 2 </span></div>
    <div class="item item-3"><span> 3 </span></div>
    <div class="item item-4"><span> 4 </span></div>
    <div class="item item-5"><span> 5 </span></div>
  </div>
</body>
</html>
```
2、basic.css
```css
body{
  padding: 0;
  margin: 0;
}
.container{
  background: #42b983;
  padding: 10px;
}

.item{
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  color: #cccccc;
  padding: 30px;
  display: block;
  text-align: center;
}

.item span{
  font-size: 50px;
}
```

接下来我们在 style.css 中改变一些属性来学习flex布局。
## 二、flex-container（弹性布局父容器）属性
### flex布局（将对象作为弹性伸缩盒显示）
```css
.container{
  display: flex;
}
```

### inline-flex布局（将对象作为内联弹性伸缩盒显示）
```css
.container{
  display: inline-flex;
}
```

###  flex-direction （子元素的排列方向）
```css
默认是水平方向（flex-direction: row）
.container{
  display: flex;
  flex-direction: column;
}
```

### flex-wrap （是否要换行显示）
我们先添加一些子元素，便于效果展示

默认是不换行（flex-wrap: nowrap）

```css
.container{
  display: flex;
  flex-wrap: wrap;
}
```

### flex-flow（同时控制flex-direction和flex-wrap）
```css
.container{
  display: flex;
  flex-flow: row-reverse wrap;
}
row-reverse 即水平反方向 还有column-reverse垂直反方向、wrap-reverse（反向换行）
```

### justify-content（子元素主轴方向间隔）
```css
默认是（justify-content: flex-start）
.container{
  display: flex;
  justify-content: flex-end;
}


.container{
  display: flex;
  justify-content: center;
}


.container{
  display: flex;
  justify-content: space-between;
}


.container{
  display: flex;
  justify-content: space-around;
}
```

space-around 和 space-between 的区别就是 space-between 只会在子元素之间添加间隔，space-around 会把父容器边界也视为子元素添加间隔
### align-items（子元素侧轴方向对齐方式）
现在我们把容器的高度设置一下
.container{
  display: flex;
  justify-content: space-around;
  height: 300px;
}
默认是（align-items: stretch）拉伸 

```css
flex-start（容器顶部）
.container{
  display: flex;
  justify-content: space-around;
  height: 300px;
  align-items: flex-start;
}


flex-center（居中）
.container{
  display: flex;
  justify-content: space-around;
  height: 300px;
  align-items: center;
}


flex-end（容器底部）
.container{
  display: flex;
  justify-content: space-around;
  height: 300px;
  align-items: flex-end;
}


baseline（以子元素里面的内容作为基准线水平对齐）
.container{
  display: flex;
  justify-content: space-around;
  height: 300px;
  align-items: baseline;
}

.item-1{
  padding-top: 60px;
}
.item-2{
  padding-top: 99px;
}
```


### align-content （子元素侧轴方向对齐方式）
```css
所有属性如下：（默认值为 stretch）
align-content: stretch|center|flex-start
|flex-end|space-between|space-around;
.container{
  display: flex;
  flex-wrap: wrap;
  height: 300px;
}
```



### flex-item（子元素属性）
#order（改变子元素的排列顺序）
默认所有元素 order 属性值为 0，所以我们可以设置子元素的 order 属性来控制他们的顺序。
```css
.container{
  display: flex;
  height: 500px;
  justify-content: space-around;
  align-items: flex-start;
}

.item-1{
  order: 1;
}
.item-6{
  order: -1;
}
```
## flex（flex-grow，flex-shrink 和 flex-basis的缩写）
默认是：flex: 0 1 auto
关于这个属性我看到一篇文章讲的通俗易懂，奉上如下：
CSS flex属性深入理解——张鑫旭
```css
#align-self（单个控制子元素侧轴方向布局）
.container{
  display: flex;
  height: 500px;
  justify-content: space-around;
  align-items: flex-start;
}
.item-2{
  align-self: center;
}
.item-3{
  align-self: flex-end;
}
.item-4{
  align-self: center;
}
.item-6{
  align-self: center;
}
```
## 结语：
自己对弹性布局早已闻其名，但却一直一知半解，此文为自己做个小总结💦💦。
重点

如果flex的属性值只有一个值，则：
如果是数值，例如 flex: 1，则这个 1 表示 flex-grow，此时 flex-shrink 和 flex-basis 都使用默认值，分别是 1 和 auto。 如果是长度值，例如 flex: 100px，则这个 100px 显然指 flex-basis，因为3个缩写 CSS 属性中只有 flex-basis 的属性值是长度值。此时 flex-grow 和 flex-shrink 都使用默认值，分别是 0 和 1。

如果 flex 的属性值有两个值，则：
第1个值一定指 flex-grow，第2个值根据值的类型不同表示不同的 CSS 属性，具体规则如下： 如果第 2 个值是数值，例如 flex: 1 2，则这个 2 表示 flex-shrink，此时flex-basis 使用默认值 auto。 如果第 2 个值是长度值，例如 flex: 1 100px，则这个 100px 指flex-basis，此时 flex-shrink 都使用默认值 0。

如果 flex 的属性值有三个值，则这 3 个值分别表示 flex-grow，flex-shrink 和 flex-basis。