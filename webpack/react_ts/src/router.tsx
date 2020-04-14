import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
// import {About} from './components'
import {App} from './app'

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                {/* route 数组   */}
                <Route path="/" component={ App } />
            </div>
        </HashRouter>
    )
}
