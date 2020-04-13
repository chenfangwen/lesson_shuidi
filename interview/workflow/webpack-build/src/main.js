console.log('我爱刘姿依')
// require('./style/index.css')

import TS from './ts/index.ts'

let ts = new TS

const h2 = document.createElement('h2')
h2.innerText = '姿依'
h2.className = 'test'

document.body.append(h2)   