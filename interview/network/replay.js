var http = require('http');

http.createServer(function(req, res) {
  // 一份代码， 满足后端两种需求， 
  // 1. axios   proxy   /api/posts  前后端分离  mvvm    响应头   text/json
  // 2. 传统的后端驱动型开发  html     mysql + 套页面  mvc    text/html 
  // 后端视角
  // mysql 取出来的
  let posts = [{
    id: '5e8c94a7f265da47a74126d4',
    title: '怎么排查堆内存溢出呀？'
  }, {
    id: '5eb7ebea5188256d723151fb',
    title: '给前端工程师的一张Dart语言入场券'
  }]
  if (req.url === '/posts') { // url 
    // res.end(JSON.stringify(posts) )
    if (req.headers['Content-Type'] == 'text/json') {
        res.end(JSON.stringify(posts) )
    } else {
        let postHtml = posts.map((item,index) => {
            return `<li>${item}</li>`
        })
        res.writeHead(200,{'Content-Type': 'text/html;charset:utf-8'})
        res.end(`
            <html>
                <head></head>
                <body>
                    <ul>
                        ${postHtml}
                    </ul>
                </body>
            </html>
        `)
    }
  }
//   res.end('<h1>hello world</h1>')
  
}).listen(1314);
