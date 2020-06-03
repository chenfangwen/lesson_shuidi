import React from 'react';
import ReactDom from 'react-dom';
//调和操作，不用再渲染
import Header from '../components/Header'

ReactDom.hydrate(<Header/>, document.getElementById('root'))