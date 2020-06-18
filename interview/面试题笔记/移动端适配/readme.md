
所谓移动端适配，就是WebApp在不同尺寸的屏幕上等比显示

## 第一种方法：viewport适配
- 原理：通过设置 initial-scale , 将所有设备布局视口的宽度调整为设计图的宽度.

//获取meta节点
var metaNode = document.querySelector('meta[name=viewport]');

//定义设计稿宽度为375
var designWidth = 375;

//计算当前屏幕的宽度与设计稿比例
var scale = document.documentElement.clientWidth/designWidth;

//通过设置meta元素中content的initial-scale值达到移动端适配
meta.content="initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no";

## 第二种方法：借助media实现rem适配
rem：CSS的长度单位， 根元素字体大小的倍数，只有根元素字体大小有关； html 中的根元素即 html 元素。

大部分浏览器的默认字体大小都是16px，所以1rem = 16px；

- rem适配原理: 长度单位都是用 rem 设置
    当屏幕尺寸改变时，只需要修改 html 元素的 font-size 即可实现等比适配
    我们在制作页面的时候，只考虑跟设计稿相同的屏幕尺寸即可，其他尺寸屏幕自动适配
//对屏幕大小划分了html不同的font-size
@media screen and (min-width: 320px) {html{font-size:50px;}}
@media screen and (min-width: 360px) {html{font-size:56.25px;}}
@media screen and (min-width: 375px) {html{font-size:58.59375px;}}
@media screen and (min-width: 400px) {html{font-size:62.5px;}}
@media screen and (min-width: 414px) {html{font-size:64.6875px;}}
@media screen and (min-width: 440px) {html{font-size:68.75px;}}
@media screen and (min-width: 480px) {html{font-size:75px;}}
@media screen and (min-width: 520px) {html{font-size:81.25px;}}
@media screen and (min-width: 560px) {html{font-size:87.5px;}}
@media screen and (min-width: 600px) {html{font-size:93.75px;}}
@media screen and (min-width: 640px) {html{font-size:100px;}}
@media screen and (min-width: 680px) {html{font-size:106.25px;}}
@media screen and (min-width: 720px) {html{font-size:112.5px;}}
@media screen and (min-width: 760px) {html{font-size:118.75px;}}
@media screen and (min-width: 800px) {html{font-size:125px;}}
@media screen and (min-width: 960px) {html{font-size:150px;}}

## 第三种方法：JS配合修改配合rem适配
var designWidth = 375;  		// 设计稿宽度
var remPx = 100;               // 在屏幕宽度375px，的时候，设置根元素字体大小 100px
var scale = window.innerWidth / designWidth； //计算当前屏幕的宽度与设计稿比例
// 根据屏幕宽度 动态计算根元素的 字体大小
document.documentElement.style.fontSize = scale*remPx + 'px';

这里我们计算当前屏幕的宽度与设计稿比后用比例scale乘上100，是因为rem都是基于font-size值设置的，100便于计算，值可以为任意数，比如10，但是Chrome中最小为12，所以这里选择用100；

比如某个元素，设计稿设计宽度为 640px， 我们需要在css中设置 width: 6.4rem
比如某个元素，设计稿设计字体大小是 16px， 我们需要在css中设置 font-size:0.16rem
从而达到rem适配。

## 第四种方法：JS动态修改配合CSS预处理器（less）
	// 计算屏幕宽度
var screen = document.documentElement.clientWidth;
	// 计算字体大小，取屏幕宽度的16分之一
var size = screen / 16;
	// 设置根元素字体大小
document.documentElement.style.fontSize = size + 'px';

js获取当前屏幕的宽度，将屏幕宽度的16分之一设置给html的font-size

// 此时设计稿的宽度为375，定义一个less变量等于16分之一的设计稿宽度
@rem: 375/16rem;
1
2
如果此时设计稿中的16可以为任意值，你设置多少，js中屏幕宽度就除于多少再赋值给html的font-size。

若设计稿中的某元素设置宽高为200px

.box{
	width：200px;
    height:200px;
}

此时可以替换为：

.box{
	width：200/@rem;
    height:200/@rem;
}

分析：

设计稿中的元素尺寸都是基于设计稿的宽度而定，如上述，200px的宽度是基于设计稿375px而定的，但当js中获取的宽度发生改变时，需要解决适配问题。假设js中获取的此时屏幕宽度为750px，那么此时html的font-size值为750/16 px；

此时计算box的width为400px

注：1rem = 1 html的font-size

此方法不需要进行单位数值的计算，只需要定义一个less变量，再查找替换将单位px换成 /@rem 即可。

## 第五种方法：JS动态修改配合rem适配
这种方法跟第四种雷同，但不需要再在less中定义变量，只需要进行js获取配合查找替换px即可。

	// 计算屏幕宽度
var screen = document.documentElement.clientWidth;
	// 设置根元素字体大小
document.documentElement.style.fontSize = screen + 'px';

.box{
	width：200px;
    height:200px;
}

.box{
	width：200/375rem;
    height:200/375rem;
}

分析：

这种方法是js动态获取屏幕宽度，直接将html的font-size设置为屏幕的宽度，再在less中进行换算。
若此时js获取的屏幕宽度为750px，html的font-size值设置为750px后，此时计算box的width为400px

200/375rem = 200/375*750 px = 400px