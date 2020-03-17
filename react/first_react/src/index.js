import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//JSX语法  生成标签对象
// let app = <App />;

// let h1 = <h1>hello world!</h1>
// ReactDOM.render( h1, root );

// function clock(){
//     let time = new Date().toLocaleTimeString();
//     let element = (
//         <div>
//             <h1>陈先生</h1>
//             <h2>现在的时间是：{time}</h2>
//         </div>
//     )
//     let root = document.getElementById('root');
//     ReactDOM.render( element, root );
// }

//函数式组件
function Clock(props){
    return (
        <div>
            <h1>陈先生</h1>
            <h2>现在的时间是：{props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

function run(){
    let root = document.getElementById('root');
    ReactDOM.render( 
        <Clock date={new Date()} />,
        root
    );
}

// clock()

setInterval(run,1000)