const fs = require('fs')
const util = require('util')
const fsReadfile = mypromisify(fs.readFile)

fsReadfile('./reduce-map.js',{ encoding: 'utf-8' })
.then(info => {
    console.log(info)
})


function mypromisify(func) {
    return (...args) => {
        return new Promise((resolve,reject) => {
            func(...args,(err,res) => {
                if(err) reject(err)
                resolve(res)
            })
        })
    }
}