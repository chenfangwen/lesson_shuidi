import React from 'react';
import { renderRoutes } from 'react-router-config'

function Home(props){
    console.log(props)
    const {route} = props
    return (
        <div>
        <h1>hello 陈方闻</h1>
        { renderRoutes(route.routes) }
        </div>
    );
}
 
export default React.memo(Home);