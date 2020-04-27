// import './app.css'
// console.log('sdfas')
import * as React from 'react'

import * as ReactDom from 'react-dom';
import {HelloComponent} from './hello'
import {AppRouter} from './router'

ReactDom.render(
    <AppRouter/>,
    document.getElementById('root')
)