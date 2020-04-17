import './styles/main.styl';
import './styles/main.css';
import './styles/font.css';
console.log('aaaa')


//字体

let $body = document.querySelector('body')

$body.append(document.createElement('br'))
let $fontTitle = document.createElement('h1')
$fontTitle.innerHTML = '吾心系依'
$body.append($fontTitle)

let $fontWrapper = document.createElement('div')

let $font = document.createElement('i')
$font.className = 'iconfont'
$font.innerHTML = '&#xe609;'

$fontWrapper.append($font)
$body.append($fontWrapper)