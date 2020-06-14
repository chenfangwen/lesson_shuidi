
capture value
这是官方特意设置的机制，官方原文是：This prevents bugs caused by the code assuming props and state don’t change；（强行翻译一下，大概意思是：防止因 React 认为 props 或者 state 没有变更而引起的 bug）

每次 Render 的内容都会形成一个快照并保留下来，因此当状态变更而 Rerender 时，就形成了 N 个 Render 状态，而每个 Render 状态都拥有自己固定不变的 Props 与 State。

解决 
定义在全局的一个对象的属性上/ useRef()