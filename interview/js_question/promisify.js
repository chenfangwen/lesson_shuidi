const fs = require('fs')
const util = require('util')
const fsReadfile = mypromisify(fs.readFile)

fsReadfile('./reduce-map.js',{ encoding: 'utf-8' })
.then((info) => {
    console.log(info)
})


function mypromisify(func) {
    return (...arguments) => {
        console.log(arguments)
        return new Promise((resolve,reject) => {
            func(...arguments,(err,res) => {
                if(err) reject(err)
                else resolve(res)
            })
        })
    }
}