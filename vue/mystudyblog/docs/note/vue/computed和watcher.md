## 前言

在我们的模板中，我们一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定， Vue.js 都提供了完全的 JavaScript表达式支持，但是如果在模板中放入过多的逻辑会让模板过重，尤其当这种代码不止一次出现的时候。所以当遇到复杂的逻辑时，你可以选择使用计算属性

### 这里我用一个简单的相加的例子，先来看一下计算属性和其他方式下实现的效果。

![](https://user-gold-cdn.xitu.io/2020/2/28/1708a9f62dbf2a87?w=513&h=364&f=gif&s=67501)

## 1.计算属性

计算属性——当其依赖属性的值发生变化时，这个属性的值会自动更新，与其相关的DOM部分也会同步自动更新

```html
    <div class="">computed:</div>
    <input type="text" v-model="num1" >
    <input type="text" v-model="num2" >
    <input type="text" :value="addnum" >
```


```js
    computed:{
        addnum:{
        //getter
            get:function(){
            return parseInt(this.num1)+parseInt(this.num2)
            }
            //setter
            set:function(){
                //......
            }
        }
      },
```
其中addnum是计算属性，在默认的getter里，当计算属性里依赖的num1,num2的值变化后，addnum就会执行，否则他就使用上一次的计算结果，计算属性里，如果有需要，还可以提供setter，这里当计算属性改变时，会执行相应的方法。

## 2.methods
当然我们也可以用一个简单的方法来计算

```html
    <div class="">methods:</div>
    <input type="text" v-model="num5" >
    <input type="text" v-model="num6" >
    <input type="text" :value="add()" >
```

```js
methods:{
    add(){
      return parseInt(this.num5)+parseInt(this.num6)
    }
  }
```
## 3.watched
除了上面两种外，还可以使用vue提供的$watch，监听data里面数据的变化

```html
<div class="">watch:</div>
    <input type="text" v-model="num3" >
    <input type="text" v-model="num4" >
    <input type="text" :value="addnum2" >
```

```js
watch:{
    num3:function(newvalue){
      this.num3 = newvalue;
      this.later_add();  //交给一个方法，可以异步执行
    },
    num4:function(newvalue){
      this.num4 = newvalue;
      this.later_add();
    }
  },
methods:{
    later_add(){
      setTimeout(() => {
        this.addnum2 = parseInt(this.num3) + parseInt(this.num4)
      }, 2000);
    }
  }
```
## 比较、总结

#### 1.计算属性与methods
相比于方法，计算属性基于它的依赖缓存，只有当其依赖的值发生变化的时候，才会触发重新计算，而不像普通的方法函数，每当重新渲染的时后，都会重新执行一遍。
#### 2.计算属性和watched

```js
watch:{
    num3:function(newvalue){
      this.num3 = newvalue;
      this.later_add();  //交给一个方法，可以异步执行
    },
    num4:function(newvalue){
      this.num4 = newvalue;
      this.later_add();
    }
}，
methods:{
    later_add(){
      setTimeout(() => {
        this.addnum2 = parseInt(this.num3) + parseInt(this.num4)
      }, 2000);
    }
  }
```
这里的代码感觉像是重复的，每个值都要写一份这样类似的代码，但是你仔细发现，这里还可调用别的函数，在这个操作下，我们就可以实现异步操作，例如重要的数据请求操作（当然我这里只是一个简单的延迟执行，但是异曲同工嘛），这是计算属性无法做到的。