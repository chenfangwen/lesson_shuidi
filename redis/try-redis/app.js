const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128')
let count=10;
client.set('cfw_key',10,function(err,obj){
    console.log(obj);
})
http.createServer((req,res) => {
    if(/^\/api/.test(req.url)>=0){
        //响应头  状态码StatusCode
        //          1xx： 请求进行中  2xx:请求成功   3xx:跳转  4XX:用户端错误   5xx:服务器端错误
        
        if(count>=0)
        {
            client.get('cfw_key',function(err,count){
                res.writeHead(200,{
                    'Content-Type':'text/json;charset=utf-8'
                })
            })
        if(count>0){
            client.decrby('cfw_key',1);
            res.end(JSON.stringify({
                name:'cfw',
                count:`您拥有${count}次调用权限`
            }))
        }
        else{
            res.writeHead(200,{
                'Content-Type':'text/json;charset=utf-8'
            })
            res.end(JSON.stringify({
                msg:'您已到达调用上限，请充值'
            }))
        }
        }
        
    }
})
.listen(7001)