虚拟DOM(VUE/REACT 提升页面性能) + 算法Tree(二叉树，二叉搜索树，平衡树，红黑树...) + 重绘（CTO 滴滴顶级传统）浏览器工作原理 = 顶级公司就业(相遇 , DOM 树).

如果下载 CSS 文件阻塞了，会阻塞 DOM 树的合成吗? 会阻塞页面的显示吗？ 

不会阻塞 DOM 树的合成， 会阻塞页面的显示 
不同阶段 

webpack ? 从url -》 download html Document  -> 解析出来页面(看到的)  分阶段 
webpack  工作流， 不同的阶段 -》 打包输出dist.js 
网页的显示也一样 

1. DOM 树的合成 (?)
2. 页面的显示, 重绘， 重排（css处理有关）
浏览器把页面展示（绘制）出来， 工作流程
-  入口是什么？ 页面绘制的入口 index.html 网络子进程 Buffer 
  resolve: ['.html', '.js', '.css']
  html 超文本标记语言   <p>渲染流程</p>
  dom   标签结点(docuemnt.createElement)，  文档节点(docuemnt.createTextNode)
  css   层叠?样式表  stylesheet  p {color: red}
  js   JavaScript      p.style.color="gray"
  document 文档开始， 空白的， DOM树没形成， 渲染树更没有， 布局， 样式没有， js event loop  没有

  webpack  rules , 渲染通过最初的html文档类容， 进行分别处理
  为什么有标签就可以？  

- 不同类型的文件， 不同的loader, 
- 输出是什么？ 