import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
// import {About} from './components'
import {App} from './app'
import {About,MembersPage} from './components/index'

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                {/* route 数组  exact 在别的路径显不显示 */}
                <Route path="/" component={ App } />
                <Switch>
                    {/* 只匹配一个 */}
                    {/* <Route path="/" exact  component={ About } /> */}
                    <Route path="/about" component={ About } />
                    <Route path="/members" component={ MembersPage } />
                </Switch>
            </div>
        </HashRouter>
    )
}
