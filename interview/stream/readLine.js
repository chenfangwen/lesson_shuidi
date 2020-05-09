const readlinde = require('readline')
const fs = require('fs')

const rl = readlinde.Interface({
    input: fs.createReadStream('./readme.md')
})

rl.readlinde()