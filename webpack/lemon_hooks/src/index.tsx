// import './app.css'
// console.log('sdfas')
import * as React from 'react'

import * as ReactDom from 'react-dom';
import {HelloComponent} from './hello'
import {App} from './app'

ReactDom.render(
    <App/>,
    document.getElementById('root')
)