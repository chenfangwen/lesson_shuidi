#  大文件上传及断点续传


1. 大文件 上传 
  切片
  js 在es6 文件对象File node fiel stream 有所增强
  任何文件都是二进制 分割blob 
  star size offset
  http请求可并发 分成n个切片 并发上传 速度更快

  - 前端切片 让http 并发带来上传大文件的快感
  - 支持 file.slice 完成切片 blob类型文件切片 js 二进制文件类型的 blob协议 在文件上传到服务器之前就可以提前预览
