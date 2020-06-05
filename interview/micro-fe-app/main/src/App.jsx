import React, {
  Suspense, lazy
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './home'
// Suspense 悬念
// 组件 懒加载，加载这么过程，
const MicroApp1 = lazy(() => System.import('http://127.0.0.1:8080/Pay.js'));
const MicroApp2 = lazy(() => System.import('http://127.0.0.1:8080/Goods.js'));
function Pay() {
  // 引入一个远程的 Pay 资源，Pay 上线 就是 url
  
  // fetch('.js')
  // xmlhttprequest('.js')
  return (
    <Suspense fallback="loading...">
      <MicroApp1 />
    </Suspense>
  )
}
function Goods() {
  // 引入一个远程的 Pay 资源，Pay 上线 就是 url
  
  // fetch('.js')
  // xmlhttprequest('.js')
  return (
    <Suspense fallback="loading...">
      <MicroApp2 />
    </Suspense>
  )
}
// 主应用 
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
          <li>
            <Link to="/goods">Goods</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay}/>
          <Route path="/goods" component={Goods}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
