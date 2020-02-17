# material design 来自Google的风格
苹果 UI 拟物设计 扁平化设计
安卓 material design

特别？
    从css风格 --> 组件化 -> react入门
    波浪的感觉
    css? 思路
- material design 的灵魂 在对于交互的创新
    波浪感 进度条的进度感
    移动端细节 cursor:pointer 

    1. background 颜色渐变
    2. radial-gradient(circle,#fff 10%,transparent 11%) 及生成了背景，又没有图片
       白 10% 1%的透明
       transform scale(12)  12->0


- 做一堆的按钮
  为开发做准备 组件化
  要用的按钮 这里都会有 
  提供 通用的 变通的 各种常见要求的（70%的业务开发） 叫组件
  自己写 以后可以复用


- ReactDOM React 跟DOM交互的库
  基本语法
  组件时强大的 定义了一个button 组件

  1.  ReactDOM.render(
      <div>
        <Button>default</Button>
      </div>, document.getElementById('root'))
  2. function Button(props) {
      // 百般变化， 试应需求 前端开发， 变成组件开发
      
      //props 参数管家
      console.log(props);
      // console.log(props.children)
      let { children, type, circle, onClick, block } = props
      // console.log(type);
      return (
        <div 
        onClick={onClick}
        className = {`xButton ripple ${type} ${circle} ${block?'block':''}`} >
        { children }
        </div>
      )
    } 

