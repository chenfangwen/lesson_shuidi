const http = require('http');
const url = require('url')
http.createServer((req, res) => {
    let myurl = url.parse(req.url)
    // console.log(req.url, myurl)
    let cb = new URLSearchParams(myurl.query).get('callback')
    console.log(cb)
    if(req.url.includes('/api')) {
        let data = ['js','html'];
        res.end(`${cb}({
            'code': 200,
            'data':${JSON.stringify(data)}
        })`)
    }
})
.listen(3000, () => {
    console.log('listening in 3000')
})