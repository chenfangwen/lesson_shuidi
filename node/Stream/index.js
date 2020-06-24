const fs = require('fs')

const zlib = require('zlib');
// console.log(process.argv)
const file = process.argv[2];

// console.log(file)

// buffer
// fs.readFile(file, (err, buffer) => {
//     // console.log(buffer);
//     //文件全部读取完， 可能内存不够， buffer不超过1G
//     zlib.gzip(buffer, (err, buffer) => {
//         fs.writeFile(file+'.gz', buffer, err => {
//             console.log('file gzip successfully')
//         })
//     })
// })


// stream  流慢慢的，不用全部
fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file+ '.gz'))
    .on('finish', () => {
        console.log('success')
    })