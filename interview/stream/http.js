const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    const createReadStream = fs.createReadStream('./index.html')
    createReadStream.pipe(res)
})
.listen(8080,() => {
    console.log('8080')
})