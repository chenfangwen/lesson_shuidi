const http = require('http');
const url = require('url')
http.createServer((req, res) => {
    let urlObj = url.parse(req.url)
    console.log(req.url, myurl)
    // let cb = new URLSearchParams(myurl.query).get('callback')
    let cb = urlObj.query.split('=')[1]
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